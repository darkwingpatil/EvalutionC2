import React from "react";


const Counter=()=>{
    const[val,setval]=React.useState(0)
    const[milisec,setmili]=React.useState(0)
    const[isrunn,setrunn]=React.useState(false)
    const[show,setshow]=React.useState(true)
    const Refid=React.useRef();
    const Refid2=React.useRef();
    React.useEffect(()=>{
        start()
        return stop 
    },[])


    let start=()=>{
        setshow(!show)
        if(isrunn)
        {
            return
        }
        setrunn(true)
        Refid.current=setInterval(() => {
            setval((prev)=>prev+1)
        }, 1000);
        Refid2.current=setInterval(()=>{
            setmili((prev)=>{
                if(prev==100)
                {
                    return 0
                }
                else
                {
                   return prev+1
                }
                })
        },25)
    }

    let stop=()=>{
        setshow(!show)
        clearInterval(Refid.current)
        clearInterval(Refid2.current)
        setrunn(false)
    }
return(
    <div>
        <div style={{display:"flex"}}>
            <h1 style={{marginRight:"20px",fontSize:"50px"}}>{val}</h1>
            <h2 style={{marginTop:"4.2%"}}>{milisec}</h2>
        </div>
        { !show?(<button onClick={stop}>Pause</button>):(<button onClick={start}>Start</button>)  }
        <button onClick={()=>{
            setmili(0)
            setval(0)}}>reset</button>
 
        
    </div>
)
}

export{Counter}