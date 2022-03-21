import './App.css'
import Cell from './Cell'
import { useState } from 'react';

export default function App() {

    const [sum, setSum] = useState(0);

    return (
        <div>
            <h1>Count: {sum}</h1>
            <div className='cell-container'>
                <Cell sum={sum} onClickCheck={(n) => setSum(n)} />
                <Cell sum={sum} onClickCheck={(n) => setSum(n)} />
                <Cell sum={sum} onClickCheck={(n) => setSum(n)} />
                <Cell sum={sum} onClickCheck={(n) => setSum(n)} />
            </div>
        </div>
    )



}