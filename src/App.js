import React, {useState} from "react";
import PizzaForm from "./pizza";
import axios from 'axios';
import * as Yup from 'yup';


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
  const [newOrder, setNewOrder] = useState([]);
  
  

  
  const handleSubmit = () => {
    const newOrder = {
        name: order.name.trial(),
        size: order.size.trial(),
        pepperoni: order.pepperoni,
        sausage: order.sausage,
        mushrooms: order.mushrooms,
        peppers: order.peppers,
        special: order.special.trial()
    }
  
    


    axios.post("https://reqres.in/api/orders", newOrder)
        .then(res => {
           setNewOrder([res.data, ...newOrder]);
            setOrder(initialFormValues)
     })
         .catch(err => console.error(err))
  };

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
  

  const updateForm = (inputName, inputValue) => {
    validate(inputName, inputValue)
    setOrder({...order, [inputName]: inputValue})
  }

  return (
    <>
      <h1>Bloomtech Eats</h1>
      <p>Use the button to start your order!</p>
    
      
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