describe("ShoppingList", function() {
  it("should be a class", function() {
    expect(ShoppingList).to.be.a("function");
  });

  it("should have a name", function() {
    let shoppingList = new ShoppingList("List");
    shoppingList.name.should.equal("List");
  });
});

/*

class ShoppingList {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        if (item === existing ShoppingListItem) {
items.push(item);
        }
        
    }
}

*/
