import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UseSortableData from '/js/hooks/useSortableData';
import './table.scss';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const TableComponent = (props) => {
    const [children, requestSort, sortConfig] = UseSortableData(props.data);
    const [checkedValues, setCheckedValues] = useState([]);
    const [selectAllChecked, setSelectAllChecked] = useState(false);
    const [data, setData] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const tableHeaders = ["Name", "Type", "#Rule", "Status", "Last Activated On"];

    const keys = {
        Name: 1,
        Type: 5,
        "#Rule": 3,
        Status: 4,
        'Last Activated On': 2
    };

    const updateData = (newData) => {
        setData(newData);
        navigate(`/rules?name=${getCrumb(newData)}`);
    };

    useEffect(() => {
        setData(children);
    }, [children]);

    useEffect(() => {
        const queryName = new URLSearchParams(location.search).get('name');
        const crumbs = queryName ? queryName.split('%').filter(crumb => crumb !== '') : [];
        const pathname = crumbs.length > 0 ? crumbs[crumbs.length - 1] : '';
        const duplicateChildren = [...children];

        const newData = duplicateChildren.filter(item => item.id === pathname)[0]?.children || [];
        updateData(newData);
    }, [location, children]);

    useEffect(() => {
        setIsSortIcon(sortConfig !== null);
    }, [sortConfig]);

    const handlefun = (column) => {
        requestSort(column);
    };

    const handleChecked = (e) => {
        const checkboxValue = e.target.checked;
        const name = e.target.name;

        if (checkboxValue) {
            setCheckedValues(prevCheckedValues => [...prevCheckedValues, name]);
            props.setRowsCount(prevRowsCount => prevRowsCount + 1);
        } else {
            setCheckedValues(prevCheckedValues =>
                prevCheckedValues.filter(value => value !== name)
            );
            props.setRowsCount(prevRowsCount => prevRowsCount - 1);
            setSelectAllChecked(false);
        }
    };

    const handleSelectAllChecked = (e) => {
        const checkboxValue = e.target.checked;
        setSelectAllChecked(checkboxValue);

        if (checkboxValue) {
            const allIds = props.data?.map(item => item.id) || [];
            setCheckedValues(allIds);
            props.setRowsCount(allIds.length);
        } else {
            setCheckedValues([]);
            props.setRowsCount(0);
        }
    };

    const getCrumb = (item) => {
        const crumbArray = [...new Set(item.map(item => item.id))];
        return crumbArray.join('%');
    };

    const TableHeaders = () => {
        return (
            <thead>
                <tr>
                    <th id="checkbox">
                        <input
                            className="hi"
                            type="checkbox"
                            name="group"
                            checked={selectAllChecked}
                            onChange={handleSelectAllChecked}
                        />
                        <span className="checkMark" />
                    </th>
                    {tableHeaders.map(header => {
                        const key = keys[header];
                        return (
                            <th key={key} onClick={() => handlefun(key)}>
                                {sortConfig?.key === key && sortConfig?.direction === 'ascending' ? (
                                    <div>
                                        {header}{' '}
                                        <i
                                            style={{
                                                color: '#006580',
                                                fontSize: '8px',
                                                marginLeft: '4px',
                                            }}
                                            className="icon-ico-sort-down"
                                        />
                                    </div>
                                ) : sortConfig?.key === key && sortConfig?.direction === 'descending' ? (
                                    <div>
                                        {header}
                                        <i
                                            style={{
                                                color: '#006580',
                                                fontSize: '8px',
                                                marginLeft: '4px',
                                            }}
                                            className="icon-ico-sort-down-1"
                                        />
                                    </div>
                                ) : (
                                    header
                                )}
                            </th>
                        );
                    })}
                </tr>
            </thead>
        );
    };

    const Tbody = () => {
        return (
            <tbody>
                {data.map(item => (
                    <tr key={item.id}>
                        <td id="checkbox">
                            <input
                                type="checkbox"
                                name={item.id}
                                checked={checkedValues.includes(item.id)}
                                onChange={handleChecked}
                            />
                        </td>
                        <td>
                            <div className="rule-name-td">
                                {item.folder ? (
                                    <div onClick={() => updateData(item.children)}>
                                        <i className="icon-ico-folder icon-folder" />
                                        {item.name}
                                    </div>
                                ) : (
                                    <a href="#" target="_blank">
                                        {item.name}
                                    </a>
                                )}
                            </div>
                        </td>
                        <td>{item.folder ? 'Folder' : 'Rule'}</td>
                        <td>{item.folder ? item.children.length : '-'}</td>
                        <td>{item.folder ? '-' : item.active ? <b>Active</b> : 'Inactive'}</td>
                        <td>
                            {item.activationDateTime
                                ? new Date(item.activationDateTime).toString().substring(0, 25)
                                : '-'}
                        </td>
                    </tr>
                ))}
            </tbody>
        );
    };

    return (
        <div className="tableFixHead">
            <table>
                <TableHeaders />
                <Tbody />
            </table>
        </div>
    );
};

export default TableComponent;
