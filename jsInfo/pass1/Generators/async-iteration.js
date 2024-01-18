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
        };
    }
};

for (let value of range) {
    console.log((value));
}


//Async iterables
let ranges = {
    from: 1,
    to: 5,
    [Symbol.asyncIterator]() {
        return {
            current: this.from,
            last: this.to,
            async next() {
                await new Promise(resolve => setTimeout(resolve, 1000));
                if (this.current <= this.last) {
                    return { done: false, value: this.current++ };
                } else {
                    return { done: true };
                }
            }
        };
    }
};
(async () => {
    for await (let value of range) {
        console.log(value)
    }
})()


//Recall generators
function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) {
        yield i
    }
}
for (let value of generateSequence(1, 5)) {
    console.log(value)
}


//Async generators
async function* generateSequences(start, end) {
    for (let i = start; i <= end; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        yield i;
    }
}
(async () => {
    let generator = generateSequences(6, 10);
    for await (let value of generator) {
        console.log(value)
    }
})()


//Async iterable range
let Range = {
    from: 22,
    to: 28,
    async *[Symbol.asyncIterator]() {
        for (let value = this.from; value <= this.to; value++) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            yield value;
        }
    }
};
(async () => {
    for await (let value of Range) {
        console.log(value);
    }
})();

