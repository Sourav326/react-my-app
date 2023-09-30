import { useState } from "react";

const Emoji = () => {
    
    const emojiDictionary = {
        "😀": "Grinning Face",
        "🤣": "Rolling on the Floor Laughing",
        "🤑": "Money-Mouth Face",
        "😑": "Expressionless Face",
        "😕": "Confused Face",
        "😟": "Worried Face",
        "🤗": "Hugging Face",
        "😉": "Winking Face",
        "😋": "Face Savoring Food",
        "😇": "Smiling Face with Halo",
        "🤐": "Zipper-Mouth Face",
      };
    const emojiKeys = Object.keys(emojiDictionary);
    
    const [message, setMessage] = useState("")
    const handleChange = event => {
        let value = event.target.value;
        if(emojiDictionary[value]){
            setMessage(emojiDictionary[value]);
        } else if(value.length == 0){
            setMessage("Value is empty, Please provide a value");
        }else{
            setMessage("Not Available in database");
        }
      };
    return (
        <div>
            <h2 className="header">Emoji Interpreter</h2>
            <h2 className="gameDesc">Type your emoji here &#128071; to know its meaning</h2>
            <input className="inputcode" type="text" name="code"  onChange={handleChange}/>
            <p className="outputMessage">{message}</p>

            <p className="gameAction">Click on emoji to know its meaning</p>
            
           <ul className="emojilist">
            <li>{
                emojiKeys
            }</li>
           </ul>
        </div>
    )
}

export default Emoji