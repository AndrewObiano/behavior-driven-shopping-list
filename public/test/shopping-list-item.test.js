describe("ShoppingListItem", function() {
  it("should be a class", function() {
    expect(ShoppingListItem).to.be.a("class");
  });

  it("should have a property named 'name'", function() {
    expect(ShoppingListItem).to.have.ownProperty("name");
  });

  it("should have a property named 'description'", function() {
    expect(ShoppingListItem).to.have.ownProperty("description");
  });

  it("should have a property named 'isDone'", function() {
    expect(ShoppingListItem).to.have.ownProperty("isDone");
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
