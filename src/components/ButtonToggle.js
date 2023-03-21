import { useState } from "react";

export default function ButtonToggle({toggle, setToggle}) {

  const ToggleChange = (value) => {
    if(toggle !== value){
      setToggle(value)
    }
  };

  return (
    <div className="Toggle_Container">
      <div className={toggle === "reviews" ? "Toggle_Reviews Toggle_active" :"Toggle_Reviews"} onClick={()=> ToggleChange("reviews")}>Reviews</div>
      <div className={toggle === "Recommend" ? "Toggle_Recommend Toggle_active" :"Toggle_Recommend"} onClick={() => ToggleChange("Recommend")}>Recommend Movie</div>
    </div>
  );
}