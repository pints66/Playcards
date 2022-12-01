import React from "react";


const ActionsButtons = (props) => {
  return (
    <div style={{ margin: "40px auto", textAlign: "center" }}>
      <button onClick={() => props.shuffle(props.deckArray)}>Shuffle</button>
    </div>
  );
};

export default ActionsButtons;
