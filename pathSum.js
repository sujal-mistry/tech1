var has_path = function (root, target) {
  let res = false;
  function help(node, current_sum) {
    if (node === null) {
      return false;
    }
    current_sum += node.val;
    if (current_sum === target && !node.left && !node.right) {
      res = true;
    }
    help(node.left, current_sum);
    help(node.right, current_sum);
  }
  help(root, 0);
  return res;
};
