(() => {

    //? Resolver sin la triple condicional dentro del if.
    // ¿Includes? ¿Arrays?

    function isRedFruit( fruitName: string ): boolean {
        const redFruits = ['manzana', 'cereza', 'ciruela'];
        return redFruits.includes(fruitName);
    }

    //? Simplificar esta función.
    // ¿Switch? ¿Objeto literal? Validar posibles colores...

    type FruitColor = 'red' | 'yellow' | 'purple';

    function getFruitsByColor( colorName: FruitColor ): string[] {
        const fruitsByColor = {
            red:    ['manzana','fresa'],
            yellow: ['piña','banana'],
            purple: ['moras','uvas']
        };

        if (!Object.keys(fruitsByColor).includes(colorName)) {
            throw Error('The color must be: red, yellow or purple.');
        }

        return fruitsByColor[colorName];
    }

    //? Simplificar esta función.
    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function workingSteps() {
        if( !isFirstStepWorking ) return 'First step broken.';
        if( !isSecondStepWorking ) return 'Second step broken.';
        if( !isThirdStepWorking ) return 'Third step broken.';
        if( !isFourthStepWorking ) return 'Fourth step broken.';
        return 'Working properly!';
    }

    // isRedFruit:
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' });     // true

    // getFruitsByColor:
    console.log({ redFruits: getFruitsByColor('red') });        // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') });  // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') });  // ['moras', 'uvas']
    console.log({ pinkFruits: getFruitsByColor('pink') });      // Error

    // workingSteps:
    console.log({ workingSteps: workingSteps() });

})();