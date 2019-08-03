describe("ShoppingList", function() {
  it("should be a function", function() {
    expect(ShoppingList).to.be.a("function");
  });

  //  ) List should be an array
  it("should be an array", function() {
    let shoppingList = new ShoppingList();
    shoppingList.should.be.an("array");
  });

  // ) should be empty by default
  it("should be empty by default", function() {
    let shoppingList = new ShoppingList();
    shoppingList.length.should.be(0);
  });
});

describe(".addItem", function() {
  // ) addItem should be a function
  it("should be a function", function() {
    expect(ShoppingList.addItem).to.be.a("function");
  });

  // ) should add existing items to a list
  it("should add an existing item", function() {
    let apples = new ShoppingListItem("Apples", "Red delicious");
    let shoppingList = new ShoppingList();
    shoppingList.push(apples);
    expect(shoppingList).to.equal([
      { name: "Apples", description: "Red delicious" }
    ]);
  });

  // ) should throw an error when attempting to add anything that is not an existing Item
  it("should throw an error when attempting to add anything that is not an existing item", function() {
    expect(function() {
      let shoppingList = new ShoppingList();
      let shoppingList2 = new ShoppingList();
      shoppingList.push(shoppingList2);
    }).to.throw("Argument is not a ShoppingListItem");
  });
});

describe(".removeItem", function() {
  // ) removeItem should be a function
  it("should be a function", function() {
    expect(ShoppingList.removeItem).to.be.a("function");
  });

  // ) should remove existing items from a list
  it("should remove existing items from a list", function() {
    let apples = new ShoppingListItem("Apples", "Red delicious");
    let oranges = new ShoppingListItem("Oranges", "Cuties");
    let shoppingList = new ShoppingList();
    shoppingList.push(apples);
    shoppingList.push(oranges);
    shoppingList.removeItem(apples);
    expect(shoppingList).to.equal([{ name: "Oranges", description: "Cuties" }]);
  });

  // ) should remove the last item if no parameter defined
  it("should remove last item from array when item is undefined", function() {
    let apples = new ShoppingListItem("Apples", "Red delicious");
    let oranges = new ShoppingListItem("Oranges", "Cuties");
    let shoppingList = new ShoppingList();
    shoppingList.push(apples);
    shoppingList.push(oranges);
    shoppingList.removeItem();
    expect(shoppingList).to.equal([
      { name: "Apples", description: "Red delicious" }
    ]);
  });

  // ) should throw an error when attempting to remove anything that is not an existing item
  it("should throw an error when attempting to remove anything that is not an existing item", function() {
    expect(function() {
      let apples = new ShoppingListItem("Apples", "Red delicious");
      let shoppingList = new ShoppingList();
      shoppingList.push(apples);
      shoppingList.removeItem(oranges);
    }).to.throw("Argument is not a ShoppingListItem");
  });

  // ) should throw an error when attempting to remove anything that is not on the list
  it("should throw an error when attempting to remove anything that is not on the list", function() {
    expect(function() {
      let apples = new ShoppingListItem("Apples", "Red delicious");
      let oranges = new ShoppingListItem("Oranges", "Cuties");
      let shoppingList = new ShoppingList();
      shoppingList.push(apples);
      shoppingList.removeItem(oranges);
    }).to.throw("Argument is not on the list");
  });
});

describe(".render", function() {
  // ) render should be a function
  it("should be a function", function() {
    expect(ShoppingList.render).to.be.a("function");
  });

  // it should render the list as a string
  it("should render this HTML string", function() {
    let apples = new ShoppingListItem("Apples", "Red delicious");
    let oranges = new ShoppingListItem("Oranges", "Cuties");
    let shoppingList = new ShoppingList();
    shoppingList.push(apples);
    shoppingList.push(oranges);
    shoppingList.render().should.be.a("string");
  });

  // ) should render a list with checked and unchecked items (and properties) as an HTML string
  it("should render a list with checked and unchecked items and properties as an HTML string", function() {
    let apples = new ShoppingListItem("Apples", "Red delicious");
    let oranges = new ShoppingListItem("Oranges", "Cuties");
    let shoppingList = new ShoppingList();
    shoppingList.push(apples);
    shoppingList.push(oranges);
    shoppingList.check(apples);
    shoppingList
      .render()
      .should.equal(
        "<ul><li class='completed_true'><span>Apples</span> <span>Red delicious</span></li><li class='completed_false'><span>Oranges</span> <span>Cuties</span></li></ul>"
      );
  });
});
