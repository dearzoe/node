function copy(src,target){
    var fs=require("fs");
    fs.readFile(src, function (err,data) {
        if(err){
            console.log(err);
        }else{
            fs.writeFile(target,data, function (err,data) {
                if(err){
                    console.log(err);
                }
            })
        }
    })
};
copy("./3.txt","./4.txt");