import React,{useState} from 'react'

export default function TextForm(prop) {
    const [text , setText] = useState("Enter Text Here"); // we can also romove this between ("")

    const upClick = () =>{
        // setText("Here State Is Used T0 Change State Of Entity. Also due to event.taget.value setText value id bacoming whatever The value user is typing ")
        let newText = text.toUpperCase();
        setText(newText)
        // console.log("upClick Clicked")
    }

    const lowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handlechange = (event) =>{
        // console.log("Changes occured")
        setText(event.target.value)
    }

    return (
        <>
            <form>
                <div className="form-group">
                    <h1>{prop.heading}</h1>
                    <textarea className="form-control" value={text} onChange={handlechange} id="FormTextArea" rows="3"></textarea>
                    <div className="btn btn-primary my-2" onClick={upClick}>Convert To UPPERCASE</div>
                    <div className="btn btn-primary my-2 mx-5" onClick={lowClick}>Convert To lowercase</div>
                </div>
            </form>
            <div className="container" my-2>
                <h2>Your Text Summary</h2>  
                {text.split(" ").length} Words And {text.length} Characters <br />
                {0.008 * text.split(" ").length} Minutes Required To Read
                <h4>Preview</h4>
                <p>{text}</p>
            </div>
        </>
    )
}
