let Tree = function(node){
  this.node = node;
};

let selectBranch = function(number,node){
  return (number<node) ? "left" : "right";
};

Tree.prototype = {
  insert : function(data){
    let branch = selectBranch(data,this.node);
    if(!this[branch]){
      this[branch] = new Tree(data);
    }else{
      this[branch].insert(data);
    }
    return this;
  }
};

let tree =new Tree(3);
let list = [6,3,5,1,9,8];
list.reduce((tree,data)=>{return tree.insert(data)},tree);
console.log(tree);
