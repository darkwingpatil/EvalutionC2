import React from "react";
import "./AddHouse.css"
export const AddHouse = () => {

  const [newobj,setobj]=React.useState({})
  const setinput=(e)=>{
    const myinput=e.target.className

    if(e.target.type=="checkbox")
    {
      console.log(e.target.checked)
      setobj({...newobj,[myinput]:e.target.checked})
    }
    else
    {
      setobj({...newobj,[myinput]:e.target.value})
    }
  }

  const submitdata=(e)=>{
    e.preventDefault();

     postdata()
  }

  const postdata=async()=>{
    let res = await fetch("http://localhost:8080/houses",{
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(newobj)
    })
    let data=await res.json()
    console.log(data)
  }

  return (
    <div className="addHouseContainer">
      <form onSubmit={submitdata}>
        <div className="finishing">
        <label>name</label>
        <input type="text" className="name"  required onChange={setinput} />
        </div>
        <br />
        <div className="finishing">
        <label>ownerName</label>
        <input  type="text" className="ownerName" required  onChange={setinput}/>
        </div>

        <br />
        <div className="finishing">
        <label>address</label>
        <input  type="text" className="address" required onChange={setinput} />
        </div>

        <br />
        <div className="finishing">
        <label>areaCode</label>
        <input  type="text" className="areaCode" required onChange={setinput} />
        </div>

        <br />
        <div className="finishing">
        <label>rent</label>
        <input  type="text" className="rent" required onChange={setinput} />
        </div>

        <br />
        <label className="set">preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input  type="checkbox" className="bachelor" onChange={setinput} />
        <br />
        <label>married</label>
        <input  type="checkbox" className="married" onChange={setinput} />
        <br />
        <div className="finishing">
        <label>image</label>
        <input  type="text" className="image" required onChange={setinput} />
        </div>
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
