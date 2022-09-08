const { template } = require('@babel/core')

function concatArray(array1, array2) {
  if (array1 == null,undefined && array2 == null,undefined){
    return 'underfined'
  }else if (array1 == [] || array2 == []){
    return "empty array"
  }else if (array1 == null,undefined,[]){
    return array2 
  }else if(array2 == null,undefined,[]){
    return array1
  }else test = array1.concatArray(array2)
  

  console.log("test")
}
module.exports = concatArray
