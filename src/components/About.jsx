import React,{useState} from 'react'
export default function About() {
  

 const [style, setstyle] = useState({
    color: 'black',
    backgroundColor:'white',
 });

 const [btn, setbtn] = useState(  "Enable dark mode")
  
 const handleclick=()=>{
    if (style.color === 'black'){
    setstyle({
        color: 'white' ,
        backgroundColor : 'black',
       
    })
    setbtn("Enable light mode");
 
 } else{
    setstyle({
        color: 'black',
        backgroundColor : 'white',
  });
  setbtn("Enable dark mode" );
 }
}
  return (
    <>
    <h1>About us</h1>
    <div>
      <div className="accordion" id="accordionExample" style={style}>
  <div className="accordion-item" style={style}>
    <h2 className="accordion-header" style={style}>
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"style={style} aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample"style={style}>
      <div className="accordion-body" style={style}>
        <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={style}>
    <h2 className="accordion-header" style={style}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={style}>
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={style}>
      <div className="accordion-body" style={style}>
        <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={style}>
    <h2 className="accordion-header" style={style}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"style={style}>
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={style}>
      <div className="accordion-body">
        <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
<button  onClick={handleclick} type="button"className="btn btn-primary my-4" style={style}>{btn}</button>

    </div>
    </>
  )
}
