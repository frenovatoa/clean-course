(() => {

    type Gender = 'M' | 'F';

    class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ) { }
    }

    const newPerson = new Person('Felipe Renovato', 'M', new Date('2000-12-15'));
    console.log(newPerson);

})();