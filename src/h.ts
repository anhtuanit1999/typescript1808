enum Huong { Dong, Tay, Nam, Bac };

class Nha {
    huong!: Huong;
}

const n1 = new Nha();

n1.huong = Huong.Bac;
console.log(Huong.Nam);
