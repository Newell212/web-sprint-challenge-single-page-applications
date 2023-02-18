import React, {useState} from 'react';

export default function PizzaForm() {
const [order, setOrder] = useState({name: "",size: "", pepperoni: false, sausage: false, mushrooms: false, peppers: false, special: ""});

const handeChange = event => {
    const {name, type, value, checked} = event.target;
    const updatedInfo = type === "checkbox" ? checked: value;
    setOrder({...order, [name]: updatedInfo});
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
            </div>  
        </form>
    )
}