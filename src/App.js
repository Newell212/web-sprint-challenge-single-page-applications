import React, { useState } from "react";
import PizzaForm from "./pizza";
import axios from 'axios';
import "./App.css";
import { Routes, Route, Link } from 'react-router-dom'

// create a 'pizza.js' that includes the form
// create some kind of router '/' -> '/pizza'
// form submit 



const initialFormValues = {
  name: "",
  size: "",
  pepperoni: false,
  sausage: false,
  mushrooms: false,
  peppers: false,
  special: ""
}

const initialFormErrors = {
  name: ""
}


export default function App() {

  const [order, setOrder] = useState(initialFormValues);
  const [error, setError] = useState(initialFormErrors);


  const handleSubmit = () => {
    const newestOrder = {
      name: order.name,
      size: order.size,
      pepperoni: order.pepperoni,
      sausage: order.sausage,
      mushrooms: order.mushrooms,
      peppers: order.peppers,
      special: order.special
    }

    if (order.name.length < 2) {
      setError("name must be at least 2 characters")
      alert(`${error}`)
    } else {
      axios.post("https://reqres.in/api/orders", newestOrder)
        .then(res => {
        })
        .catch(err => console.error(err))
    }


  };

  const updateForm = (inputName, inputValue) => {

    setOrder({ ...order, [inputName]: inputValue })
  }

  function Home(_props) {
    return (
      <p>Use the button to start your order!</p>
    )
  }

  function Pizza(_props) {
    return (
      <div>
        <PizzaForm
          values={order}
          update={updateForm}
          submit={handleSubmit}
        />

      </div>
    )
  }

  return (
    <>
      <h1>Bloomtech Eats</h1>

      <nav>
        <Link to='pizza' href="/pizza" id="order-pizza"  >Click here to order!</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pizza" element={<Pizza />} />
      </Routes>
    </>
  );
};
