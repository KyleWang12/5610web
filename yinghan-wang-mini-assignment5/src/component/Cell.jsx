import './Cell.css';
import { useState } from 'react';

export default function Cell(props) {

    const [isClicked, setIsClicked] = useState(false);
    let className = 'cell ' + (isClicked ? 'black' : 'white');
    function changeColor() {
        if (isClicked) {
            props.onClickCheck(props.sum - 1);
        } else {
            props.onClickCheck(props.sum + 1);
        }
        setIsClicked(!isClicked);
        // console.log({className});
    }


    return (
        <div className={className} onClick={changeColor}></div>
    )



}