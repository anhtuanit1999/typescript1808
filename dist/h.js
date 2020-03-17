"use strict";
var Huong;
(function (Huong) {
    Huong[Huong["Dong"] = 0] = "Dong";
    Huong[Huong["Tay"] = 1] = "Tay";
    Huong[Huong["Nam"] = 2] = "Nam";
    Huong[Huong["Bac"] = 3] = "Bac";
})(Huong || (Huong = {}));
;
class Nha {
}
const n1 = new Nha();
n1.huong = Huong.Bac;
console.log(Huong.Nam);
