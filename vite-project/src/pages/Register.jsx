import React from 'react'
import { Button, Form, Input } from 'antd';
// import './Register.css'
import axios from "axios"
import { useState }  from 'react'


const Register = () => {
  const[husband,setWife]=useState()
  
     const onFinish = (values) => {
       console.log('Success:', values);
  try{
    axios.post("",values)
      .then((backendKaResponse) => {
          console.log("Backend response:",backendKaResponse?.data?.message);
          setWife(backendKaResponse?.data?.message)
  })
       .catch((error)=>{
            console.log("Error response from backend:",error?.response?.data?.message);
            setWife(error?.response?.data?.message)
        })
  }
       
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

            <Form
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed} 
            className="flex flex-col justify-center items-center gap-4  w-[300px] !p-6 rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.15)] bg-white"
            >
    <h1 className='text-2xl font-bold text-gray-800 text-center'>Register</h1>
    <Form.Item
      label="Name"
      name="name"
      placeholder="Enter your name"
     >
      <Input />
    </Form.Item>
    <Form.Item
      label="Subject"
      name="subject"
      placeholder="Enter your subject"
     >
      <Input  />
    </Form.Item>

    <Form.Item
      label="Email"
      name="email"
      placeholder="Enter your email"
      rules={[{type :'email'}]}
    >
      <Input/>
    </Form.Item>
        <Form.Item
      label=" Password"
      name="password"
      placeholder=" Password"
    >
      <Input.Password />
    </Form.Item>

 

    <Form.Item label={null}>
      <Button type ="primary" htmlType="submit" className='!w-full !py-2 !text-[16px] !hover:bg-[red]'>
        Submit
      </Button>
    </Form.Item>
  </Form>
  </div>

  )
}
export default Register