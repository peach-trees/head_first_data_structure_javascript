class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }

  string() {
    return `[value:${this.value}]`
  }
}

exports.Node = Node