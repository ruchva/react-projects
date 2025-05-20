import { getHeroeById } from "../../src/base-pruebas/08-imp-exp"; 
import { getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes_ from "../../src/data/heroes";

describe('Pruebas en funciones de héroes', () => {
    test('getHeroeById debe retornar un héroe por ID', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        expect(heroe).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
    });

    test('getHeroeById debe retornar undefined si héroe no existe', () => {
        const id = 100;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);
    });

    test('getHeroesByOwner debe retornar héroes de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(3);
        expect(heroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);
        expect(heroes).toEqual(
            heroes_.filter((heroe) => heroe.owner === owner)
        );
    });

    test('getHeroesByOwner debe retornar héroes de Marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(2);
        expect(heroes).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ]);
        expect(heroes).toEqual(
            heroes_.filter((heroe) => heroe.owner === owner)
        );
    });
});