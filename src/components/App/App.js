import React from 'react';
import Filter from '../Filter';
import List from '../List'
import AddItem from '../AddItem'

const data = [
    {
        id: 1,
        title: 'Write the essay',
        isDone: true
    },
    {
        id: 2,
        title: "Read React's book",
        isDone: false
    },
    {
        id: 3,
        title: "Do Math's homework",
        isDone: false
    }
];

const addNewItem = (title) => {
    const obj = {
        id: data[data.length - 1].id + 1,
        isDone: false,
        title
    }

    data.push(obj);
}

const App = () =>{
    return (
        <div className = "container">
        <h1>My ToDoList</h1>
        <Filter />
        <div className = "row marginTopBottom">
            <List todoData = {data}/>
        </div>
        <AddItem addFunc = {addNewItem}/>
    </div>
    );
};

export default App;