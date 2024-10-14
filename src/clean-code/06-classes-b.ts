(() => {

    //! Todavía sin aplicar el principio de responsabilidad única.

    type Gender = 'M' | 'F';

    interface PersonProps {
        birthdate: Date;
        gender: Gender;
        name: string;
    }

    class Person {

        public birthdate: Date;
        public gender: Gender;
        public name: string;

        constructor({ name, gender, birthdate }: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProps {
        birthdate: Date;
        email: string;
        gender: Gender;
        name: string;
        role: string;
    }

    class User extends Person {

        public email: string;
        public lastAccess: Date;
        public role: string;

        constructor({ birthdate, email, gender, name, role }: UserProps) {
            super({ name, gender, birthdate });
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }

    interface UserSettingsProps {
        birthdate: Date;
        email: string;
        gender: Gender;
        lastOpenedFolder: string;
        name: string;
        role: string;
        workingDirectory: string;
    }

    class UserSettings extends User {

        public workingDirectory: string;
        public lastOpenedFolder: string;

        constructor({
            workingDirectory,
            lastOpenedFolder,
            email,
            role,
            name,
            gender,
            birthdate
        }: UserSettingsProps) {
            super({ email, role, name, gender, birthdate });
            this.workingDirectory = workingDirectory;
            this.lastOpenedFolder = lastOpenedFolder;
        }
    }

    const userSettings = new UserSettings({
        birthdate: new Date('2000-12-15'),
        email: 'frenovatoa@outlook.com',
        gender: 'M',
        lastOpenedFolder: '/home',
        name: 'Felipe Renovato',
        role: 'Admin',
        workingDirectory: '/usr/home',
    });

    console.log({ userSettings });

})();