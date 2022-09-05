import { useState, useEffect } from "react"
import Script from "next/script";


export default function RandomNumber() {
    
    const getRndInteger = () => {
        if (document.getElementById("min").value == "" || document.getElementById("max").value == "") {
            document.getElementById("alert").innerHTML = "Please enter a number";
        } else {
            const result = Math.floor(Math.random() * (parseInt(document.getElementById("max").value) - parseInt(document.getElementById("min").value))) + parseInt(document.getElementById("min").value);
            document.getElementById("result").innerHTML = result;
        }
    }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 font-sans bg-gradient-to-r dark:from-slate-500 dark:to-green-700 from-green-300 to-blue-400">
      <div className="fixed top-0 left-0 right-0 bottom-0 w-screen h-[50px] bg-red-50 dark:bg-gray-800 dark:text-white">
        <div className="h-[50px] w-[100%]">
          <a className="ml-[10px]">Home</a>
          <a className="ml-[10px]">Services</a>
        </div>
      </div>
      <div className="w-[1000px] h-screen flex items-center justify-center ms:w-screen">
        <div className="w-[90%] h-[350px] bg-gray-100 rounded-md drop-shadow-md ms:w-screen">
            <div className="w-[100%] h-[50px]">
                <div className="p-2">
                    <a className="font-bold font">Random Number Generator</a>
                </div>
            </div>
            <div className="w-[100%] h-fit">
                <div className="w-[50%] float-left">
                    <div className="p-4">
                        <span className="font-bold">From</span>
                        <div>
                            <input className="font-bold p-1 rounded-md" id="min" type="number" placeholder="Any number" />
                        </div>
                    </div>
                </div>
                <div className="w-[50%]">
                    <div className="p-4">
                        <span className="font-bold">To</span>
                        <div>
                            <input className="font-bold p-1 rounded-md" id="max" type="number" placeholder="Any number" />
                        </div>
                    </div>
                </div>
                <div className="float-right mt-[-100px] p-2 h-[450px] w-[50%] flex items-center justify-center ">
                    <p id="result" className="text-blue-600 font-bold text-4xl mb-[325px]">Random</p>
                </div>
                <div className="h-[50px] w-[50%] float-left p-4">
                    <button className="bg-blue-500 rounded w-[200px] text-white font-bold p-2" onClick={getRndInteger}>Random</button>
                </div>
                <div>
                    <div className="p-4 float-left">
                        <span id="alert" className="font-bold text-red-600"></span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
