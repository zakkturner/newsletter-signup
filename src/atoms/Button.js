import React from "react";

export default function Button(props) {
  return (
    <input
      type="submit"
      value={props.value}
      // value={btnTxt.text}
      onClick={props.handleSubmit}
      className="submit-btn"
    />
  );
}
