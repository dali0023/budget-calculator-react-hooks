import React from "react";

export default function Alert({type, text}) {
  return (
    <div className={`alert alert-${type}`} role='alert'>
      {text}
    </div>
  );
}
