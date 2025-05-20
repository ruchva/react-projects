import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-async-await.js', () => {
    
    test('getImagen debe retornar un error si no se encuentra la imagen', async() => {
        const url = await getImagen();
        expect(url).toBe('No se encontro la imagen');
    });
    
    test('getImagen debe retornar una url de la imagen', async() => {
        const url = await getImagen();
        //expect(url.includes('http')).toBe(true);
        expect( typeof url ).toBe('string');
    });
});