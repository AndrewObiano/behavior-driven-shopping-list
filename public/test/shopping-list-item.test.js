describe("ShoppingListItem", function() {
  it("should be a class", function() {
    expect(ShoppingListItem).to.be.a("class");
  });

  it("should have a property name", function() {
    expect(ShoppingListItem).to.have.ownProperty("name");
  });
});
