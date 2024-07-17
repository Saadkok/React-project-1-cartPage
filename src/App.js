import React,{useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Footer from "./components/Footer";

function App() {
  const initialProducts = [
    {
      price: 49,
      name: "Water Bottle plastic",
      quantity: 0,
    },
    {
      price: 399,
      name: "Water Bottle steel",
      quantity: 0,
    },
    {
      price: 999,
      name: "Water Bottle glass",
      quantity: 0,
    }
  ];

  // Destructure the state and setter correctly
  const [Products, setProducts] = useState(initialProducts);
  const [TotalAmount, setTotalAmount] = useState(0);
  
  const add= (i)=>{
    let temp =[...Products];
    let NewTotalAmount=TotalAmount;
    temp[i].quantity++;
    NewTotalAmount +=temp[i].price
    setTotalAmount(NewTotalAmount);
    setProducts(temp);
  }

  const minus= (i)=>{
    let temp =[...Products]
    let NewTotalAmount=TotalAmount;
    if (temp[i].quantity > 0)
    {
      temp[i].quantity--
      NewTotalAmount -=temp[i].price;
    }
    setTotalAmount(NewTotalAmount);
    setProducts(temp);
  }
  const Reset =()=>{
    let temp =[...Products]
    temp.map((product) =>{
      product.quantity =0
    })
    setProducts(temp);
    setTotalAmount(0);
  }

  const remove =(index)=>{
    let temp =[...Products]
    console.log(Products)
    let NewTotalAmount=TotalAmount;
    NewTotalAmount -= temp[index].quantity *temp[index].price;
    temp.splice(index,1);
    console.log(temp)
    setProducts(temp);
    setTotalAmount(NewTotalAmount);

  }

  return (
    <>
     <Navbar/>
     <main className="container">
     <Product Products={Products} add={add} minus={minus} remove={remove}/>
     </main>
   
     <Footer TotalAmount={TotalAmount} Reset={Reset} />
    </>
  );
}

export default App;
