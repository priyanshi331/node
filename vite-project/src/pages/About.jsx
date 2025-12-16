import Footer from "../Components/Footer"
import { useEffect, useState } from "react";


function About() {
    const [error, setError] = useState("");
     const [data,setMadam] = useState([]);

  
     useEffect(() => {
          fetch("http://127.0.0.1:8000/api/product/")
    
      .then((response) => {
        if (!response.ok) {
          throw new Error("API not responding");
        }
        return response.json();
      })
      .then((data) => {
        setMadam(data);
      })
      .catch((err) => {
        setError(err.message);
      })
     
  }, []);
    return (
    <>
      <h2>Data From API</h2>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {data.map((item,index)=>(
       <div key={index}>
      <p>Name: {item.name}</p>
      <p>Price: {item.price}</p>
      <p>Category: {item.category}</p>
      <p>Description: {item.description}</p>
      <img src={item.image} alt={item.name} width={200} height={100} />

          
       </div>
      
      ))}




      <Footer />
    </>
  );
};


  




export default About;






