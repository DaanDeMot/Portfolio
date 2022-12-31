import React, { useState } from "react";
import styles from '../ToDo.module.css'


export interface TodoItem { 
    name: string;
    completed: boolean;
}

interface ToDoInputProps {
    todos: TodoItem[];
    setTodos: (todos: TodoItem[]) => void
  }

export const ToDoInput = ({todos, setTodos} : ToDoInputProps) => {
    const [text, setText] = useState<string>("");

    const SaveTextInputAsState: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setText(event.target.value);
    }

    const AddInputToList: React.MouseEventHandler<HTMLButtonElement> = (event) => { 
      if(text != ""){
        setTodos([...todos, { name: text, completed: false }]); 

      }else{
        alert("Please enter something")
      }
      setText('');
      }

  return (
      <div className={styles.input_container}>
        <input
           className={styles.input_field}
          id="todo"
          type="text"
          placeholder="Item to do"
          value={text}
          onChange={SaveTextInputAsState}
        />
        <div className={styles.button_container}>
        <button  className={styles.button_80} onClick={AddInputToList}>Add</button>
        </div>
      </div>
  );
};
