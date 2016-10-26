var fs=require("fs");
fs.writeFileSync("./2.txt","中国好声音",{encoding:"utf8"});

fs.writeFile("./3.txt","中国坏声音",{encoding:"utf8"},function(err,data){
});