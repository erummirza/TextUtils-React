import React ,{useState} from 'react'

export default function Textform(props) {
    const[text,setText] = useState('')
   // setText ("sfsdfs")
 //setText ("new text")
const handleUpclick = ()=>
{
//console.log("UPPER clase clicked"+text);
let newtext = text.toUpperCase();
setText(newtext);
props.showAlert("Convert to upper case","success")

}
const handleLowclick = ()=>
{
//console.log("UPPER clase clicked"+text);
let newtext = text.toLowerCase();
setText(newtext);
props.showAlert("Convert to lower case","success")
}
const handleclearclick = ()=>
{
//console.log("UPPER clase clicked"+text);
let newtext = '';
setText(newtext);
props.showAlert("text cleared","success")
}

const handlecopy = ()=>
{
//console.log("UPPER clase clicked"+text);
var newtext = document.getElementById("myBox");
newtext.select();
navigator.clipboard.writeText(newtext.value);
props.showAlert("copy to clip board","success")
}

const handleExtraspaces = ()=>
{
//console.log("UPPER clase clicked"+text);
let newtext = text.split(/[ ]+/);
setText(newtext.join(""))
props.showAlert("Remove extar spaces","success")

}

const handleOnChange = (e) => {
       // setText(e.target.value);
     //  console.log("handle on change")
       setText(e.target.value);
    }
    return (
      <>
    

<div className="Container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}} >
  <h1 >{props.heading}  </h1>
  <div className="mb3">
  <textarea className="form-control" style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white' ,color : props.mode === 'dark' ? 'white' : '#042743'}}   onChange={handleOnChange}  value={text} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" style={{backgroundColor:props.mode, color:'black'}} onClick={handleUpclick}>Convert to upper case</button>
<button className="btn btn-primary mx-2" style={{backgroundColor:props.mode, color:'black'}} onClick={handleLowclick}>Convert to Lower case</button>
<button className="btn btn-primary mx-2" style={{backgroundColor:props.mode, color:'black'}} onClick={handleclearclick}>Clear text</button>
<button className="btn btn-primary mx-2" style={{backgroundColor:props.mode, color:'black'}} onClick={handlecopy}>copy text</button>
<button className="btn btn-primary mx-2" style={{backgroundColor:props.mode, color:'black'}} onClick={handleExtraspaces}>Remove extra spaces</button>

    </div>
    <div className="Container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}} >
      <h1>your text summary</h1>
      {/* <p>{text.split(" ").length} words,{text.length} character</p> */}
      {/* <p>{text.split(" ").length} words,{text.length} character</p> */}
        <p>{ text[text.length - 1] == " " ? text.split(" ").length-1 : text.split(" ").length} words,{text.length} character</p>


   <p>{0.008* text.split(" ").length} minutes read</p>
  <p>Preivew</p>
  <>{text.length>0 ?text : "Enter something in teh textbox above to preview it here"}</>
    </div>
    </>
  )
}
