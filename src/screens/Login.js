import React, { useState } from 'react'
import React from 'react'

export default function Login() {

  const [credentials, setcredentials] = useState({name:"",email:"",password:"",geolocation:""})

  const handleSubmit = async(e)=>{
     e.preventDefault();
     console.log(JSON.stringify({email:credentials.email,password:credentials.password}))
    
     const response = await fetch("http://localhost:5000/api/createuser",{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})
     });
     const json = await response.json()
     console.log(json);

     if(!json.success){
      alert("Enter Valid Credentials")

     }
  }
 
  const onChange=(event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value})
  }

  return (
    <div>
      
    </div>
  )
}
