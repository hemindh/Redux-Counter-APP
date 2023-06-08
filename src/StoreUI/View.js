import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { addItem , deleteItem } from '../Actions/ActionCreator'

const View = () => {
  const state = useSelector((state) => state);
  console.log("store", state);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Redux Store App</h1>

      <h3>Store Cart Items : {state.numOfItem}</h3>

      <button className="green" onClick={() => {dispatch(addItem())}} >Add The Item Into Cart</button>
      <button className="red" 
      disabled={state.numOfItem > 0 ? false : true}
      onClick={() => {
        dispatch(deleteItem())
      }}
      

      >Remove The Item Into Cart</button>
    </>
  );
};

export default View;
