(() => {

    //// Función para obtener información de una película por id.
    function getMovieById(id: string) {
        console.log({ id });
    }

    //// Función para obtener información de los actores de una película.
    function getMovieCastById(id: string) {
        console.log({ id });
    }

    //// Función para obtener el bio del actor por el id.
    function getActorBioById(id: string) {
        console.log({ id });
    }

    //// Crear una película.
    //! Es recoemndable usar máximo 3 parámetros.

    interface Movie {
        cast: string[];
        description: string;
        rating: number;
        title: string;
    }

    function createMovie({ title, description, rating, cast }: Movie) {
        console.log({ title, description, rating, cast });
    }

    //// Crea un nuevo actor.

    function checkFullName(fullName: string) {
        console.log({ fullName });
        return true;
    }

    function createActor(fullName: string, birthdate: Date): boolean {

        if (!checkFullName(fullName)) return false;

        console.log('Crear actor...');
        return true;
    }

    //* Continuación...

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {

        if (isDead) return 1500;

        if (isSeparated) return 2500;

        return (isRetired) ? 3000 : 4000;
        
    }

})();