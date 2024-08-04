import { createContext, useState } from "react";
import run from "../config/Gemini";

export const Context = createContext()


const ContextProvider = (props) =>{

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompt, setPrevPrompt] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("")
    

   const onSent = async (prompt) =>{
    setResultData("")
    setLoading(true)
    setShowResult(true)
    setRecentPrompt(input)
    setPrevPrompt((prev)=>[...prev,input])
    const response = await run (input)
    setResultData(response)
    setLoading(false)
    setInput("")
    }
   
      
  
    const contextValue = {
         prevPrompt,
         setPrevPrompt,
         setInput,
         setRecentPrompt,
         recentPrompt,
         showResult,
         loading,
         input,
         resultData,
         loading,
         onSent

    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider 