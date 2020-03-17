"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const x2_1 = require("./x2");
const express = __importStar(require("express"));
const app = express.default();
app.get('/', (req, res) => {
    res.send('Dieeeeeeee');
});
app.listen(3000, () => console.log('started'));
x2_1.show('123');
