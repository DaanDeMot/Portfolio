import React, { useState } from "react";
import { arrayBuffer } from "stream/consumers";
import styles from  "./ShoppingList.module.css";
  
interface ShoppingListItem {
    name: string;
    quantity: number;
    inStock?: boolean
  }
  

const ShoppingList = () => {
  const [shoppingList, setShoppingList] = useState<ShoppingListItem[]>([]);
  const [productName, setProductName] = useState<string>("");
  const [productQuantity, setProductQuantity] = useState<GLfloat>(0.00);

  const [feedback, setFeedback] = useState<string>();

  const [inStock, setInStock] = useState(false);
  const [showOnlyInStock, setShowOnlyInStock] = useState(false);

  const [searchText, setSearchText] = useState<string>("");

  const searchWithFilter = shoppingList.filter((item) => {
    const itemContainsLetter = item.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase());
    const inStock = item.inStock;
    return itemContainsLetter && (!showOnlyInStock || inStock);
  })

  const AddRecord = (event: any) => {
    setShoppingList([
      ...shoppingList,
      { name: productName, quantity: productQuantity , inStock: inStock },
    ]);
    setFeedback("Item succesvol toegevoegd");
    event.preventDefault();
  };

  const removeRecord = (i: number) => {
    let numbersCpy = shoppingList.filter((number, index) => index !== i);
    setShoppingList(numbersCpy);
    setFeedback("Item succesvol verwijderd.");
  };

  const UpdateRecord = (arrayIndex: number) => {
    var newName = window.prompt("Enter new name");
    var newQuantity = window.prompt("Enter new quantity");
    var newStock = window.prompt("In stock? Enter y for yes or n for no");
    let newArray: ShoppingListItem[] = shoppingList.map((obj, index) => {
      if (index === arrayIndex) {
        if (newName && newQuantity) {
          obj.name = obj.name.replace(obj.name, newName);
          obj.quantity = parseInt(newQuantity);
          if(newStock =="n"){
            obj.inStock=false;
          }else{obj.inStock=true}
          return obj;
        }
      }
      return obj;
    });
    setFeedback("Product aangepast");
    setShoppingList(newArray);
  };

const ToggleShowStock = () => {
    setShowOnlyInStock(!showOnlyInStock);
}
  return (
    <>
    <div className={styles.ShoppingListContainer}>
    
      <form className={styles.ShoppingList_form}>
        <label className={styles.ShoppingList_label}>Name : </label>
        <input
         className={styles.UserInput}
          type="text"
          id="productName"
          placeholder="Name"
          value={productName}
          onChange={(event) => {
            setProductName(event.target.value);
          }}
        ></input>

        <label className={styles.ShoppingList_label}>Price : </label>
        <input
        className={styles.UserInput}
          type="number"
          id="productQuantity"
          onChange={(event) => {
            var twoPlacedFloat = parseFloat(event.target.value).toFixed(2);
            setProductQuantity(parseFloat(twoPlacedFloat));
          }}
        ></input>

        <label className={styles.stockLabel}> In stock :</label>
       
        <input className={styles.stock_checkBox} type="checkbox" checked={inStock} onChange={(event) => setInStock(event.target.checked)} />

        {productName == "" || productQuantity == 0 ? (
          <p className={styles.input_feedback} >Please fill out the form completely.</p>
        ) : (
          <div className={styles.btn_container}>
          <button
            onClick={(event) => {
              AddRecord(event);
            }}
            className={styles.submit_btn}
          >
            Add
          </button>
          </div>
        )}
      </form>
      <section className={styles.shopping_list_header}>
      <input id='searchUserInput' 
            className={styles.UserInput}
            value={searchText} 
            placeholder='search...'
            onChange={(event) => { {
                setSearchText(event.target.value);
            }}}
            ></input>
            <p className={styles.filter_label}>Filter on stock by pressing 'In stock'.</p>
            </section>
      <table>   
        <tr>
          <th className={styles.table_header}> Name </th>
          <th className={styles.table_header}> Price </th>
          <th className={styles.toggle_stock}  onClick={() => {ToggleShowStock()}}> In stock </th>
          <th className={styles.table_header}> Delete </th>
          <th className={styles.table_header}> Change record </th>
        </tr>

        {searchWithFilter.map((item, index) => (
          <tr className={styles.table_row}>
            <td className={styles.record_data}>{item.name}</td>
            <td className={styles.record_data}>{item.quantity.toFixed(2)}</td>
            {item.inStock? <td className={styles.record_data}> Yes</td> : <td className={styles.record_NotInStock}> No</td>}
            <td className={styles.record_data}>
              <button 
              className={styles.record_button}
                onClick={() => {
                  removeRecord(index);
                }}
              >
                Remove
              </button>
            </td>
            <td className={styles.record_data}>
              <button
              className={styles.record_button}
                onClick={() => {
                    UpdateRecord(index);
                }}
              >
                Change
              </button>
            </td>
          </tr>
        ))}
      </table>

      </div>
    </>
  );
};

export default ShoppingList;
