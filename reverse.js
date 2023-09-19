let fs = require("fs");

fs.readFile("source.txt", "utf8", function(error, fileContent){
    if(error) throw error; 

    let writeMe = [...fileContent].reverse().join("");

    fs.writeFile("reverse.txt", writeMe, function(error) {
        if(error) throw error;
    })
});

    