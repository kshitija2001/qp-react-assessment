function customMap(arr,callBack){
const result =[]

for(let i=0;i<arr.length;i++){
    result.push(callBack(arr[i]))
}

return result
}

const arrmap = customMap([1,2,3,4],(num)=>num*2)

console.log("arrmap==>",arrmap)

