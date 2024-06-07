import { useState, useEffect } from "react";
import axios from "axios";  
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

export default function Test() {
    const [products, setProducts] = useState([]);

     const fetchProducts = async () => {
        const response = await 
axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts(); 
  }, []);

  const sendEmail = async () => {
    const data = {
        "name":"El usuario",
        "email":"felix.ivan91@gmail.com",
        "message":"Hola mundo!"
      }
  console.log(data)
  try {
    const res = await axios.post('/api/mail', data);
    console.log(res)
    toast.success('Email sent successfully');
  } catch (error) {
    console.log(error)
  }
  };
  return (
    <div>
        <input type="email" placeholder="Email" />
        <button onClick={sendEmail}>Send Mail</button>
        <Toaster />

        {products && products.length > 0 && products.map((product) => (
            <div key={product.id}>
            <Image unoptimized src={product.image} alt={product.name} width={100} height={100} />
            {product.title}
            </div>
        ))}
    </div>
  )
}

