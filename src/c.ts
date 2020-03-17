// function getTotalLength(a: number[], b: number[]): number {
//     return a.length + b.length;
// }

// function getTotalStringLength(a: string, b: string): number {
//     return a.length + b.length;
// }

interface HaveLength {
    length: number
}

function getTotal(a: HaveLength, b: HaveLength): number {
    return a.length + b.length;
}

const a = [1, 2, 3];
const b = [3, 4, 5, 6, 7];

console.log(getTotal(a, b));
console.log(getTotal('abcdfsf', 'thggg'));

