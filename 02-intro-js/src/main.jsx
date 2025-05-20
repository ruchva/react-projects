import heroes, { getHeroById } from './data/heroes.js';

//Entendemos las promesas
const promesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
        //resolve('Hola Mundo');
        //reject('Error en Hola Mundo');
        //const mi_heroe = heroes.find( (heroe) => heroe.id === 2); 
        const mi_heroe = getHeroById(2); 
        if (mi_heroe) {
            resolve(mi_heroe);
        } else {
            reject('No se pudo encontrar el héroe');
        }
    }, 1000);
});

promesa.then( (heroe) => {
    console.log('mi heroe: ', heroe);
}
).catch( (err) => {
    console.warn(err);
});



const getHeroByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const mi_heroe = getHeroById(id); 
            if (mi_heroe) {
                resolve(mi_heroe);
            } else {
                reject('No se pudo encontrar el héroe');
            }
        }, 3000);
    });
}
getHeroByIdAsync(1)
    .then( console.log )
    .catch( console.warn );


// ejemplo de async await
const getHeroByIdAsync2 = async (id) => {
    try {
        const mi_heroe = await getHeroByIdAsync(id);
        console.log(mi_heroe);
    } catch (error) {
        console.warn(error);
    }
}
getHeroByIdAsync2(1);
getHeroByIdAsync2(10)
    .then( console.log )
    .catch( console.warn );   



// ejemplo fetch api
const apiKey = '7a0c1f2b3e8d4f5a9c6e0b8f1c2e0b8f';
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });


// ejemplo de async await con fetch
const getPopularMovies = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}
getPopularMovies();

// ejemplo de async await con fetch y destructuring
const getPopularMovies2 = async () => {
    try {
        const response = await fetch(url);
        const { results } = await response.json();
        console.log(results);
    } catch (error) {
        console.error('Error:', error);
    }
}
getPopularMovies2();

// ejemplo de async await con fetch y destructuring y map
const getPopularMovies3 = async () => {
    try {
        const response = await fetch(url);
        const { results } = await response.json();
        const movies = results.map(movie => ({
            title: movie.title,
            release_date: movie.release_date,
            overview: movie.overview
        }));
        console.log(movies);
    } catch (error) {
        console.error('Error:', error);
    }
}
getPopularMovies3();

// ejemplo de async await con fetch y destructuring y map y filter
const getPopularMovies4 = async () => {
    try {
        const response = await fetch(url);
        const { results } = await response.json();
        const movies = results
            .filter(movie => movie.release_date >= '2020-01-01')
            .map(movie => ({
                title: movie.title,
                release_date: movie.release_date,
                overview: movie.overview
            }));
        console.log(movies);
    } catch (error) {
        console.error('Error:', error);
    }
}
getPopularMovies4();

// ejemplo de async await con fetch y destructuring y map y filter y reduce
const getPopularMovies5 = async () => {
    try {
        const response = await fetch(url);
        const { results } = await response.json();
        const movies = results
            .filter(movie => movie.release_date >= '2020-01-01')
            .map(movie => ({
                title: movie.title,
                release_date: movie.release_date,
                overview: movie.overview
            }))
            .reduce((acc, movie) => acc + movie.overview.length, 0);
        console.log(movies);
    } catch (error) {
        console.error('Error:', error);
    }
}
getPopularMovies5();


// ejemplo de operador ternario
const isTrue = true;
const message = isTrue ? 'Es verdadero' : 'Es falso';
console.log(message);

// ejemplo de operador ternario con destructuring
const person = {
    name: 'Juan',
    age: 30,
    isMarried: false
};
const { name, age, isMarried } = person;
const message2 = isMarried ? `${name} está casado` : `${name} no está casado`;
console.log(message2);



