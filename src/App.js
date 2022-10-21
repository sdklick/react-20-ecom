import { useEffect, useState } from "react";
import "./App.css";
const App = () => {
  const [data, setdata] = useState([]);

  const url = async () => {
    let apiurl = await fetch("https://fakestoreapi.com/products");
    let mydata=await apiurl.json()
    setdata(await mydata);
  };

  useEffect(() => {
    url();
  }, []);

  console.log(data);

  return (
    <>
    {data.map((val)=>{
      return(
        <div key={val.id} className="card" style={{width:"100%"}}>
        <img src={val.image} alt="Avatar" style={{width:"20%"}}/>
        <div className="con">
          <h4>
            <b>{val.price}</b>
          </h4>
          <p><b>{val.category}</b></p>
          <p><b>{val.title}</b></p>
          <p>{val.description}</p>
          <button className="btn">Buy</button>
        </div>
      </div>
      )
      
    })}
     
    </>
  );
};

export default App;