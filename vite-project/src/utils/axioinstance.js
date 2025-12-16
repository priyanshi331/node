import axios from "axios";


const instance=axios.create({
baseURL:"http://localhost:5173/",
timeout:4000

}
)
instance.interceptors.request.use(
async(config)=>{
    const jwtToken=localStorage.getItem("jwtToken")
    console.log("localstorage me token nahi ha",jwtToken)
    config.headers.Authorization=`Bearer ${jwtToken}`
    return config;


}
)
instance.interceptors.response.use(
    async(response)=>{
        console.log("localstorage me token nahi ha",response)
        if(response?.status===401){
            return <Navigate to='/login'/>
        }
        return response;
    }


)

export default instance