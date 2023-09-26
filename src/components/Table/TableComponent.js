// import * as React from 'react';
// import {useEffect, useState} from 'react';
// // import UseSortableData from '/js/hooks/useSortableData';
// // import './table.scss';
// import {Link, useLocation, useNavigate} from "react-router-dom";

// const useQuery = () => {
//     return new URLSearchParams(useLocation().search);
// }
// let crumb = "";

// const TableComponent = (props) => {
//     const [children, requestSort, sortConfig] = UseSortableData(props.data);
//     const [hoveredRow, setHoveredRow] = useState(null);
//     const [checkedValues, setCheckedValues] = useState([]);
//     const [selectAllChecked, setSelectAllChecked] = useState(false);
//     const tableHeaders = ["Name", "Type", "#Rule", "Status", "Last Activated On"];
//     const [isSortIcon, setIsSortIcon] = useState(false);
//     const [data, setData] = useState([]);
//     const keys = Object.keys(Object.assign({}, ...children));
//     const location = useLocation();

// const navigate = useNavigate();

// useEffect(() => {
//     if (children.length > 0)
//         setData(children)
//     console.log("printchildren", data);
// },)

//         useEffect(() => {
//             const queryName = new URLSearchParams(location.search).get("name");
//             const crumbs = queryName ? queryName.split("%").filter(crumb => crumb !== '') : [];
//             const pathname = crumbs.length > 0 ? crumbs[crumbs.length - 1] : "";
//             const duplicateChildren  = [...children];
//             // tf2
//             //
//             setData(duplicateChildren.filter(item => {if(item.id == pathname)
//                 return item.children}));
//             console.log("data", data)
//             console.log("queryName", queryName)
//             console.log("crumbs", crumbs)
//             console.log("pathname", pathname)
//         }, [location])

// const getCrumb = (item) => {
//     if (crumb.split('%').pop() !== item.id) // Use .pop() to get the last item
//         crumb += '%' + item.id;
//     return crumb;
// }
// const tableData = (item) => {
//     if (item.folder) {
//         const itemChildren = item.children;
//         setData(itemChildren);
//         console.log("children", children)
//         console.log("item: ", item)
//         navigate(`/rules?name=${getCrumb(item)}`);
//     }
// }


// useEffect(() => {
//     if (sortConfig !== null)
//         setIsSortIcon(true);
// }, [sortConfig])

// const handlefun = (column) => {
//     requestSort(column)
// };
// const handleChecked = (e) => {
//     const checkboxValue = e.target.checked;
//     if (checkboxValue) {
//         setCheckedValues((prevCheckedValues) => [...prevCheckedValues, e.target.name]);
//         props.setRowsCount(props.rowsCount + 1);

//     } else {
//         setCheckedValues((prevCheckedValues) =>
//             prevCheckedValues.filter((value) => value !== e.target.name)
//         );
//         props.setRowsCount(props.rowsCount - 1);
//         setSelectAllChecked(false);
//     }
// }

// const handleSelectAllChecked = (e) => {
//     const checkboxValue = e.target.checked;
//     setSelectAllChecked(checkboxValue);

//     if (checkboxValue) {
//         const allIds = props.data?.map((item) => item.id) || [];
//         setCheckedValues(allIds);
//         props.setRowsCount(props.data.length);
//     } else {
//         setCheckedValues([]);
//         props.setRowsCount(0);
//     }
// };

// const TableHeaders = () => {
//     return (
//         <thead>
//         <tr>
//             <th id="checkbox">
//                 <input className="hi" type="checkbox" name="group" checked={selectAllChecked}
//                        onChange={handleSelectAllChecked}/>
//                 <span className="checkMark"/>
//             </th>
//             {tableHeaders.map((header) => {
//                 const key = header === "Name" ? keys[1] : header === "Last Activated On" ? keys[2] : header === "Status" ? keys[4] : header === "Type" ? keys[5] : header === "#Rule" ? keys[3] : "";
//                 return (

//                     <th
//                         key={key}
//                         onClick={() => handlefun(key)}
//                     >{sortConfig?.key === key && sortConfig?.direction === "ascending" ?
//                         <div>{header} <i style={{color: "#006580", fontSize: "8px", marginLeft: "4px"}}
//                                          className="icon-ico-sort-down"/>
//                         </div> : sortConfig?.key === key && sortConfig?.direction === "descending" ?
//                             <div>{header}<i style={{color: "#006580", fontSize: "8px", marginLeft: "4px"}}
//                                             className="icon-ico-sort-down-1"/></div> : header}

//                         { console.log("printchildrenkkkkkkkkk", data)}
//                     </th>)
//             })}
//         </tr>
//         </thead>
//     );
// };
// const Tbody = () => {
//     const [activeDropdown, setActiveDropdown] = useState(null);
//     const handleDropdownOpen = (id) => {
//         setActiveDropdown(id);
//     };

//     const handleDropdownClose = () => {
//         setActiveDropdown(null);
//     };

//     return (
//         <tbody>
//         {data?.map((item) => (
//             <tr
//                 key={item.id}
//                 // onMouseEnter={() => setHoveredRow(item.id)} onMouseLeave={() => setHoveredRow(null)}
//             >
//                 <td id="checkbox">
//                     <input type="checkbox" name={item.id} checked={checkedValues.includes(item.id)}
//                            onChange={handleChecked}/>
//                 </td>
//                 <td>
//                     <div className="rule-name-td">
//                         {
//                             item.folder ?
//                                 (<div onClick={() => tableData(item)}><i
//                                     className="icon-ico-folder icon-folder"/>{item.name}</div>)
//                                 :
//                                 <a href="#" target="_blank">
//                                     {item.name}
//                                 </a>
//                         }
//                         {/*{hoveredRow === item.id &&*/}
//                         <i className="icon-ico-elips icon-ellipsis" onClick={() =>
//                             activeDropdown === item.id
//                                 ? handleDropdownClose()
//                                 : handleDropdownOpen(item.id)
//                         }
//                         />
//                         {/*}*/}
//                     </div>
//                 </td>
//                 <td>{item.folder ? "Folder" : "Rule"}</td>
//                 <td>{item.folder ? item.children.length : "-"}</td>
//                 <td>{item.folder ? "-" : item.active ? <b>Active</b> : "Inactive"}</td>
//                 <td>{item.activationDateTime ? new Date(item.activationDateTime).toString().substring(0, 25) : "-"}</td>
//             </tr>
//         ))}
//         </tbody>
//     );
// };

// return (
//     <div className="tableFixHead">
//         <table>
//             <TableHeaders/>
//             <Tbody/>
//         </table>
//     </div>
// );
// }
// ;

// export default TableComponent;
