import React , {useState} from 'react'
import './squareStyle.css';

export default function Square(props) {
    return (
        <>
            <button className='square' onClick={props.onclick} style={{color:props.colorValue}}>{props.value}</button>
        </>
    );
}