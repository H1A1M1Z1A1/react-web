import React from "react";

const MovieCard = ({ myData }) => {
  const {  id,slug ,created_at,urls} = myData;
  // console.log(2,myData);
  return (
    <div className="card">
      <div className="card-info">
        <p className="card-id"></p>
        <img src={urls.full} style={{height:"300px",width:"100%"}} alt="./1jpg" />
        <p>{created_at}</p>
        <h2 style={{color:"white"}}>{slug}</h2>
      </div>
    </div>
  );
};

export default MovieCard;
