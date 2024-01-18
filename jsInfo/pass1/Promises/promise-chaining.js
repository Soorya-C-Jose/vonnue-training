/**********************Promises chaining********************/
new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000);
}).then(function (result) {
    console.log(result);
    return result * 2;
}).then(function (result) {
    console.log(result);
    return result * 2;
}).then(function (result) {
    console.log(result);
    return result * 2;
})



//returning promises
new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000);
}).then(function (result) {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result * 2), 1000);
    });
}).then(function (result) {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result * 2), 1000);
    })
}).then(function (result) {
    console.log(result)
})

//loadSCript
// loadScript("/article/promise-chaining/one.js")
//     .then(function (script) {
//         return loadScript("/article/promise-chaining/two.js");
//     })
//     .then(function (script) {
//         return loadScript("/article/promise-chaining/three.js")
//     })
//     .then(function (script) {
//         one();
//         two();
//         three();
//     });


//thenable object
class Thenable {
    constructor(num) {
        this.num = num;
    }
    then(resolve, reject) {
        console.log(resolve);
        setTimeout(() => resolve(this.num * 2), 1000);
    }
}
new Promise(resolve => resolve(1))
    .then(result => {
        return new Thenable(result);
    })
    .then(console.log)


//fetch
function loadJson(url) {
    return fetch(url)
        .then(response => response.json());
}
function loadGithubUser(name) {
    return loadJson(`https://api.github.com/users/${name}`);
}
function showAvatar(GithubUser) {
    return new Promise(function (resolve, reject) {
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => {
            img.remove();
            resolve(githubUser);
        }, 3000);
    });
}

loadJson('/article/promise-chaining/user.json')
    .then(user => loadGithubUser(user.name))
    .then(showAvatar)
    .then(githubUser => alert(`Finished showing ${githubUser.name}`));


