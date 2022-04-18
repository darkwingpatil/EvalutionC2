import React from "react";

const Timer=()=>{
    const[second,setsecond]=React.useState(5)
    const[minute,setminute]=React.useState(0)
    const[hour,sethour]=React.useState(0)
    const[running,isrunning]=React.useState(false) //make sure when you click on start multiple times it do not temper your code
    const Refid=React.useRef()
    const[hidden,sethidden]=React.useState(true)



    let start=()=>{
        sethidden(false)
        if(running)
        {
            return
        }
        isrunning(true) // once the code runs make it true so whenever you click on start it does not temper your code
        Refid.current= setInterval(()=>{
            setsecond((prev)=>{
                if(prev==0)
                {
                    setminute((prev1)=>{
                        if(prev1==0)
                        {
                            sethour((prev)=>{
                                if(prev==0)
                                {
                                    reset()
                                }
                                else
                                {
                                    return prev-0.5
                                }
                            })
                            return prev1+60.5;
                        }
                        if(prev1>60)
                        {
                            prev1=prev1-60
                            sethour((prev2)=>prev2+0.5)
                        }
                          return (prev1-0.5)
                        })
                        prev=60; 
                }
                if(prev>60)
                {
                      prev=prev-60;
                      setminute((prev1)=>prev1+0.5)
                }
                return prev=prev-1       
            })
        },1000)  
    }

    let reset=()=>{
        isrunning(true)
        setsecond(0)
        setminute(0)
        sethour(0)
        clearInterval(Refid.current)
        isrunning(false)
    }
    let pause=()=>{
        isrunning(false) //once you pause then only your start should work
        clearInterval(Refid.current)
    }
return(
    <div>
        {(hidden)?(<div>
            <input type="number" name="hour" onChange={(e)=>setsecond(Number(e.target.value))} placeholder="Seconds"></input>
            <input type="number" name="minute" onChange={(e)=>setminute(Number(e.target.value))} placeholder="Minutes"></input>
            <input type="number" name="second" onChange={(e)=>sethour(Number(e.target.value))} placeholder="Hours"></input>
        </div>):("")}
        
        <div onClick={()=>sethidden(true)}style={{display:"flex"}}><h1 style={{marginRight:"5%"}}>{second}sec</h1>
        <h1 style={{marginRight:"5%"}}>{minute}min</h1>
        <h1>{hour}hr</h1> </div>
        <button onClick={start}>start</button>
        <button onClick={pause}>pause</button>
        <button onClick={reset}>reset</button>
    </div>
)
}
export{Timer}