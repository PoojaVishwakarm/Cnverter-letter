import { useState } from "react"

function FormData(props) {
  const [data,setData]=useState("")


  // const handleChange=(event)=>{
  //   setData(event.target.value)
  // }
   
  const handleUpper=()=>{
   let newtext=data.toUpperCase();
   setData(newtext)   
  }
  const handleLower=()=>{
    let newdata=data.toLowerCase();
    setData(newdata)
  }
  const handleClear=()=>{
    setData("")
  }

  const handleCopy = () => {
    console.log("copy button")
    let x = document.getElementById('myBox');
    x.select();
    x.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(x.value);
}
const handleRemove = () => {
  let test = data.split(/\s+/);
  setData(test.join(" "));
}

  return (
    <>
    
         <div className=""style={{height:"100px", width:"800px", color:props.mode==='light'?'black':'white'}}>
          <h1 className="mt-2">{props.title} </h1> 
        <div className="mb-2">
        <textarea className="form-control" 
           id="myBox"
           value={data}
           style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}}
          //  onChange={handleChange
          onChange={(e)=>setData(e.target.value)}
            rows="7"></textarea>
        </div >
        <button type="button" className="btn btn-primary me-2" onClick={handleUpper}>Lower to Upper</button>
        <button type="button" className="btn btn-secondary me-2" onClick={handleLower}>Upper to Lower</button>
        <button type="button" className="btn btn-success me-2" onClick={handleClear}>Clear</button>
        <button type="button" className="btn btn-danger me-2"  onClick={handleRemove}>Space Remove</button>
        <button type="button" className="btn btn-warning me-2" onClick={handleCopy }>Copy Text</button>

        <h2>{data.split(/\s+/).filter((element)=>{return element.length!==0}).length} 
        {" "}  Word And {data.split(/\s+/).filter((element)=>element.length!==0).length} {" "}Charaters</h2 >
        <h2>{0.008*data.split(" ").filter((element)=>element.length!==0).length}  {" "}Minutes to read</h2>
        </div>
       
        </>
  )
}

export default FormData
