import React from "react";
import { ToDoItem } from "../ToDoItem/ToDoItem";


export interface TodoItem {
  name: string;
  completed: boolean;
}


interface IToDoListProps{
    callBackFunction:(index: number, completed: boolean)=>void,
    list : TodoItem[]
}



const ToDoList = ({list, callBackFunction} : IToDoListProps) => {
  return (
    <div>
       {list.map((todo, index) => (
                    <ToDoItem item={todo} index={index} callBackFunction={callBackFunction}></ToDoItem>    
                ))}
    </div>
  );
};


export default ToDoList;