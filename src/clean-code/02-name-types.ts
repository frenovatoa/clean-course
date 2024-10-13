(() => {

    //! Las variables se deben entender sin necesidad de comentarios.

    //// Arreglo de temperaturas en grados celsius.
    const temperaturesInCelsius = [33.6, 12.34];

    //// Dirección ip del servidor.
    const serverIp = '123.123.123.123';

    //// Listado de usuarios.
    const users = [{ id: 1, email: 'felipe@google.com' }, { id: 2, email: 'mayra@google.com' }, { id: 3, email: 'angel@google.com' }];

    //// Listado de emails de los usuarios.
    const userEmails = users.map(user => user.email);

    //// Variables booleanas de un videojuego.
    const canJump = false;
    const canRun = true;
    const hasItems = false;
    const isLoading = false;

    //* Otros ejercicios
    //// Tiempo inicial.
    const startTime = new Date().getTime();
    // ...
    // 3 doritos después
    // ...
    //// Tiempo al final.
    const endTime = new Date().getTime() - startTime;


    //* Funciones
    //// Obtiene los libros.
    function getBooks() {
        throw new Error('Function not implemented.');
    }

    //// Obtiene libros desde un URL.
    function getBooksFromUrl(url: string) {
        throw new Error('Function not implemented.');
    }

    //// Obtiene el área de un cuadrado basado en sus lados.
    function getSquareArea(sideInCm: number) {
        throw new Error('Function not implemented.');
    }

    //// Imprime el trabajo.
    function printJob() {
        throw new Error('Function not implemented.');
    }

})();