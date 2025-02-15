import React, { useState } from 'react';
import * as yup from 'yup';
import axios from 'axios';

const schema = yup.object().shape({
    user: yup.string().required().min(2, 'name must be at least 2 characters'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    mushrooms: yup.boolean(),
    peppers: yup.boolean(),
    special: yup.string(),
    size: yup.string(),
})

function PizzaForm(props) {
    const [selectSize, setSelectSize] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState({ user: '' });
    const [disabled, setDisabled] = useState(true)
    const [form, setForm] = useState({ user: "", size: "", pepperoni: false, sausage: false, mushrooms: false, peppers: false, special: "" })
    const [post, setPost] = useState([]);

    const setFormError = (name, value) => {
        yup.reach(schema, name).validate(value)
            .then(() => setError({ ...error, [name]: '' }))
            .catch(err => setError({ ...error, [name]: err.errors[0] }))
    }

    const change = evt => {
        const { checked, value, name, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        setFormError(name, valueToUse)
        setForm({ ...form, [name]: valueToUse })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const newOrder = {user: form.user.trim(), size: form.size, pepperoni: form.pepperoni, sausage: form.sausage, mushrooms: form.mushrooms, peppers: form.peppers, special: form.special.trim()}
        axios.post("https://reqres.in/api/orders", newOrder)
            .then(res => {
               setForm({user: "", size: "", pepperoni: false, sausage: false, mushrooms: false, peppers: false, special: "" })
            })
            .catch(err => {
                debugger
            })
    }

    return (
        <>
            <form id='pizza-form' onSubmit={onSubmit}>
                <div className='form-inputs'>
                    <div style={{ color: 'red' }}>
                        <div>{error.user}</div>
                    </div>
                    <label>Name
                        <input
                            id="name-input"
                            type="text"
                            name="user"
                            placeholder="your name here"
                            maxLength="30"
                            onChange={change}
                        />
                    </label>
                    <div>
                        <label>Size
                            <select  id="size-dropdown" name="size" onChange={change}>
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
                                onChange={change}
                            />
                        </div>
                        <div>
                            Sausage
                            <input
                                name="sausage"
                                type="checkbox"
                                onChange={change}
                            />
                        </div>
                        <div>
                            Mushrooms
                            <input
                                name="mushrooms"
                                type="checkbox"
                                onChange={change}
                            />
                        </div>
                        <div>
                            Peppers
                            <input
                                name="peppers"
                                type="checkbox"
                                onChange={change}
                            />
                        </div>
                    </label>
                    <label>Special Instructions
                        <input
                            type="text"
                            id="special-text"
                            name="special"
                            onChange={change}
                        />
                    </label>
                    <label>
                        <button type="submit" id="order-button" onClick={onSubmit}>Add To Order</button>
                    </label>
                </div>
            </form>
        </>
    )
};

export default PizzaForm;