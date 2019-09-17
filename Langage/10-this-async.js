class Contact {
  constructor(prenom) {
    this.prenom = prenom;
  }
  hello() {
    console.log(`Hello my name is ${this.prenom}`);
  }
  helloAsync() {
    setTimeout(() => {
      console.log(`Hello my name is ${this.prenom}`);
    }, 1000);
  }
  helloAsyncMethod() {
    setTimeout(() => this.hello(), 1000);
  }
}

const romain = new Contact('Romain');
romain.helloAsyncMethod();