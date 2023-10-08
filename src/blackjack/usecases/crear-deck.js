import _ from 'underscore';

// EXPORTACIONES INDEPENDIENTES
export const miNombre = 'Fernando';
// export const a = 'hola Mundo';

// Esta función crea un nuevo deck
// Intellisense para dar información concreta de una función o un bloque de codigo.
// Se consigue con Better Comments
/**
 * 
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} tiposEspeciales Ejemplo:['A', 'J', 'Q', 'K']
 * @returns { Array<String> } // retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
// const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if( !tiposDeCarta  || tiposDeCarta.length === 0) 
        throw new Error('tiposDeCarta es obligatorio como un arreglo de string');

    if( !tiposEspeciales  || tiposEspeciales.length === 0) 
        throw new Error('tiposEspeciales es obligatorio como un arreglo de string');


    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck ); // npm Underscore 

    return deck;
}


// EXPORATCION POR DEFECTO
export default crearDeck ;


