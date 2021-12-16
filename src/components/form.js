import React, { useState } from 'react';

const Form = (props) => {
    const [colorBox, setColorBox] = useState("")
    const [size, setSize] = useState("")

    
    const {boxList, setBoxList} = props
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const boxStyle = {
            height: `${size}px`,
            width: `${size}px`,
            backgroundColor: colorBox
        };
        setBoxList([...boxList,boxStyle]);
        setColorBox("");
        setSize("");
    };

    return(
        <div>
        <h1>Create a New Box</h1>
        <form onSubmit={ handleSubmit }>
            <div>
            <input 
                rows="1"
                cols="10"
                placeholder="What color box would you like?"
                onChange={ (e) => setColorBox(e.target.value) }
                value={ colorBox }
            ></input>
            <input 
                rows="1"
                cols="10"
                placeholder="What size would you like?"
                onChange={ (e) => setSize(e.target.value) }
                value={ size }
            ></input>
            <input type="submit" value="Create Box" />
            </div>
        </form>
        </div>
    )
};

export default Form;