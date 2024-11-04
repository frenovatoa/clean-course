interface Bird {
    fly(): void;
    eat(): void;
    run(): void;
    swim(): void;
}

class Tucan implements Bird {
    public fly() {}
    public eat() {}
    public run() {}
    public swim() {}
}

class Hummingbird implements Bird {
    public fly() {}
    public eat() {}
    public run() {}
    public swim() {}
}

class Ostich implements Bird {
    public fly() {
        throw new Error('Ostich can not fly.');
    }
    public eat() {}
    public run() {}
    public swim() {}
}

class Penguin implements Bird {
    public fly() {
        throw new Error('Penguin can not fly.');
    }
    public eat() {}
    public run() {}
    public swim() {}
}