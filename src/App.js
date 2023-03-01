import React, { useState } from "react";
import PizzaForm from "./pizza";
import "./App.css";
import { Routes, Route, Link } from 'react-router-dom'

// create a 'pizza.js' that includes the form
// create some kind of router '/' -> '/pizza'
// form submit 

export default function App() {
  function Home(_props) {
    return (
      <p>Use the button to start your order!</p>
    )
  }

  function Pizza(_props) {
    return (
      <div>
        <PizzaForm />
      </div>
    )
  }

  return (
    <>
      <h1>Bloomtech Eats</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pizza" element={<Pizza />} />
      </Routes>

      <nav>
        <Link to='pizza' href="/pizza" id="order-pizza"  >Click here to order!</Link>
      </nav>
    </>
  );
};
