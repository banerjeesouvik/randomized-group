var randomGroups = function group(names,n){
  var groups = [];
  var indices = [];
  let i=0;
  if(n > names.length){
    return [];
  }
  while(indices.length < names.length){
    var index = Math.floor(Math.random() * names.length);
    if(!indices.includes(index)){
      indices.push(index);
    }
  }
  
  
  for(i=0; i<n; i++){
    groups.push([]);
  }
  
  for(i = 0; i<n; i++){
    for(let j=i; j < names.length; ){
      groups[i].push(names[indices[j%names.length]]);
      j = j + n;
    }
  }

  return groups;
  
}

module.exports = randomGroups;

