import React from 'react'
import { useCart, useDispatchCart } from '../components/ContextReducer'
import {loadStripe} from '@stripe/stripe-js';
import trash from "../trash.svg"
import { useStripe } from '@stripe/react-stripe-js';
export default function Cart() {

  const data = useCart();
    let dispatch = useDispatchCart();
  if (data.length === 0) {
     return (
        <div>
            <div className='m-5 w-100 text-center fs-3 text-light'>Your Cart is Empty</div>
        </div>
     )
  }
    
  // main function

  const handleCheckOut  = async ()=> {
    let userEmail = localStorage.getItem("userEmail");
    let response = await fetch("http://localhost:5000/api/orderData" , {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        order_data:data,
        email:userEmail,
        order_date:new Date().toDateString()
      })
    });
    
    console.log("Order Response:" ,response)
    if (response.status===200) {
        dispatch({type:"DROP"})
    }

  }
  // stripe payment
  const makePayment = async()=> {
    const stripe = await loadStripe("pk_test_51PmJHa049GpZfud4DVh2m5qUB2JcFmhPO24rD657ORP1FjLwMmyg6mCFW8ItJf6hDwcJ1MVwJ3XeUH1ZxGEwG1uo00Gd5stdvy");

    const body = {
        products:data
    }


    const headers = {
      "Content-Type": "application/json"
    }

    const response = await fetch ("http://localhost:5000/api/checkout",{
      method:"POST",
      headers:headers,
      body:JSON.stringify(body)
    });

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId:session.id
    });

    if (result.error){
      console.log(result.error);
    }

  }

  let totalPrice = data.reduce((total,food) => total + food.price, 0)
  return (
    <div>

    {/* {console.log(data)} */}
    <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md bg-white'>
      <table className='table table-hover '>
        <thead className=' text-info fs-4'>
          <tr>
            <th scope='col' >#</th>
            <th scope='col' >Name</th>
            <th scope='col' >Quantity</th>
            <th scope='col' >Option</th>
            <th scope='col' >Amount</th>
            <th scope='col' ></th>
          </tr>
        </thead>
        <tbody>
          {data.map((food, index) => (
            <tr>
              <th scope='row' >{index + 1}</th> 
              {/* {console.log(food)} */}
              <td >{food.name}</td> 
              <td>{food.qty}</td>
              <td>{food.size}</td>
              <td>{food.price}</td>
              <td ><button type="button" className="btn p-0"><img src= {trash} alt='delete' onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button> </td></tr>
          ))}
        </tbody>
      </table>
      <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>
      <div>
        <button className='btn bg-info mt-5 ' onClick={()=>{handleCheckOut(); makePayment();}} > Check Out </button>
      </div>
    </div>
  </div>
  )
}

