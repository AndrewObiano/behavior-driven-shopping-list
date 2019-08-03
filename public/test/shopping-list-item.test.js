describe("ShoppingListItem", function() {
  // it("should be a class", function() {
  //   expect(ShoppingListItem).to.be.a("function");
  // });

  it("should be an object", function() {
    let apples = new ShoppingListItem("Apples", "Red delicious");
    apples.should.be.an("object");
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

  it("should accept strings", function() {
    let apples = new ShoppingListItem("Apples", "Red delicious");
    apples.name.should.equal("Apples");
    apples.description.should.equal("Red delicious");
  });

  it("should accept duplicate input", function() {
    let apples = new ShoppingListItem("Apples", "Red delicious");
    let apples2 = new ShoppingListItem("Apples", "Red delicious");
    apples2.name.should.equal("Apples");
    apples2.description.should.equal("Red delicious");
  });

  it("should accept empty strings", function() {
    let apples = new ShoppingListItem("", "");
    apples.name.should.equal("");
    apples.description.should.equal("");
  });

  it("should accept numbers", function() {
    let apples = new ShoppingListItem(1, 2);
    apples.name.should.equal(1);
    apples.description.should.equal(2);
  });

  it("should accept arrays", function() {
    let apples = new ShoppingListItem(
      ["Apples", "Oranges", "Bananas"],
      ["Red delicious", "Navel", "Chiquita"]
    );
    apples.name.should.equal(["Apples", "Oranges", "Bananas"]);
    apples.description.should.equal(["Red delicious", "Navel", "Chiquita"]);
  });

  it("should accept objects", function() {
    let apples = new ShoppingListItem(
      { name: "Apples", name: "Oranges", name: "Bananas" },
      {
        description: "Red delicious",
        description: "Navel",
        description: "Chiquita"
      }
    );
    apples.name.should.equal({
      name: "Apples"
      // name: "Oranges",
      // name: "Bananas"
    });
    apples.description.should.equal({
      description: "Red delicious"
      // description: "Navel",
      // description: "Chiquita"
    });
    apples.isDone.should.equal({
      isDone: false
    });
  });

  it("should accept null values", function() {
    let apples = new ShoppingListItem(null, null);
    apples.name.should.equal(null);
    apples.description.should.equal(null);
  });

  it("should accept undefined values", function() {
    let apples = new ShoppingListItem(undefined, undefined);
    apples.name.should.equal(undefined);
    apples.description.should.equal(undefined);
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
      "<li class='completed_false'><span>Apples</span> <span>Red delicious</span></li>"
    );
  });
});
