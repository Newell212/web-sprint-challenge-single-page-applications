import React, {useState} from "react";
import PizzaForm from "./pizza";
import axios from 'axios';
import "./App.css";     

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

const initialFormErrors ={
  name: ""
}


const App = () => {
  
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
  
    if(order.name.length < 2) {
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
    
    setOrder({...order, [inputName]: inputValue})
  }

  console.log(order);

  return (
    <>
      <header>
        <h1>Bloomtech Eats</h1>
        <p>Use the button to start your order!</p>
      </header>
      
      
      <div>
        <PizzaForm
          values={order}
          update={updateForm}
          submit={handleSubmit}
        />

      </div> 
    </>
  );
};
export default App;