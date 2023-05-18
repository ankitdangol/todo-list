import React, { useState, useEffect } from 'react';
import Items from './Items';

export default function Input() {
    const storedItems = loadItems();
    const [itemList, setItemList] = useState("");
    const [items, setItems] = useState(storedItems);

    function loadItems() {
        const taskJSON = localStorage.getItem('items');
        if (taskJSON == null) return [];
        return JSON.parse(taskJSON);
    }

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    const itemEvent = (event) => {
        setItemList(event.target.value);
    };

    const addItems = () => {
        setItems((oldItems) => {
            return [...oldItems, itemList];
        });
        setItemList("");
    };

    const deleteItem = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arrItem, index) => {
                return index !== id;
            });
        });
    }

    return (
        <>
            <div className='input-container'>
                <input type='text' placeholder='Add an item' className='input' value={itemList} onChange={itemEvent} />
                <button className='add-button' onClick={addItems}>+</button>
            </div>
            <div className='items'>
                <ul>
                    {items.map((itemval, index) => {
                        return <Items key={index} id={index} item={itemval} selectDelete={deleteItem} />
                    })}
                </ul>
            </div>
        </>
    )
}
