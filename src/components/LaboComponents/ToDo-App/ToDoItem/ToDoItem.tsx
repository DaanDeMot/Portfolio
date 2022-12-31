import React from "react";
import styles from '../ToDo.module.css'

export interface TodoItem {
  name: string;
  completed: boolean;
}

interface ToDoItemProps{
  item:{
    completed:boolean,
    name:string
  },
  index:number,
  callBackFunction:(index: number, completed: boolean) => void,
}

export const ToDoItem = ({item, index, callBackFunction} : ToDoItemProps) => {
  return (
    <div className={styles.item_container}>
      <div key={index}>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={(event) => callBackFunction(index, event.target.checked)}
        />
        <span
          style={{ textDecoration: item.completed ? "line-through" : "none" }}
        >
          {item.name}
        </span>
      </div>
    </div>
  );
};
