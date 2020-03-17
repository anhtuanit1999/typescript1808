interface HasName {
    name: string;
}

class Animal implements HasName {
    name!: string | 'name';
    private _age!: number;
    constructor(name: string, age: number) {
        this.name = name;
        this._age = age;
    }
    get age(){
        return this._age;
    }

}

function callSomething(obj: HasName) {
    return `This is ${obj.name}`
}

const conBo = new Animal('Cow', 10);

console.log(callSomething(conBo));

conBo.name = 'Beef';
console.log(conBo.age);

