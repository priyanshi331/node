import React from 'react'
import { Button, Form, Input } from 'antd';
import pp from "../assets/chemistry.jpg"
import axios from "axios"
import { useState }  from 'react'

const Login = () => {
const[husband,setWife]=useState()
  const onFinish = values => {
      console.log("Success:",values);

    try{
        axios.post("http://127.0.0.1:8000/api/adminlogin/",values)
        .then((backendKaResponse) => {
            console.log("status:",backendKaResponse);
            console.log("Backend response:",backendKaResponse.data);
            localStorage.setItem("jwtToken",backendKaResponse?.data?.token)
            setWife(backendKaResponse?.data?.message)

    })
        .catch((error)=>{
            console.log("Error response from backend:",error?.response?.data?.message);
            setWife(error?.response?.data?.message)
        })
  }
        // console.log('Success:', values);
    catch(error){
      console.log(error)
    }
  };
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
  return (

      
 <div className="flex justify-center items-center min-h-screen bg-gray-100">
  <p>{husband}</p>
  { <img src={pp} height="100px" width="100px"></img> }
    <Form
    name="basic"
    onFinish={onFinish}
    onFinishFailed={onFinishFailed} 
   className="flex flex-col justify-center items-center gap-4 h-[300px] w-[300px] bg-white !p-6 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.15)]"

  >
<h1 className='text-2xl font-bold text-gray-800 text-center'>Login</h1>
    <Form.Item
      label="username"
      name="username"
     >
      <Input />
    </Form.Item>

    <Form.Item
      label="password"
      name="password"
    
    >
      <Input.Password />
    </Form.Item>

 

    <Form.Item label={null}>
      <Button type ="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  </div>

  )
}

export default Login;