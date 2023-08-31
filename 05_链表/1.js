// 输入项
const itemList = [
  {
    id: 5,
    paramName: '供应链属性5',
    parentId: 0
  },
  {
    id: 6,
    paramName: '供应链属性6',
    parentId: 5
  },
  {
    id: 7,
    paramName: '供应链属性7',
    parentId: 5
  }
];


/**
* 补充下面函数，函数返回示例如下
* @param {ItemList} arr
*	@return {ItemTreeNode[]}
**/
function buildTree(arr) {
  let tree=[];
  let map = {};
  for(let item of arr){
    map[item.id]=item;
    if(item.parentId === 0){
      tree.push(item)
    }
  }
  for(let item of arr){
    if(item.parentId!==0){
      let parent = map[item.parentId];
      
      parent.children = parent.children ?? [];
      parent.children.push(item);
  
      map[item.parentId]= parent;
    }
  }
  return tree
}
const res=buildTree(itemList);
console.log(res);
