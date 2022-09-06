import { useState, useEffect } from "react"
import Script from "next/script";

// CODE BY KORNTIMAROON UNDER MIT LICENSED 2022
export default function home() {
  const readingTime = 3/10;
  const speakingTime = 4/10;
  const [useSData , setUseSData] = useState([]);
  
  useEffect(() => {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.getItem("data")) {
        setUseSData(localStorage.getItem("data"));
        document.getElementById("textarea").value = localStorage.getItem("data");
        var paraCount = document.getElementById('textarea').value.replace(/\n$/gm, '').split(/\n/).length;
        document.getElementById('paraCount').innerHTML = paraCount;
        var setCouterBarWord = localStorage.getItem("data").split(" ").length;
        var setCouterBarCharacter = localStorage.getItem("data").length;
        var setCouterReadTime = Math.round((localStorage.getItem("data").length)*readingTime)
        var setCouterSpeakTime = Math.round((localStorage.getItem("data").length)*speakingTime)
        if (localStorage.getItem("data").length == 0) {
          setCouterBarWord = 0;
          setCouterBarCharacter = 0;
          setCouterReadTime = 0;
          setCouterSpeakTime = 0
        }
        document.getElementById("counterReadTime").innerHTML = setCouterReadTime;
        document.getElementById("counterSpeakTime").innerHTML = setCouterSpeakTime;
        document.getElementById("counterBarWord").innerHTML = setCouterBarWord;
        document.getElementById("counterBarCharacter").innerHTML = setCouterBarCharacter;

        if (setCouterBarWord > 1) {
          document.getElementById("wordsText").innerHTML = "Words";
        } else {
          document.getElementById("wordsText").innerHTML = "Word";
        }
        if (setCouterBarCharacter > 1) {
          document.getElementById("charactersText").innerHTML = "Characters";
        } else {
          document.getElementById("charactersText").innerHTML = "Character";
        }
      }
    } else {
    }
  }, []);
  const dataOnChange = () => {
    var data = document.getElementById("textarea").value;
    var paraCount = document.getElementById('textarea').value.replace(/\n$/gm, '').split(/\n/).length;
    document.getElementById('paraCount').innerHTML = paraCount;
    localStorage.setItem("data", data);
    setUseSData(localStorage.getItem("data"));
    var setCouterBarWord = localStorage.getItem("data").split(" ").length;
    var setCouterBarCharacter = localStorage.getItem("data").length;
    var setCouterReadTime = Math.round((localStorage.getItem("data").length)*readingTime)
    var setCouterSpeakTime = Math.round((localStorage.getItem("data").length)*speakingTime)
    if (localStorage.getItem("data").length == 0) {
      setCouterBarWord = 0;
      setCouterBarCharacter = 0;
      setCouterReadTime = 0;
      setCouterSpeakTime = 0
    }
    document.getElementById("counterBarWord").innerHTML = setCouterBarWord;
    document.getElementById("counterBarCharacter").innerHTML = setCouterBarCharacter;
    document.getElementById("counterReadTime").innerHTML = setCouterReadTime;
    document.getElementById("counterSpeakTime").innerHTML = setCouterSpeakTime;
    if (setCouterBarWord > 1) {
      document.getElementById("wordsText").innerHTML = "Words";
    } else {
      document.getElementById("wordsText").innerHTML = "Word";
    }
    if (setCouterBarCharacter > 1) {
      document.getElementById("charactersText").innerHTML = "Characters";
    } else {
      document.getElementById("charactersText").innerHTML = "Character";
    }
  }
  const styleData = {
    "div": "w-[100px] h-[100%] float-left flex flex-col items-center justify-center ",
    "data": "font-sans font-extrabold text-xl leading-[0.8rem] ",
    "header": "font-[50] font-mono text-sm text-gray-700 "
  }
  return (
    <div className="flex h-screen flex-col items-center justify-center py-2 font-sans bg-gradient-to-r dark:from-slate-500 dark:to-green-700 from-green-300 to-blue-400">
      <div className="w-[1000px] h-screen flex items-center justify-center ms:w-screen font-mono">
        <div className="w-[90%] h-[500px] bg-gray-100 rounded-md drop-shadow-md ms:w-screen">
          <div className="w-[100%] font-sans h-[50px] border-b-2 border-gray-100 drop-shadow-lg">
            <div className={styleData.div}>
              <div className="">
                <p id="wordsText" className={styleData.header}>Word</p>
                <p id="counterBarWord" className={styleData.data}>0</p>
              </div>
            </div>
            <div className={styleData.div}>
              <div>
                <p id="charactersText" className={styleData.header}>Character</p>
                <p id="counterBarCharacter" className={styleData.data}>0</p>
              </div>
            </div>
            <div className={styleData.div + "mmd:hidden"}>
              <div>
                <p id="charactersText" className={styleData.header}>Reading</p>
                <p id="counterReadTime" className={styleData.data}>0</p>
              </div>
            </div>
            <div className={styleData.div + "mmd:hidden"}>
              <div>
                <p id="charactersText" className={styleData.header}>Speaking</p>
                <p id="counterSpeakTime" className={styleData.data}>0</p>
              </div>
            </div>
            <div className={styleData.div + "mmd:hidden"}>
              <div>
                <p id="charactersText" className={styleData.header}>Paragraph</p>
                <p id="paraCount" className={styleData.data}>0</p>
              </div>
            </div>
          </div>
          <textarea className="w-[100%] h-[400px] outline-0 bg-transparent p-2 resize-none" id="textarea" onChange={dataOnChange} placeholder="Type or paste your text here"></textarea>
          <div className="px-2 h-fit">
            <p className="font-bold">Word Counter</p>
          </div>
        </div>
      </div>
    </div>
  )
}
