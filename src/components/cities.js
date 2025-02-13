"use client";
import { useState } from "react";
    const name=(props)=>{
        const {title}=props;
        let[name,Setname]=useState();
        const SAO=()=>{
         Setname("https://i.pinimg.com/736x/a3/db/f0/a3dbf0facd31b9440da870940a97d7d3.jpg")
        }
        const Bleach=()=>{
            Setname("https://i.pinimg.com/736x/a5/f8/d5/a5f8d55036721c496ee9f8b50e88fc13.jpg")
           }
           const Gc=()=>{
            Setname("https://i.pinimg.com/736x/0c/ac/84/0cac84c944c1199c0fb4453c7751beab.jpg")
           }

    return (
        <div>
        <div>
           React classes
        </div>
            <button className="text-2xl bg-slate-500 font-black px-2 py-2 m-8 rounded-lg">Anime</button>
            <img src= {name} className="h-40 w-40 pt-6 rounded-lg"></img>
            <button className="mt-4 bg-yellow-300 font-semibold text-black px-2 py-2 m-8 rounded-lg " onClick={SAO}>SAO</button>
            <button className="mt-4 bg-green-300 font-semibold text-black px-2 py-2 m-8 rounded-lg"onClick={Bleach}>Bleach</button>
            <button className="mt-4 bg-pink-300 font-semibold text-black px-2 py-2 m-8 rounded-lg" onClick={Gc}>Guilty Crown</button>
        </div>
    );
};
export default name;