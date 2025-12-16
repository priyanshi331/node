import React,{useEffect,useState} from 'react'
import axios from 'axios';
const Text = () => {
    const[mes,setmes]=useState("")
    useEffect (async ()=>{
try{
    const response=await axios.get("http://127.0.0.1:8000/api/data/")
    console.log(response.data.message)
    setmes(response.data.message)
}
catch(error){
    console.log(error)
}
},[])



  return (<>
    <div>
      <h1>this is text</h1>
      <div>{mes}</div>
    </div>
    </>
  )
}

export default Text
