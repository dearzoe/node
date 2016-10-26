var fs=require("fs");

//var content = fs.readFileSync("./1.txt",{encoding:"utf8"});
//console.log(content);

fs.readFile("./1.txt",{encoding:"utf8"}, function (err,data) {
    console.log(data)
});
