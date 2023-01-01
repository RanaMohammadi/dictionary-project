import React from "react";
export default function Examples(props) {
  if (props.example) {
    return <div className="example">"{props.example}"</div>;
  } else {
    return null;
  }
}
