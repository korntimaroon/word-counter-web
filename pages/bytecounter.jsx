import { useState, useEffect } from "react"
import Script from "next/script";


export default function home() {
  const dataOnChange = () => {
    var data = document.getElementById("textarea").value;
    var setCounterByte = data.length;
    if (data.length == 0) {
        setCounterByte = 0;
    }
    document.getElementById("counterByte").innerHTML = setCounterByte;
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 font-sans bg-gradient-to-r dark:from-slate-500 dark:to-green-700 from-green-300 to-blue-400">
      <div className="fixed top-0 left-0 right-0 bottom-0 w-screen h-[50px] bg-red-50 dark:bg-gray-800 dark:text-white">
        <div className="h-[50px] w-[100%]">
          <a className="ml-[10px]">Home</a>
          <a className="ml-[10px]">Services</a>
        </div>
      </div>
      <div className="w-[1000px] h-screen flex items-center justify-center ms:w-[400px] mxs:w-screen">
        <div className="w-[100%] h-[500px] bg-gray-100 rounded-md drop-shadow-md ">
          <div className="w-[100%] font-sans h-[50px] border-b-2 border-gray-100 drop-shadow-lg">
            <div className="text-center w-[100px] float-left">
              <p id="counterByte" className="font-sans">0</p><p className="font-bold">Byte(size)</p>
            </div>
            <div className="text-center w-max h-[50px] float-right mt-[10px] mr-2">
              <p className="font-bold">Datasize Counter</p>
            </div>
          </div>
          <textarea className="w-[100%] h-[400px] outline-0 bg-transparent p-2 resize-none" id="textarea" onChange={dataOnChange} placeholder="Type or paste your text here"></textarea>
        </div>
      </div>
    </div>
  )
}
