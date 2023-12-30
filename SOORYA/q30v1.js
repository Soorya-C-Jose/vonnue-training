function capitalize(word) {
  length = word.length;
  for(let i = 1; i <= length; i++) {
    if(i = word[0]) {
      console.log(word[0])  
    }
  }
}

//Testcases
function TestCase() {
    let TestCase = [
        {
            "x": "web developer",
            "exp": "Web Developer"
        },
        {
            "x": "full stack",
            "exp": "Full Stack"
        }
    ]

    for(let i = 0; i < TestCase.length; i++) {
        let Result = capitalize(TestCase[i].x);
        if(Result === TestCase[i].exp) {
            console.log("Test Case "+[i+1]+" is passed")
        } else {
            console.log("Test Case "+[i+1]+" is failed")
        }
    }
}
TestCase()