import React from "react";
const UseSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);
    
    const sortedItems = React.useMemo(() => {
      let sortableItems = [...items];
      if (sortConfig !== null) {
        sortableItems.sort((a, b) => {
          a = a[sortConfig.key].toString();
          b = b[sortConfig.key].toString();
          if (sortConfig.direction === 'ascending') {
            return a.localeCompare(b, 'en', {ignorePunctuation: true, numeric: true});
          } else {
            return a.localeCompare(b, 'en', {ignorePunctuation: true, numeric: true})*-1;
          }
        });
      }
      return sortableItems;
    }, [items, sortConfig]);
  
    const requestSort = key => {
      let direction = 'ascending';
      if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
        direction = 'descending';
      }
      setSortConfig({ key, direction });
    }
  
    return  [ sortedItems, requestSort, sortConfig ];
  }

  export default UseSortableData;