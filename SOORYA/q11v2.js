function smallInteger(num) {
    //    if(num <= 0){
    //     return 0
    // let int;
    // int = int > 0
    // for (let i = 1; i <= num; i++) {
    //     console.log(i)
    //     if(int % i === 0) {
    //         console.log(int)
    //         // return int
    //     }
    // }


    for(let i = 1; i <= num; i++) {
        for(let int = 1 ; (int % i === 0) ; int++){
            if(int % i === 0) {
                int
                // console.log(i)
            } 
        }
        return int
    }
}
console.log(smallInteger(1))
function tcs() {
    let tcs = [
        {
            "num": 1,
            "exp": 1
        },
        {
            "x": 4,
            "exp": 12
        },
        {
            "x": 2,
            "exp": 2
        }
    ]
    for (let i = 0; i < tcs.length; i++) {
        let Result = smallInteger(tcs[i].x);
        console.log(Result)
        if (Result === tcs[i].exp) {
            console.log("Test case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}
tcs()