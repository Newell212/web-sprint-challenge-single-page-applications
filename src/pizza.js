import React, {useState, useEffect} from 'react';
import * as Yup from 'yup';
import axios from '../package.json';
import "./pizza.css";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'










function PizzaForm(props) {
    const {values, update, style, submit, order} = props
    const [formStyle, setFormStyle] = useState("hide-pizza-form")

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
    const {value} = evt.target;
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
        <label>Size
            <select value={values.size} id="size-dropdown" onChange={onChange}>
            <option value="">--select a size--</option>
            <option value="MED">Medium</option>
            <option value="LAR">Large</option>
            <option value="XLAR">X-Large</option>
            </select>
        </label> 
        <label>Select Your Toppings
            Pepperoni
            <input
                name="pepperoni"
                type="checkbox"
                />
                Sausage
            <input
                name="sausage"
                type="checkbox"
                />
                Mushrooms
            <input
                name="mushrooms"
                type="checkbox"
                />
                Peppers
            <input
                name="peppers"
                type="checkbox"
                />    
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