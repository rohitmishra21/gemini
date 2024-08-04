import React, { useContext } from "react"; 
import { RiCompass3Line } from "react-icons/ri";
import './main.css'
import { GoLightBulb } from "react-icons/go";
import { FiMessageSquare } from "react-icons/fi";
import { GiConcentrationOrb } from "react-icons/gi";
import { GrGallery } from "react-icons/gr";
import { IoMdMic } from "react-icons/io";
import { IoMdSend } from "react-icons/io";
import { SiGooglegemini } from "react-icons/si";
import { Context } from "../../Context/Context";

const Main = () => {
   const{onSent,prevPrompt,showResult,loading,resultData,setInput,input,recentPrompt} = useContext(Context)
   
  return (
    <>
      <div className="main min-h-[100vh] relative flex-1 pb-[15vh]">
        <div className="nav flex justify-between items-center text-xl p-4 text-[#5F6368]">
          <h1>Gemini</h1>
          <img
            src=" https://img.freepik.com/premium-photo/anime-male-avatar_950633-945.jpg   "
            className="rounded-full w-10 h-10 object-cover"
          />
        </div>
        <div className="main-contaner max-w-[900px] m-auto">


          {!showResult ? <>
            <div className="content text-[56px] font-semibold text-[#c4c7c5] p-[20px] ">
            <span
              className="bg-clip-text text-transparent"
              style={{
                background: "linear-gradient(16deg, #4b90ff, #ff5546)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Hellow, Rohit
            </span>
            <h1>How can I help you today?</h1>
          </div>
          <div className="cards grid grid-flow-col gap-[15px] p-[20px]">
            <div className="card h-[200px] p-[15px] bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#DDE3EA] ">
              <h1 className="text-gray-700">
                What are some tips to improve public speaking skills for
                beginners?
              </h1>
              <RiCompass3Line className="text-2xl absolute bottom-6 right-6" />
            </div>
            <div className="card h-[200px] p-[15px] bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#DDE3EA]">
              <h1>Help me find the latest trends</h1>
              <GoLightBulb className="text-2xl absolute bottom-6 right-6" />
            </div>
            <div className="card h-[200px] p-[15px] bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#DDE3EA]">
              <h1>Provide questions to help me prepare for an interview</h1>
              <FiMessageSquare className="text-2xl absolute bottom-6 right-6" />
            </div>
            <div className="card h-[200px] p-[15px] bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#DDE3EA]">
              <h1>
                Recommend new types of water sports, including pros & cons
              </h1>
              <GiConcentrationOrb className="text-2xl absolute bottom-6 right-6" />
            </div>
          </div>
          </>
        :
        <div className="result px-[5%] max-h-[70vh] ">
          <div className="result-title flex items-center gap-8 mb-10">
          <img
            src=" https://img.freepik.com/premium-photo/anime-male-avatar_950633-945.jpg   "
            className="rounded-full w-20 h-20 object-cover"
          />
          <p>{recentPrompt} ?</p>
          </div>
          <div className="result-data">

          <SiGooglegemini className=""/>
          {loading ? <div className="loader w-full flex flex-col gap-6 "
    
          >
              <hr className="rounded-sm border-none bg-[#f6f7f8]
              "
              style={{  background: "linear-gradient(to right,#9ed7ff, #fff, #9ed7ff)",
                 backgroundSize:"800px",
                 height:"20px" ,
                }}
              />
              <hr className="rounded-sm border-none bg-[#f6f7f8]
              "
              style={{  background: "linear-gradient(to right,#9ed7ff, #fff, #9ed7ff)",
                 backgroundSize:"800px",
                 height:"20px" ,
                }}
              />
              <hr className="rounded-sm border-none bg-[#f6f7f8]
              "
              style={{  background: "linear-gradient(to right,#9ed7ff, #fff, #9ed7ff)",
                 backgroundSize:"800px",
                 height:"20px" ,
                }}
              />
            </div>
          :  
          <p dangerouslySetInnerHTML={{__html:resultData}}></p>
          }
            
       
          </div>
        </div>  
        }
        
          <div className="main-botoom absolute bottom-0 w-full max-w-[900px] py-[20px] m-auto">
            <div className="search-box flex items-center justify-between gap-[20px] py-[10px] px-[20px] rounded-full bg-[#E9EEF6]">
              <input  onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here" className="flex-1 bg-transparent outline-none"/>
              <div className="flex gap-4 text-2xl">
              <GrGallery />
              <IoMdMic />
              < IoMdSend  onClick={() =>onSent()}/>
              </div>
            </div>
            <div className="lst-line py-2">
              <p className="text-xs text-center text-gray-500">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
            </div>
          </div>
         </div>
      </div>
      
    </>
  );
};

export default Main;
