import React, { Children } from 'react'

     const ProtectedRoute = ({children})=>{
       const jwtToken=localStorage.getItem("jwtToken")
       if(!jwtToken){
        return <Navigate to="/"/>
       }
       return  children;

}
export default ProtectedRoute
