let student = [
    {
        name: "Ashlin",
        subject:
            [
                { name: "English", score: 89 },
                { name: "Mathematics", score: 46 },
                { name: "Science", score: 67 },
                { name: "Information Technology", score: 91 }
            ],
        totalMarks: 293
    },
    {
        name: "Rachel",
        subject:
            [
                { name: "English", score: 70 },
                { name: "Mathematics", score: 78 },
                { name: "Science", score: 90 },
                { name: "Information Technlogy", score: 62 }
            ],
        totalMarks: 300
    },
    {
        name: "Sally",
        subject:
            [
                { name: "English", score: 50 },
                { name: "Mathematics", score: 80 },
                { name: "Science", score: 70 },
                { name: "Information Technology", score: 56 }
            ],
        totalMarks: 256
    },
    {
        name: "George",
        subject:
            [
                { name: "English", score: 90 },
                { name: "Mathematics", score: 95 },
                { name: "Science", score: 80 },
                { name: "Information Technology", score: 100 }
            ],
        totalMarks: 365
    },
    {
        name : "Ann",
        subject: 
        [
            {name: "English", score: 100},
            {name : "Mathematics", sccore: 80},
            {name: "Science", score: 90},
            {name : "Information Technology", score: 60},
        ],
        totalMarks: 330
    }
]


function highestMark() {
    let maxScore = 0;
    let topper;
    for (let i = 0; i < student.length; i++) {
        if (student[i].totalMarks > 400 && student[i].totalMarks < 0) {
            return "invalid"
        }
        if (maxScore < student[i].totalMarks) {
            maxScore = Math.max(student[i].totalMarks)
            if (maxScore) {
                topper = (`${student[i].name}, ${maxScore}`)
            }
        }
    }
    return topper;
}

// console.log(highestMark())



///Test Case
function TestCase() {
    let TestCase = [
        {
            x: student,
            exp: 'George, 365'
        }
    ]

    for (let i = 0; i < TestCase.length; i++) {
        let result = highestMark(TestCase[i].x);
        if (TestCase[i].exp === result) {
            console.log("Test Case " + [i + 1] + " is passed")
        }
        else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}

TestCase()

