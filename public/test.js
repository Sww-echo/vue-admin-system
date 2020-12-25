class Dog {
  constructor(msg) {
    this.msg = msg;
  }
  sayHi() {
    console.log("hi");
  }
}

class Cat extends Dog {
  constructor(msg, test) {
    super(msg);
    this.test = test;
  }
  sayMiao() {
    console.log("miao");
  }
}
var cat = new Cat();
cat.sayHi();
