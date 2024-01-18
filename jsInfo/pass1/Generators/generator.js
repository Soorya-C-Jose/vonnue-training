//Generator functions
function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}
let generator = generateSequence();
let one = generator.next();
console.log(JSON.stringify(one))
let two = generator.next();
console.log(JSON.stringify(two))
let three = generator.next();
console.log((JSON.stringify(three)));
let four = generator.next();
console.log(JSON.stringify(four))


//generaters are iterable
function* generaters() {
    yield 1;
    yield 2;
    yield 3;
}
let generators = generaters();
for (let value of generators) {
    console.log(value);
}

function* generateSeq() {
    yield 1;
    yield 2;
    yield 3;
}
let sequence = [0, ...generateSeq()];
console.log(sequence)


//generators for iterables
let range = {
    from: 1,
    to: 5,
    [Symbol.iterator]() {
        return {
            current: this.from,
            last: this.to,
            next() {
                if (this.current <= this.last) {
                    return { done: false, value: this.current++ };
                } else {
                    return { done: true };
                }
            }
        }
    }
}
console.log([...range])

let ranges = {
    from: 1,
    to: 5,
    *[Symbol.iterator]() {
        for (let value = this.from; value <= this.to; value++) {
            yield value;
        }
    }
};
console.log([...range])


//generator composition
function* generates(start, end) {
    for (let i = start; i <= end; i++) yield i;
}
function* generaterPasswordCodes() {
    yield* generates(48, 57);
    yield* generates(65, 90);
    yield* generates(97, 122);
}
let str = '';
for (let code of generaterPasswordCodes()) {
    str += String.fromCharCode(code);
}
console.log(str);


//yield
function* gen() {
    let result = yield "2 + 2 = ?";
    console.log(result)
}
let Generator = gen();
let question = Generator.next().value;
Generator.next(4);


function* Gen() {
    let ask1 = yield "2+2 = ?";
    console.log(ask1);
    let ask2 = yield "3 * 3 = ?"
    console.log(ask2);
}
let Generators = Gen();
console.log(Generators.next().value);
console.log(Generators.next(4).value);
console.log(Generators.next(9).value);


//generator throw
            // function* generate() {
            //     try {
            //         let result = yield "2+2 = ?";
            //         console.log("The execution does not reachhere, because the exception is thrown above");
            //     } catch (e) {
            //         console.log(e);
            //     }
            // }
            // let generate1 = gen();
            // let question1 = generate1.next().value;
            // generate1.throw(new Error("The answer is not found in my database"))


//generator return 
function* gen1() {
    yield 1;
    yield 2;
    yield 3;
}
const g = gen1();
console.log(g.next())
console.log(g.return('foo'));
console.log(g.next())


//psudo random generator
function* psuedoRandom(seed) {
    let value = seed;
    while(true) {
        value = value * 16807 % 2147483647;
        yield value;
    }
};
let generator1 = psuedoRandom(1);
console.log(generator1.next().value);
console.log(generator1.next().value);
console.log(generator1.next().value)





























