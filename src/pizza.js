import React, {useState} from 'react';

export default function PizzaForm() {
const [order, setOrder] = useState({name: "",size: "", topping1: 0, topping2: 0, special: ""});

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
            </div>  
        </form>
    )
}