import React, { useState } from 'react';

export default function Textform(props) {

  const [text, settext] = useState("");

  const handleupclick = () => {
    let newText = text.toUpperCase();
    settext(newText);
  };

  const handlelowclick=()=>{
    let newText= text.toLowerCase();
    settext(newText);
  };

  const handleclearclick=()=>{
    let newText= ("");
    settext(newText);
  };

  const changing = (event) => {
    settext(event.target.value);
  };

  return (
    <>
      <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea
    className="form-control"
    id="Thebox"
    value={text}
    onChange={changing}
    style={{
      backgroundColor: props.mode === 'dark' ? 'black' : 'white',
      color: props.mode === 'dark' ? 'white' : 'black'
    }}
    rows="8"
  ></textarea>
</div>

      <button className="btn btn-danger  mx-4" onClick={handleupclick}> Convert to Uppercase </button>
<button className="btn btn-info mx-4" onClick={handlelowclick}> Convert to Lowercase </button>
<button className="btn btn-success mx-4" onClick={handleclearclick}>clear the Text </button>

<div className= "container my-3">
  <p> { text.length} characters</p>
  <p>{0.008 * text.split("").length}minutes read</p>

   

</div>

      
    </>
  );
}