import { getUser } from "../../src/base-pruebas/05-funciones";
import { getUsuarioActivo } from "../../src/base-pruebas/05-funciones";


describe('Pruebas en funciones', () => {
    test('getUser debe retornar un objeto', () => {
        // 1. Inicialización
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        // 2. Estímulo
        const user = getUser();
        // 3. Observar el comportamiento
        expect(user).toEqual(testUser);
    });

    test('getUsuarioActivo debe retornar un objeto', () => {
        // 1. Inicialización
        const nombre = 'Fernando';
        const testUser = {
            uid: 'ABC567',
            username: nombre
        };
        // 2. Estímulo
        const user = getUsuarioActivo(nombre);
        // 3. Observar el comportamiento
        expect(user).toEqual(testUser);
    });
});