import React from 'react';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}> I'm {props.name} and I'm looking at Gabriel's first ReactApp...</p>
            <input type='text' onChange = {props.changed} placeholder='Your name'/> 
        


        </div>
    )
};

export default person;