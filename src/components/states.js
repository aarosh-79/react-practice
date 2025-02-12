"use client";   
import { useState } from "react";
const States=(props)=>{
    const {title}=props;
    let[count,Setcount]=useState(1);

    const increment=()=>{
        Setcount(count+1);
    }
    const decrement=()=>{
        if(count>0){    
        Setcount(count-2);
    }
}
    return(
        <div>
            <h1 className="text-5xl text-white">Counter value ={count}</h1>
            <button className="mt-4 bg-purple-300 text-black px-2 py-2 rounded-lg" onClick={increment}>
            Increment
            </button>
            <button className="mt-4 bg-yellow-300 text-black px-2 py-2 m-8 rounded-lg" onClick={decrement}>
            decrement
            </button>
            
            
        </div>
    );
};
export default States;