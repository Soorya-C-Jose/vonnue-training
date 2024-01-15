/**************Recursion****************/
//iterative thinking
// function pow(x, n) {
//     let result = 1;
//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }
// console.log(pow(2, 3));

//recursive thinking
function pow(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1)
    }
}
console.log(pow(2, 3))



//Recursive traversals
let company = {
    sales: [{ name: 'Ann', salary: 1000 },
    { name: 'Alice', salary: 1600 }],
    development: {
        sites: [{ name: 'peter', salary: 2000 },
        { name: 'Alex', salary: 1800 }],
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};
function sumSalaries(department) {
    if (Array.isArray(department)) {
        return department.reduce((prev, current) => prev + current.salary, 0)
    } else {
        let sum = 0;
        for (let subdep of Object.values(department)) {
            sum += sumSalaries(subdep);
        }
        return sum;
    }
}
console.log(sumSalaries(company))


