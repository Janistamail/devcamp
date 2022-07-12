const input = [88, 34, 27];
let n = 1;
let tree = {
  head: {
    value: 12,
    left: null,
    right: {
      value: 99,
      left: {
        value: 37,
        left: null,
        right: null,
      },
      right: null,
    },
  },
};

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BTS {
  constructor() {
    this.root = null;
  }
  add(data) {
    if (this.root === null) {
      this.root = tree.head;
    } else {
      let node = this.root;
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else {
            return searchTree(node.left);
          }
        } else {
          if (data > node.data) {
            if (node.right === null) {
              return (node.right = new Node(data));
            }
          } else {
            return searchTree(node.right);
          }
        }
      };
    }
  }
}

let bsTree = new BTS();

for (let i = 0; i < input.length; i++) {
  bsTree.add(input[i]);
}

console.log(bsTree);
