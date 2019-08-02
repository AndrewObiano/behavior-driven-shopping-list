describe("ShoppingListItem", function() {
  it("should be a class", function() {
    expect(ShoppingListItem).to.be.a("function");
  });

  it("should have a name", function() {
    let apples = new ShoppingListItem("Apples", "Red delicious");
    apples.name.should.equal("Apples");
  });

  it("should have a description", function() {
    let apples = new ShoppingListItem("Apples", "Red delicious");
    apples.description.should.equal("Red delicious");
  });

  it("should have a property named 'isDone'", function() {
    let apples = new ShoppingListItem("Apples", "Red delicious");
    apples.isDone.should.equal(false);
  });
});

describe(".check", function() {
  it("should be a function", function() {
    let apples = new ShoppingListItem("Apples", "Red delicious");
    expect(apples.isDone).to.be.a("function");
  });

  it("should return true", function() {
    let apples = new ShoppingListItem("Apples", "Red delicious");
    expect(apples.isDone).to.be(true);
  });

  it("should render this HTML string", function() {
    let apples = new ShoppingListItem("Apples", "Red delicious");
    expect(apples.render()).should.be(
      "<li class='completed_true'><span>Apples</span> <span>Red delicious.</span></li>"
    );
  });
});

describe(".uncheck", function() {
  it("should be a function", function() {
    let apples = new ShoppingListItem("Apples", "Red delicious");
    expect(apples.isDone).to.be.a("function");
  });

  it("should return false", function() {
    let apples = new ShoppingListItem("Apples", "Red delicious");
    expect(apples.isDone).to.be(false);
  });

  it("should render this HTML string", function() {
    let apples = new ShoppingListItem("Apples", "Red delicious");
    expect(apples.render()).should.be(
      "<li class='completed_false'><span>Apples</span> <span>Red delicious.</span></li>"
    );
  });
});

describe(".render", function() {
  it("should be a function", function() {
    let apples = new ShoppingListItem("Apples", "Red delicious");
    expect(apples.render).to.be.a("function");
  });

  it("should be a string", function() {
    let apples = new ShoppingListItem("Apples", "Red delicious");
    expect(apples.render()).should.be.a("string");
  });

  it("should render this HTML string", function() {
    let apples = new ShoppingListItem("Apples", "Red delicious");
    expect(apples.render()).should.be(
      "<li class='completed_false'><span>Apples</span> <span>Red delicious.</span></li>"
    );
  });
});

/*

ShoppingListItem has a constructor method that accepts 2 arguments, name and description

the constructor method sets the new instances name and description properties using the arguments passed in

class ShoppingListItem {
  constructor (name, description) {
    this.name = name;
    this.description = description;
    this.isDone = isDone;
  }

  check() {
    isDone = true;
  }

  uncheck() {
    isDone = false;
  }

  render() {

  }
}

*/
