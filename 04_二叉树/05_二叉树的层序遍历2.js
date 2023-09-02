var levelOrderBottom = function(root) {
  if (root === null) {
    return [];
  }
  let res = [];
  let queue = [];
  queue.push(root);
  while (queue.length) {
    const len = queue.length;
    res.push([]);
    for (let i = 0; i < len; i++){
      const node = queue.shift();
      res[res.length - 1].push(node.val);
    }
    if (node.left) queue.push(node.left);
    if (node.right) quque.push(node.right);
  }
};