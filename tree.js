let divideBranch = function(number,node){
  return (number<node) ? 'left' : 'right';
};

let insertBranches = function(obj,number){
  if(obj.node){
    let branch =  divideBranch(number,obj.node);
    if(!obj[branch]){
      obj[branch] = {};
    }
    return insertBranches(obj[branch],number);
  }
  obj.node = number;
}

let createTree = function(array){
  let insertUnitTree = function(obj,num){
    insertBranches(obj,num);
    return obj;
  }
  return array.reduce(insertUnitTree,{})
};

let buildTree = function(array,count = 0,tree = {node:undefined}){
  if(count > array.length-1){
    return tree;
  }
  insertBranches(tree,array[count]);
  return buildTree(array,count+1,tree);
};

console.log(buildTree(process.argv.slice(2)));
// console.log(createTree(process.argv.slice(2)));
