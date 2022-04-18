import React from "react";
import { Counter } from "./counter";
import{Timer} from "./timer"
const Google=()=>{

    const[toogle,settoogle]=React.useState(false)
return(
    
    <div>
        <button onClick={()=>settoogle(true)}>Timer</button>
        <button onClick={()=>settoogle(false)}>Stopwatch</button>
        {
            toogle?(
                <div>
                    <Timer/>
                </div>
            )
            :(
                <div>
                    <Counter/>
                </div>
            )
        }
    </div>
)
}

export{Google}