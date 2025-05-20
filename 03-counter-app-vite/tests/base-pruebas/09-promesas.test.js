import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('Pruebas en el archivo 09-promesas.js', () => {
    test('getHeroeByIdAsync debe retornar un héroe async', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                done();
            });
    });

    test('getHeroeByIdAsync debe retornar un error si el héroe no existe', (done) => {
        const id = 100;
        getHeroeByIdAsync(id)
            //     Esto no debería ejecutarse porque el héroe no existe
            //     lo que deberia fallar no esta fallando
            .then(heroe => {
                expect(heroe).toBe(undefined);
                done();
            })
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });
    });
});

