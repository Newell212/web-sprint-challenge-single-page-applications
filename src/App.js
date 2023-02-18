import React from "react";


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