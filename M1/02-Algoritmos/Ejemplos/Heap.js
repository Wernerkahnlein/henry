function Node(data) {
  this.data = data;
  this.root = null;
  this.left = null;
  this.right = null;
}

Node.prototype.childs = function childs() {
  if (!this.left && !this.right) {
    return 0;
  }
  if (this.left && this.right) {
    return this.left.childs() + this.right.childs() + 2;
  } else if (this.right) {
    return this.right.childs() + 1;
  }
  return this.left.childs() + 1;
};

Node.prototype.isComplete = function isComplete() {
  if (this.left && this.right) {
    return (this.left.childs() - this.right.childs()) === 0;
  } else if (!this.left && !this.right) {
    return true;
  }
  return 0;
};

Node.prototype.makeHeap = function makeHeap() {
  let aux;
  if (this.root == null) return;
  if (this.root.data > this.data) {
    aux = this.data;
    this.data = this.root.data;
    this.root.data = aux;
  }
  this.root.makeHeap();
};

Node.prototype.add = function add(v) {
  if (this.left == null) {
    this.left = new Node(v);
    this.left.root = this;
    this.left.makeHeap();
  } else if (this.right == null) {
    this.right = new Node(v);
    this.right.root = this;
    this.right.makeHeap();
  } else if (!this.left.isComplete()) {
    this.left.add(v);
  } else if (!this.right.isComplete() || this.right.childs() < this.left.childs()) {
    this.right.add(v);
  } else {
    this.left.add(v);
  }
  return this;
};

Node.prototype.search = function search(v) {
  if (this.data === v) {
    return this;
  }
  if (this.left && this.right) {
    return this.left.search(v) || this.right.search(v);
  } else if (this.left) {
    return this.left.search(v);
  } else if (this.right) {
    return this.right.search(v);
  }
  return undefined;
};

Node.prototype.delete = function d(v) {
  let next;
  let node = this.search(v);
  if (!this.left && !this.right) {
    this.data = null;
    return this;
  }
  let current = node;
  while (current.left != null || current.right != null) {
    if (current.right) {
      next = 'right';
      current = current.right;
    } else if (current.left) {
      next = 'left';
      current = current.left;
    }
  }
  node.data = current.data;
  current.root[next] = null;
  while (node.left || node.right) {
    if (node.left && node.right) {
      if (node.left.data <= node.right.data) {
        node.left.makeHeap();
        node = node.left;
      } else {
        node.right.makeHeap();
        node = node.right;
      }
    } else if (node.left) {
      node.left.makeHeap();
      node = node.left;
    } else if (node.right) {
      node.right.makeHeap();
      node = node.right;
    }
  }
  return this;
};

Node.prototype.pop = function pop() {
  const aux = this.data;
  this.delete(this.data);
  return aux;
};

Node.prototype.isEmpty = function isEmpty() {
  if (this.data == null) return true;
  return false;
};

module.exports = Node;

