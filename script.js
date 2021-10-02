function chunkArrayInGroups(arr, size) {
    let array =[];
    let result = [];
    for(let i=0; i< arr.length; i+=size){
        array = arr.slice(i,size+i)
        result.push(array);
    }
    console.log(result);
    return result;
    
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);