function deep(arr1, arr2) {
  if (arr1.length - 1 < 0 || arr2.length < 0) return true;
  if (arr1.length !== arr2.length) return false;
  if (typeof arr1[arr1.length - 1] !== typeof arr2[arr2.length - 1])
    return false;
  if (
    typeof arr1[arr1.length - 1] === "object" &&
    typeof arr2[arr2.length - 1] === "object"
  ) {
    if (deep(arr1[arr1.length - 1], arr2[arr2.length - 1])) {
      arr1.pop();
      arr2.pop();
      return deep(arr1, arr2);
    } else return false;
  }

  if (
    typeof arr1[arr1.length - 1] === "number" &&
    typeof arr2[arr2.length - 1] === "number"
  ) {
    if (arr1.pop() !== arr2.pop()) return false;
    return deep(arr1, arr2);
  }
}

console.log(deep([0, 1, 2], [0, 1, 2]));
console.log(deep([0, 1, [[0, 1, 2], 1, 2]], [0, 1, [[0, 1, 2], 1, 2]]));
console.log(deep([0, 1, 2], [0, 1, 2, 3]));
//
//
//
//
function Queue() {
  this._arr = [];
}

Queue.prototype.enqueue = function (val) {
  this._arr.push(val);
};

Queue.prototype.dequeue = function () {
  return this._arr.shift();
};

Queue.prototype.size = function () {
  return this._arr.length;
};

function multiCallbacks(cbs1, cbs2) {
  let queue = new Queue();

  for (let k = 0; k < cbs2.length; k++) {
    queue._arr[cbs1[k].time] = cbs1[k].cb;
  }
  for (let i = 0; i < cbs1.length; i++) {
    queue._arr[cbs2[i].time] = cbs2[i].cb;
  }
  console.log(queue.size());
  console.log(queue);
  return queue._arr;
}

let x = [
  {
    cb: function () {
      return "1-1";
    },
    time: 2,
  },
  {
    cb: function () {
      return "1-2";
    },
    time: 3,
  },
];
let y = [
  {
    cb: function () {
      return "2-1";
    },
    time: 1,
  },
  {
    cb: function () {
      return "2-2";
    },
    time: 4,
  },
];

console.log(multiCallbacks(x, y));
