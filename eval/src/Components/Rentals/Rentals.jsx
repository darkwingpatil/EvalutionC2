import React from "react";
import "./Rentals.css";

export const Rentals = () => {

  const [housedata,sethousedata]=React.useState([])

  React.useEffect(()=>{
    gettingdata()
  },[])

  const gettingdata=async()=>{
    let res= await fetch("http://localhost:8080/houses");
    let data=await res.json()
    sethousedata(data)
  }
  const lowsort=(val)=>{
    housedata.sort((a,b)=>a[val]-b[val])
    sethousedata([...housedata])
  }
  const highsort=(val)=>{
    housedata.sort((a,b)=>b[val]-a[val])
    sethousedata([...housedata])
  }
  const getinput=(e)=>{
    let newdata=housedata.filter((ele)=>ele.address.includes(e.target.value))
    if(newdata.length==0)
    {
      window.location.reload(false)
      return
    }
    sethousedata(newdata)
  }
  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button className="sortById" onClick={()=>lowsort("id")}>Sort by ID</button>
        <button className="sortByRentAsc" onClick={()=>lowsort("rent")}>Rent Low to high</button>
        <button className="sortByRentDesc" onClick={()=>highsort("rent")}>Rent High to low</button>
        <button className="sortByAreaAsc" onClick={()=>lowsort("areaCode")}>Area Low to high</button>
        <button className="sortByAreaDesc" onClick={()=>highsort("areaCode")}>Area High to Low</button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
        onChange={getinput}
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {housedata.map((house, index) => {
            return (
              <tr key={house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.name} </td>
                <td className="ownersName">{house.ownerName}</td>
                <td className="address">{house.address}</td>
                <td className="areaCode">{house.areaCode}</td>
                <td className="rent">{house.rent}</td>
                <td className="preferredTenants">
                  {/* Show text Both or Bachelors or Married based on values */
                  (house.available?"Married":(house.available=="both")?"both":"Bachelors")}
                </td>
                <td className="houseImage">
                  <img src={house.image} alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
