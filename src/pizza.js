import React, {useState, useEffect} from 'react';
import * as Yup from 'yup';

function PizzaForm() {
const [order, setOrder] = useState({name: "",size: "", pepperoni: false, sausage: false, mushrooms: false, peppers: false, special: ""});
const [error, setError] = useState({
    name: ""
});



const formSchema = Yup.object().shape({
    name: Yup
    .string()
    .required("Name is required")
    .min(2, "name must be at least 2 characters")
});



const validate = (name, value) => {
  Yup.reach(formSchema, name)
    .validate(value)
    .then(() => setError({...error, [name]: ""}))
    .catch(err => setError({...error, [name]: err.error[0]}));
}

const handleChange = (name, value) => {
    validate(name, value);
    setOrder({...order, [name]: value});
}

const handleSubmit = (e) => {
    e.preventDefault();
    submit();
}
   
    return(
        <form id = 'pizza-form' onSubmit={handleSubmit}>
          <div className = 'form-inputs'>
            <label>Name
              <input
                type="text"
                name="name-input"
                placeholder="your name here"
                onChange={handleChange}
                maxLength="30"
                />
            </label>
            <label>Size
                <select value={order.size} id="size-dropdown">
                <option value="">--select a size--</option>
                <option value="MED">Medium</option>
                <option value="LAR">Large</option>
                <option value="XLAR">X-Large</option>
                </select>
            </label> 
            <label>Select Your Toppings
                <input
                    name="pepperoni"
                    type="checkbox"
                    checked="order.pepperoni"
                    onChange={handleChange}
                    />
                <input
                    name="sausage"
                    type="checkbox"
                    checked="order.sausage"
                    onChange={handleChange}
                    />
                <input
                    name="mushrooms"
                    type="checkbox"
                    checked="order.mushrooms"
                    onChange={handleChange}
                    />
                <input
                    name="peppers"
                    type="checkbox"
                    checked="order.peppers"
                    onChange={handleChange}
                    />    
            </label>  
            <label>Special Instructions
                <input
                    type="text"
                    id="special-text"
                    name="special"
                    checked="order.special"
                    onChange={handleChange}
                    />
            </label> 
            <label>
                <button id="order-buttons" onClick={handleSubmit}>Add To Order</button>
            </label>
            </div>  
        </form>
    )
}

export default PizzaForm;