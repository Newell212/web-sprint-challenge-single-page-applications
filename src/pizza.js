import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import axios from '../package.json';
import "./pizza.css";

function PizzaForm(props) {
    const { values, update, submit, } = props;
    const [selectSize, setSelectSize] = useState("");
    const [name, setName] = useState("");
    const [pepperoni, setPepperoni] = useState(false);
    const [sausage, setSausage] = useState(false);
    const [mushrooms, setMushrooms] = useState(false);
    const [peppers, setPeppers] = useState(false);
    const [special, setSpecial] = useState("");
    const [newOrder, setNewOrder] = useState([]);




    const onChangeSize = evt => {
        values.size = evt.target.value;
        setSelectSize(values.size);
    }

    const onChangeName = evt => {
        values.name = evt.target.value
        setName(values.name);
    }

    const onChangePep = evt => {
        values.pepperoni = evt.target.value
        setPepperoni(true)
    }

    const onChangeSaus = evt => {
        values.sausage = evt.target.value
        setSausage(true)
    }

    const onChangeMush = evt => {
        values.mushrooms = evt.target.value
        setMushrooms(true)
    }

    const onChangePeppers = evt => {
        values.peppers = evt.target.value
        setPeppers(true)
    }

    const onChangeSpecial = evt => {
        values.special = evt.target.value
        setSpecial(values.special)
    }



    const onSubmit = (e) => {
        e.preventDefault();
        submit();
    }



    return (
        <>
            <form id='pizza-form' onSubmit={onSubmit} >
                <div className='form-inputs'>
                    <label>Name
                        <input
                            id="name-input"
                            type="text"
                            name="name-input"
                            placeholder="your name here"
                            maxLength="30"
                            onChange={onChangeName}
                        />
                    </label>
                    <div>
                        <label>Size
                            <select value={selectSize} id="size-dropdown" onChange={onChangeSize}>
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
                                onChange={onChangePep}
                            />
                        </div>
                        <div>
                            Sausage
                            <input
                                name="sausage"
                                type="checkbox"
                                onChange={onChangeSaus}
                            />
                        </div>
                        <div>
                            Mushrooms
                            <input
                                name="mushrooms"
                                type="checkbox"
                                onChange={onChangeMush}
                            />
                        </div>
                        <div>
                            Peppers
                            <input
                                name="peppers"
                                type="checkbox"
                                onChange={onChangePeppers}
                            />
                        </div>
                    </label>
                    <label>Special Instructions
                        <input
                            type="text"
                            id="special-text"
                            name="special"
                            onChange={onChangeSpecial}
                        />
                    </label>
                    <label>
                        <button type="submit" id="order-buttons" onClick={submit}>Add To Order</button>
                    </label>
                </div>
            </form>
        </>
    )
};









export default PizzaForm;