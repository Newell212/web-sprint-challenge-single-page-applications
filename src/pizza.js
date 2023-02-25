import React, {useState, useEffect} from 'react';
import * as Yup from 'yup';
import axios from '../package.json';
import "./pizza.css";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'










function PizzaForm(props) {
    const {values, update, submit,} = props;
    const [formStyle, setFormStyle] = useState("hide-pizza-form");
    const [selectValue, setSelectValue] = useState("");

    function showOrder() {
        // window.location.href='/pizza'
        console.log("showOrder clicked: " + `${formStyle }`);
        if(formStyle === "show-pizza-form") {
            setFormStyle("hide-pizza-form")
        } else {
            setFormStyle("show-pizza-form")
        }
      }

const onChange = evt => {
    const name = evt.target.name;
    const value = evt.target.value;
    setSelectValue(value);
    update(name, value);
}
    
const onSubmit = (e) => {
    e.preventDefault();
    submit();
}

return(
    <>
    <BrowserRouter>
   
        <nav>
            <Link to="pizza" id="order-pizza" onClick={showOrder} >Click here to order!</Link>
        </nav>
        <Route>
            <Route path="pizza" element={<PizzaForm />} />
        </Route>
    </BrowserRouter>
    <form className={formStyle} id='pizza-form' onSubmit={onSubmit} >
      <div className = 'form-inputs'>
        <label>Name
          <input
            type="text"
            name="name-input"
            placeholder="your name here"
            maxLength="30"
            />
        </label>
        <div>
        <label>Size
            <select value={selectValue} id="size-dropdown" onChange={onChange}>
            <option defaultValue disabled>--select a size--</option>
            <option value="MED">Medium</option>
            <option value="LAR">Large</option>
            <option value="XLAR">X-Large</option>
            </select>
        </label> 
        </div>
        <label>Select Your Toppings
        <div>
            Pepperoni
            <input
                name="pepperoni"
                type="checkbox"
                />
                </div>
                <div>
                Sausage
            <input
                name="sausage"
                type="checkbox"
                />
                </div>
                <div>
                Mushrooms
            <input
                name="mushrooms"
                type="checkbox"
                />
                </div>
                <div>
                Peppers
            <input
                name="peppers"
                type="checkbox"
                />  
                </div>  
        </label>  
        <label>Special Instructions
            <input
                type="text"
                id="special-text"
                name="special"
                />
        </label> 
        <label>
            <button id="order-buttons" onClick={submit}>Add To Order</button>
        </label>
        </div>  
    </form>
    </>
)
};









export default PizzaForm;