import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItems] = React.useState([]);

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(()=>{
      try {

    
        let parsedItems;
  
        const localStorageItems = localStorage.getItem(itemName);
  
        if (!localStorageItems) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItems = initialValue;

        } else {
          parsedItems = JSON.parse(localStorageItems);
          setItems(parsedItems);

        }
  
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    },1000)
    
  },[]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItems(newItem);
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };
