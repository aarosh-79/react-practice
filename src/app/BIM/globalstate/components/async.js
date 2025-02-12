"use client"

import React from "react";

const a = new Promise((resolve, reject) => {
     setTimeout(() => {
    if (3 + 3== 6){
        resolve("success")
    }else {
        reject("failed")
    }
}, 3000);
    })

    a.then((value)=>{
        console.log(value,"a is done");
    }).catch((error)=>{
        console.log(value,"a is mistake")
    });


    
    const Async = () => {
      return (
        <div>A</div>
      )
    }
    
    export default Async;