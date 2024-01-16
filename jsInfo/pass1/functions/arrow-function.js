let group = {
  title: "Our Group",
  students: ["John", "Alfred", "Soosan"],
  showlist() {
    this.students.forEach(
      student => console.log((this.title + ':' + student))
    );
  }
};
group.showlist()

//does'nt have arguments
function defer(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}
function sayHi(who) {
  console.log(('Hello, ' + who));
}
let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("John");

