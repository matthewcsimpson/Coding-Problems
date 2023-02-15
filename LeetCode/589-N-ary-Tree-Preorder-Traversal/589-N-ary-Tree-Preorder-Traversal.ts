//   Definition for node.
class TreeNode {
  val: number;
  children: TreeNode[];
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}

// Note: 'Node' renamed to 'TreeNode'
const preorder = (root: TreeNode | null): number[] => {
  // new array to hold return values.
  let r: number[] = [];

  // if the current node is not null,push the value into the r array.
  if (root !== null) {
    r.push(root.val);
    // If the current node has children, call this function on them and
    // concatenate the results into the r array.
    if (root.children) {
      for (let child of root.children) {
        r = r.concat(preorder(child));
      }
    }
  }

  // return the r array 
  return r;
};
