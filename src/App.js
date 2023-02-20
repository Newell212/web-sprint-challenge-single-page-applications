import React from "react";
import PizzaForm from "./pizza";

// create a 'pizza.js' that includes the form
// create some kind of router '/' -> '/pizza'
// form submit 

const App = () => {
  return (
    <>
      <h1>Bloomtech Eats</h1>
      <p>Use the button to start your order!</p>
      <button id="order-pizza" onClick={event => window.location.href='/pizza'}>Click here to order!</button>
      
    </>
  );
};
export default App;