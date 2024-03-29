//static
class User {
    static staticMethod() {
        console.log(this === User)
    }
}
User.staticMethod();


class Article {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }
    static compare(articleA, articleB) {
        return articleA.date - articleB.date;
    }
}
let articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1))
];
articles.sort(Article.compare);
console.log(articles[0].title);


class article {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }
    static createTodays() {
        return new this("Today's digest", new Date());
    }
}
let Article2 = article.createTodays()
console.log(Article2.title)


//static properties
class article1 {
    static publisher = "Ilya Kantor";
}
console.log(article1.publisher)


//inheritence of static ppty and methods
class Animal {
    static planet = "Earth";
    constructor(name, speed) {
        this.speed = speed;
        this.name = name;
    }
    run(speed = 0) {
        this.speed += speed;
        console.log(`${this.name} runs with speed ${this.speed}`);
    }
    static compare(animalA, animalB) {
        return animalA.speed - animalB.speed;
    }
}
class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} hides!`);
    }
}
let rabbits = [
    new Rabbit("white Rabbit",10),
    new Rabbit("Black rabbit", 5)
];
rabbits.sort(Rabbit.compare);
rabbits[0].run();
console.log(Rabbit.planet)
