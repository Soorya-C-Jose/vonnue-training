/***********Async functions************/
async function f() {
    return 1;
}
f().then(console.log)

async function f() {
    return Promise.resolve(1);
}
f().then(console.log)


async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return 10;
}
function f() {
    wait().then(result => console.log(result));
}
f()

/*********Await function*********/
function resolveAfter2Seconds(x){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(x);
        },2000);
    });
}
async function f1() {
    const x = await resolveAfter2Seconds(10);
    console.log(x)
}
f1()

const getData = async () => {
    let y = await "Hello World";
    console.log(y);
}
console.log(1);
getData();
console.log(2)



async function loadJson(url) {
    let response = await fetch(url);
    if(response.status == 200) {
        let json = await response.json();
        return json;
    }
    throw new Error(response.status);
}
loadJson('https://javascript.info/no-such-user.json')
.catch(console.log)