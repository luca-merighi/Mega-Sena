import { useState } from 'react'
import { Mega } from '../../functions/numbers-roulette'
import './styles.css'

export default function NumbersRoulette() {
    const [numbers, setNumbers] = useState(Mega())

    function renderNumbers() {
        return numbers.map(
            number => <span key={number}>{number}</span>)
    }

    return (
        <main>
            <h1>Os números sorteados foram:</h1>

            <div className="numbers-container">
                {renderNumbers()}
            </div>
            
            <button onClick={() => setNumbers(Mega())}>
                Gerar Aposta
            </button>
        </main>
    )
}