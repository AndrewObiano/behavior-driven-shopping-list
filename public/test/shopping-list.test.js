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
    expect(ShoppingList[0]).to.equal(apples);
  });

  it("should error when attempting to add a nonexistent item", function() {
    let shoppingList = new ShoppingList();
    shoppingList.push(apples);
    expect(ShoppingList[0]).to.equal(undefined);
    shoppingList.addItem(apples).should.equal("Error");
  });
});

describe(".removeItem", function() {
  it("should remove item from array", function() {});

  it("should do nothing when array is empty", function() {});

  it("should remove last item from array when item is undefined", function() {});

  it("should throw an error when item does not exist", function() {});
});

describe(".render", function() {
  it("should render this HTML string", function() {});

  it("should ", function() {});
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
