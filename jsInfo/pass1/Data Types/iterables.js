//symbol iterator
let range = {
    from: 1,
    to: 5,
    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },
    next() {
        if (this.current <= this.to) {
            return { done: false, valiue: this.current++ };
        } else {
            return { done: true }
        }
    }
};
for (let num of range) {
    //console.log(num)
}

/********alling iterator explicitly********/
let str = "hello";
let iterator = str[Symbol.iterator]();
while (true) {
    let result = iterator.next();
    if(result.done) break;
    console.log(result.value)
}


/*************from()*************/
let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
};
let arr = Array.from(arrayLike);
console.log(arr.pop())

console.log(Array.from('foo'))
console.log(Array.from([1,2,3], (x) => x+x))
 