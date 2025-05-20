import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en template string', () => {
    test('getSaludo debe retornar "Hola Fernando"', () => {
        // 1. Inicialización
        const nombre = 'Fernando';
        // 2. Estímulo
        const saludo = getSaludo(nombre);
        // 3. Observar el comportamiento
        expect(saludo).toBe(`Hola ${nombre}`);
    });
    
});