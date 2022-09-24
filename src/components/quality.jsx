import React from "react";

const Qualities = ({ color, name,  _id }) => {
    return <span key={ _id} className={`m-2 p-2 badge  bg-${color}`}>{name}</span>
          
}

export default Qualities


