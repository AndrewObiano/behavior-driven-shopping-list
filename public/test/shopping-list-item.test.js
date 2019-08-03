describe("ShoppingListItem", function() {
  /*
  Test cases:
  Need ~42 tests

  Item:
  ) Item should be an object
     ) should have a name
      ) Name should be a string
        ) should not be a boolean
        ) should not be an array
        ) should not be an object
        ) should not be null
        ) should not be undefined
        ) should not be a number
        ) should not be an empty string
    ) should have a description
      ) Description should be a string
        ) should not be a boolean
        ) should not be an array
        ) should not be an object
        ) should not be null
        ) should not be undefined
        ) should not be a number
        ) may be an empty string
    ) should have an isDone property
      ) should be a boolean
      ) should be false by default
  ) Check should be a function
    ) should set isDone to true on an item in a list
    ) should throw an error if item is not in a list
  ) Uncheck should be a function
    ) should set isDone to false on an item in a list
    ) should throw an error if item is not in a list
  ) Render should be a function
    ) should render a string
    ) should render an item and its properties as an HTML string

  List:
  ) List should be an array
    ) should be empty by default
  ) addItem should be a function
    ) should add existing items to a list
    ) should throw an error when attempting to add anything that is not an existing Item
  ) removeItem should be a function
    ) should remove existing items from a list
    ) should remove the last item if no parameter defined
    ) should throw an error when attempting to remove anything that is not an existing item
    ) should throw an error when attempting to remove anything that is not on the list
  ) render should be a function
    ) should render a list with checked and unchecked items (and properties) as an HTML string
  ) User should be able to create multiple lists
  */

  //   ) Item should be an object
  it("should be an object", function() {
    let apples = new ShoppingListItem("Apples", "Red delicious");
    apples.should.be.an("object");
  });

  //     ) should have a name
  it("should have a name", function() {
    let apples = new ShoppingListItem("Apples", "Red delicious");
    apples.name.should.equal("Apples");
  });

  // ) Name should be a string
  it("should accept strings", function() {
    let apples = new ShoppingListItem("Apples", "Red delicious");
    apples.name.should.equal("Apples");
  });

  // ) should not be a boolean
  it("should not accept booleans", function() {
    expect(function() {
      new ShoppingListItem(true, "Red delicious");
    }).to.throw("Argument should be a string.");
  });

  // ) should not be an array
  it("should not accept arrays", function() {
    expect(function() {
      new ShoppingListItem(["Apples"], "Red delicious");
    }).to.throw("Argument should be a string.");
  });

  // ) should not be an object
  it("should not accept objects", function() {
    expect(function() {
      new ShoppingListItem({ name: "Apples" }, "Red delicious");
    }).to.throw("Argument should be a string.");
  });

  // ) should not be null
  it("should not accept null values", function() {
    expect(function() {
      new ShoppingListItem(null, "Red delicious");
    }).to.throw("Argument should be a string.");
  });

  // ) should not be undefined
  it("should not accept undefined values", function() {
    expect(function() {
      new ShoppingListItem(undefined, "Red delicious");
    }).to.throw("Argument should be a string.");
  });

  // ) should not be a number
  it("should not accept numbers", function() {
    expect(function() {
      new ShoppingListItem(1, "Red delicious");
    }).to.throw("Argument should be a string.");
  });

  // ) should not be an empty string
  it("should not accept empty strings", function() {
    expect(function() {
      new ShoppingListItem("", "Red delicious");
    }).to.throw("Argument should be a string.");
  });

  // ) should have a description
  it("should have a description", function() {
    let apples = new ShoppingListItem("Apples", "Red delicious");
    apples.description.should.equal("Red delicious");
  });

  // ) Description should be a string
  it("should accept strings", function() {
    let apples = new ShoppingListItem("Apples", "Red delicious");
    apples.description.should.equal("Red delicious");
  });

  //   ) should not be a boolean
  it("should not accept booleans", function() {
    expect(function() {
      new ShoppingListItem("Apples", true);
    }).to.throw("Argument should be a string.");
  });

  //   ) should not be an array
  it("should not accept arrays", function() {
    expect(function() {
      new ShoppingListItem("Apples", ["Red delicious"]);
    }).to.throw("Argument should be a string.");
  });

  //   ) should not be an object
  it("should not accept objects", function() {
    expect(function() {
      new ShoppingListItem("Apples", { description: "Red delicious" });
    }).to.throw("Argument should be a string.");
  });

  //   ) should not be null
  it("should not accept null values", function() {
    expect(function() {
      new ShoppingListItem("Apples", null);
    }).to.throw("Argument should be a string.");
  });

  //   ) should not be undefined
  it("should not accept undefined values", function() {
    expect(function() {
      new ShoppingListItem("Apples", undefined);
    }).to.throw("Argument should be a string.");
  });

  //   ) should not be a number
  it("should not accept numbers", function() {
    expect(function() {
      new ShoppingListItem("Apples", 1);
    }).to.throw("Argument should be a string.");
  });

  //   ) should not be an empty string
  it("should not accept empty strings", function() {
    expect(function() {
      new ShoppingListItem("Apples", "");
    }).to.throw("Argument should be a string.");
  });

  // ) should have an isDone property
  it("should have a property named 'isDone'", function() {
    let apples = new ShoppingListItem("Apples", "Red delicious");
    apples.isDone.should.equal(false);
  });

  // ) should be a boolean
  it("should should be a boolean", function() {
    let apples = new ShoppingListItem("Apples", "Red delicious");
    apples.isDone.should.equal(false);
  });

  // ) should be false by default
  it("should be false by default", function() {
    let apples = new ShoppingListItem("Apples", "Red delicious");
    apples.isDone.should.equal(false);
  });

  // ) Check should be a function
  describe(".check", function() {
    it("should be a function", function() {
      let apples = new ShoppingListItem("Apples", "Red delicious");
      expect(apples.check).to.be.a("function");
    });

    // ) should set isDone to true on an item in a list
    it("should set isDone to true", function() {
      let apples = new ShoppingListItem("Apples", "Red delicious");
      let shoppingList = new ShoppingList();
      shoppingList.push(apples);
      apples.check();
      expect(apples.isDone).to.be(true);
    });

    //  ) should throw an error if item is not in a list
    it("should throw an error if item is not in a list", function() {
      expect(function() {
        let apples = new ShoppingListItem("Apples", "Red delicious");
        apples.check();
      }).to.throw("Item must be in a list.");
    });
  });

  // ) Uncheck should be a function
  describe(".uncheck", function() {
    it("should be a function", function() {
      let apples = new ShoppingListItem("Apples", "Red delicious");
      expect(apples.uncheck).to.be.a("function");
    });

    // ) should set isDone to false on an item in a list
    it("should set isDone to false", function() {
      let apples = new ShoppingListItem("Apples", "Red delicious");
      let shoppingList = new ShoppingList();
      shoppingList.push(apples);
      apples.uncheck();
      expect(apples.isDone).to.be(false);
    });

    // ) should throw an error if item is not in a list
    it("should throw an error if item is not in a list", function() {
      expect(function() {
        let apples = new ShoppingListItem("Apples", "Red delicious");
        apples.uncheck();
      }).to.throw("Item must be in a list.");
    });

    it("should render this HTML string", function() {
      let apples = new ShoppingListItem("Apples", "Red delicious");
      expect(apples.render()).should.be(
        "<li class='completed_true'><span>Apples</span> <span>Red delicious.</span></li>"
      );
    });
  });
});

// ) Render should be a function
describe(".render", function() {
  it("should be a function", function() {
    let apples = new ShoppingListItem("Apples", "Red delicious");
    expect(apples.render).to.be.a("function");
  });

  // ) should render an item and its properties as an HTML string
  it("should be a string", function() {
    let apples = new ShoppingListItem("Apples", "Red delicious");
    expect(apples.render()).should.be.a("string");
  });

  it("should render the item name and description as an HTML list item", function() {
    let apples = new ShoppingListItem("Apples", "Red delicious");
    expect(apples.render()).should.be(
      "<li class='completed_false'><span>Apples</span> <span>Red delicious</span></li>"
    );
  });
});
