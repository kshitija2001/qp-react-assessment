function charCountOcc(str){
const charCount = {}

for(const char of str){
if(charCount[char]){
  charCount[char] ++
}else{
  charCount[char] = 1
}
}

console.log("charCount map",Object.entries(charCount))

for(const [char,count] of Object.entries(charCount)){
  if(count>1){
    console.log("output==>",char,"=",count)
  }
}
}

charCountOcc("programming")