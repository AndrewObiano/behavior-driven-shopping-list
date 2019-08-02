class ShoppingListItem {
  constructor(name, description) {
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

  render() {}
}

// let ShoppingListItem = new ShoppingListItem();
