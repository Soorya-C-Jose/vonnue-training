/************Object.values***********/
function sumSalaries(salaries) {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }
    return sum;
}
let salaries = {
    "john": 100,
    "pete": 300,
    "mary": 550
};
console.log(sumSalaries(salaries))