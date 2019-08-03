describe("ShoppingList", function() {
  it("should be a function", function() {
    expect(ShoppingList).to.be.a("function");
  });

  it("should be an empty array", function() {
    let shoppingList = new ShoppingList();
    shoppingList.should.be.an("array");
    shoppingList.length.should.be(0);
  });
});

describe(".addItem", function() {
  it("should add an existing item", function() {
    let apples = new ShoppingListItem("Apples", "Red delicious");
    let shoppingList = new ShoppingList();
    shoppingList.push(apples);
    expect(shoppingList).to.equal([
      { name: "Apples", description: "Red delicious" }
    ]);
  });

  it("should error when attempting to add a nonexistent item", function() {
    let shoppingList = new ShoppingList();
    shoppingList.push(apples);
    expect(shoppingList[0]).to.equal(undefined);
    shoppingList.addItem(apples).should.equal("Error");
  });

  it("should add an existing item more than once", function() {
    let apples = new ShoppingListItem("Apples", "Red delicious");
    let shoppingList = new ShoppingList();
    shoppingList.push(apples);
    shoppingList.push(apples);
    expect(shoppingList).to.equal([
      { name: "Apples", description: "Red delicious" },
      { name: "Apples", description: "Red delicious" }
    ]);
  });
});

describe(".removeItem", function() {
  it("should remove item from array", function() {
    let apples = new ShoppingListItem("Apples", "Red delicious");
    let oranges = new ShoppingListItem("Oranges", "Cuties");
    let shoppingList = new ShoppingList();
    shoppingList.push(apples);
    shoppingList.push(oranges);
    shoppingList.removeItem(apples);
    expect(shoppingList).to.equal([{ name: "Oranges", description: "Cuties" }]);
  });

  // it("should do nothing when array is empty", function() {
  //   let shoppingList = new ShoppingList();
  //   shoppingList.removeItem(apples);

  // });

  it("should remove only one item", function() {
    let apples = new ShoppingListItem("Apples", "Red delicious");
    let shoppingList = new ShoppingList();
    shoppingList.push(apples);
    shoppingList.push(apples);
    shoppingList.removeItem(apples);
    expect(shoppingList).to.equal([
      { name: "Apples", description: "Red delicious" }
    ]);
  });

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

  it("should throw an error when item does not exist", function() {
    let apples = new ShoppingListItem("Apples", "Red delicious");
    let shoppingList = new ShoppingList();
    shoppingList.push(apples);
    shoppingList.removeItem(oranges).should.equal("Error");
  });
});

describe(".render", function() {
  it("should render this HTML string", function() {
    let apples = new ShoppingListItem("Apples", "Red delicious");
    let oranges = new ShoppingListItem("Oranges", "Cuties");
    let shoppingList = new ShoppingList();
    shoppingList.push(apples);
    shoppingList.push(oranges);
    shoppingList
      .render()
      .should.equal(
        "<ul><li class='completed_false'><span>Apples</span> <span>Red delicious</span></li><li class='completed_false'><span>Oranges</span> <span>Cuties</span></li></ul>"
      );
  });

  it("should render list with checked and unchecked items", function() {
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

/*
class ShoppingList {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        if (item exists) {
            items.push(item);
        } else {
            return "Error";
        }        
    }

    removeItem(item) {
        if (array is empty) {
            (do nothing)
        }
        if (item is undefined) {
            (remove last item from array)
        }
        if (item exists) {
            (remove item from array)
        } else {
            return Error;
        }
    }

    render() {
        (returns a UL of all items in the array)
    }
}
*/
