import React, { useState } from 'react';

const Display = (props) => {
    return(
        <div >
        <div>
            {props.boxList.map((boxStyle, index) => (
                <div key={index} style={boxStyle}>
                </div>
                ))
            }
        </div>
        </div>
    )
};

export default Display;