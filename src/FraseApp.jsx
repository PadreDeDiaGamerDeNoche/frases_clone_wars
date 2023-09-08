import { useEffect } from 'react';
import data from './data/frases.json'

export const FraseApp = ( ) => {

    const max = data.length-1;
    const numeroAleatorio = Math.floor(Math.random() * max) + 1;
    
    const { id , frase } = data[numeroAleatorio];


return (
<>

    { frase && <h1>{frase}</h1>}
    {/* { id && <h3> Capitulo {id} </h3>} */}

</>
)
}