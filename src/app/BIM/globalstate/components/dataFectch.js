"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios';
const DataFetch = () => {
    const [product, setProduct] = useState(null);
    // const [count, setCount] = useState(0);
    const fetchdata = () => {
        const response = axios.get("https://fakestoreapi.com/products/1");
        response.then((value) => {
            setProduct(value.data)
        })
            .catch((error) => {
                console.log(error, "error")
            });
    }

    useEffect(() => {
        fetchdata();
    }, []);
    return (
        <div className="my-10">
            <img src={product?.image} alt="" className="w-20 h-15" />
            <p>
                {product?.title}
            </p>
            
        </div>
    )
}
export default DataFetch;