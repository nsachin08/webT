class n_aryNode {
  constructor(value, parent) {
    this._value = value;
    this._parent = parent;
    this._childrens = [];
  }
  setValue(value) {
    this._value = value;
    return this;
  }
  getValue() {
    return this._value;
  }
}

class n_aryList {
  constructor() {
    this._head = null;
    this._cur = null;
    this._count = 0;
  }

  /*
          create root node;
      */

  insertFirst(value) {
    const newNode = new n_aryNode(value, "");
    this._head = newNode;
    this._cur = newNode;
    this._count += 1;
  }

  insertCur(
    value // this will make directory
  ) {
    let m = this._cur._parent ? "/" : "";
    const newNode = new n_aryNode(
      value,
      this._cur._parent + m + this._cur._value
    );
    this._cur._childrens.push(newNode);
    this._count += 1;
    return `${value} Directory succesfully Created.`;
  }

  getls() {
    let nodes = this._cur._childrens;
    let list = [];
    for (let i = 0; i < nodes.length; i++) {
      list.push(nodes[i]._value);
    }
    return list;
  }

  moveonedownCur(
    value // this will move down the directory
  ) {
    console.log(value);
    let flag = this._cur._childrens.find(
      (children) => children._value === value
    );
    if (flag === undefined) {
      return `${value} folder Not Found.`;
    } else {
      this._cur = flag;
      return `Moved to ${value} folder successfuly.`;
    }
  }

  moveoneupCur() {
    // this will move up the directory
    let traverse = this._cur._parent.split("/");
    var iter = this._head;
    let done = true;
    for (let i = 1; i < traverse.length; i++) {
      let child = iter._childrens.find(
        (children) => children._value === traverse[i]
      );
      if (child === undefined) {
        done = false;
        break;
      } else {
        iter = child;
      }
    }
    if (done) {
      this._cur = iter;
      return "Moved Up";
    } else {
      return "Couldn't find the directory.";
    }
  }
}

var root = new n_aryList();

/*  Creating a root directory with Documents , Photos & Videos */
root.insertFirst("$");
root.insertCur("Documents");
root.insertCur("Photos");
root.insertCur("Videos");
/* ------------------------ */
// root.getls();
// root.moveonedownCur("Photos");
// root.insertCur("WebCam");
// root.insertCur("MobileCam");
// console.log(root._head);
// console.log("============");
// root.moveonedownCur("WebCam");
// console.log("pwd: " + root._cur._parent + "/" + root._cur._value);
// root.moveoneupCur();
// console.log("pwd: " + root._cur._parent + "/" + root._cur._value);
// root.moveoneupCur();
// console.log("pwd: " + root._cur._parent + "/" + root._cur._value);

let fs = (context, path) => {
  return {
    ls: () => {
      context.echo(root.getls());
    },
    cd: (arg) => {
      if (arg === "..") {
        context.echo(root.moveoneupCur());
      } else {
        context.echo(root.moveonedownCur(arg));
      }
    },
    mkdir: (arg) => {
      context.echo(root.insertCur(arg));
    },
    pwd: () => {
      context.echo(root._cur._parent + "/" + root._cur._value);
    },
  };
};

export { fs };
