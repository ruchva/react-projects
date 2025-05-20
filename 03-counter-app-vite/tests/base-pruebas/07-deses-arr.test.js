
import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en desestructuración', () => {
    test('retornaArreglo debe retornar un string y un número', () => {
        // 1. Inicialización
        const [letras, numeros] = retornaArreglo();
        // 2. Estímulo
        // primera forma        
        expect(letras).toEqual(expect.any(String));
        expect(numeros).toEqual(expect.any(Number));
        // segunda forma
        expect(typeof letras).toBe('string');
        expect(typeof numeros).toBe('number');
    });
});
