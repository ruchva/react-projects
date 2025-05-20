//entiendes que estamos haciendo?
const nombre ='ruben';
let edad = 23;
console.log(`Hola ${nombre}, tienes ${edad} años`);

const arreglo = [1, 2, 3, 4, 5];
const arreglo2 = [...arreglo, 6, 7, 8, 9, 10];
console.log(arreglo2);

const persona = {
    nombre: 'Ruben',
    edad: 23,
    profesion: 'Desarrollador'
}
const persona2 = {
    ...persona,
    pais: 'Mexico',
    ciudad: 'Guadalajara'
}
console.log(persona2);

const arreglo3 = arreglo.map((item) => {
    return item * 2;
}
)
console.log(arreglo3);

const persona3 = {
    ...persona,
    edad: 24
}
console.log(persona3);

//si lo entendiste vamos a las functions
function saludar(nombre) {
    return `Hola ${nombre}`;
}

const saludar1 = function (nombre) {
    return `Hola ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}

const saludar3 = (nombre) => `Hola ${nombre}`;

const saludar4 = () => `Hola Ruben`;

const saludar5 = (nombre, edad) => {
    return `Hola ${nombre}, tienes ${edad} años`;
}

const saludar6 = (nombre, edad) => `Hola ${nombre}, tienes ${edad} años`;

const saludar7 = (nombre, edad) => {
    return {
        nombre: nombre,
        edad: edad
    }
}
//--
function getUser( nombre ) {
    return {
        uid: 'ABC123',
        username: nombre
    }
}
const user = getUser( 'El_Papi1502' );
console.log(user);
//--

const getUsuarioActivo = ( nombre ) => ({
    uid: 'ABC567',
    username: nombre
});
const usuarioActivo = getUsuarioActivo('El_Papi1502');
console.log(usuarioActivo);

//--entedemos la destructuracion?
const persona4 = {
    nombre: 'Ruben',
    edad: 23,
    profesion: 'Desarrollador',
    direccion: {
        ciudad: 'Guadalajara',
        pais: 'Mexico'
    }
}
const { nombre:names, edad:age, profesion, direccion: { ciudad, pais } } = persona4;
console.log(names, age, profesion, ciudad, pais);

//--ejemplo de destructuracion en objetos
const persona5 = {
    nombre: 'Ruben',
    edad: 23,
    profesion: 'Desarrollador',
    direccion: {
        ciudad: 'Guadalajara',
        pais: 'Mexico'
    }
}
const { nombre: nombre2, edad: edad2, profesion: profesion2, direccion: { ciudad: ciudad2, pais: pais2 } } = persona5;
console.log(nombre2, edad2, profesion2, ciudad2, pais2);


//--ejemplo de destructuracion en arreglos
const frutas = ['manzana', 'banana', 'naranja', 'uva'];
const [fruta1, fruta2, fruta3] = frutas;
console.log(fruta1, fruta2, fruta3);

const retornarArreglo = () => {
    return ['ABC', 123];
}
const [letras, numeros] = retornarArreglo();
console.log(letras, numeros);

const useState = ( valor ) => {
    return [ valor, () => { console.log('Hola Mundo') } ];
}
const [ nombreState, setNombreState ] = useState( 'Goku' );
console.log( nombreState );
setNombreState();


//espagghetti code de la muerte Fernando React

// Variables y Constantes

//const nombre = 'Fernando';
const apellido = 'Herrera';

let valorDado = 5;
valorDado = 4;

console.log( nombre, apellido, valorDado )

// var No se debe de usar...
if ( true ) {
    const nombre = 'Peter';
    console.log(nombre)
}

console.log( valorDado );

// Template Strings

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

console.log( nombreCompleto );


function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );

//Objeto Literal

const person = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321
    }
};

// console.table( persona );

const peter = { ...person };
peter.nombre = 'Peter';


console.log( person );
console.log( peter )


// Arreglos en JS

// const arreglo = new Array( 100 );
const arreglo6 = [1,2,3,4];
// arreglo.push(1)
// arreglo.push(2)
// arreglo.push(3)
// arreglo.push(4)

let arreglo7 = [ ...arreglo, 5 ];

const arreglo8 = arreglo7.map( function(numero) {
    return numero * 2;
});


console.log( arreglo6 );
console.log( arreglo7 );
console.log( arreglo8 );


// ForEach, Map, Filter
const carrito = [
    {
        id: 1,
        producto: 'Libro',
        precio: 10
    },
    {
        id: 2,
        producto: 'Lapiz',
        precio: 1
    },
    {
        id: 3,
        producto: 'Cuaderno',
        precio: 5
    }
];

const total = carrito.reduce( (total, producto) => {
    return total + producto.precio;
}, 0 );
console.log( total );

const total2 = carrito.map( (producto) => producto.precio ).reduce( (total, precio) => total + precio, 0 );
console.log( total2 );

const total3 = carrito.filter( (producto) => producto.precio > 5 ).map( (producto) => producto.precio ).reduce( (total, precio) => total + precio, 0 );
console.log( total3 );

