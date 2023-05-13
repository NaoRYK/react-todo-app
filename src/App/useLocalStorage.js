import React from "react";

function useLocalStorage(itemName, initialValue){



    let parsedItems;
  
    const localStorageItems = localStorage.getItem(itemName)
  
    if (!localStorageItems) {
      localStorage.setItem(itemName, JSON.stringify(initialValue))
      parsedItems=initialValue;
      
    }
    else{
  
      parsedItems = JSON.parse(localStorageItems);
  
  
    }
    const [item,setItems] = React.useState(parsedItems);
  
    const saveItem = (newItem) =>{
  
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItems(newItem);
  
    }
  
    return[item,saveItem];

}

export {useLocalStorage};