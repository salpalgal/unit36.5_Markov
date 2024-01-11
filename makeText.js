/** Command-line tool to generate Markov text. */
const argv = process.argv;
const fs = require("fs")
const axios = require("axios")

function cat(arg){
    fs.readFile(`${arg}`,"utf8", function(err, data){
        if(err){
            console.log("ERROR :", err)
            process.exit(1)
        }
        else{
            console.log(data)
        }
    })
}

async function webCat(url){
    await axios.get(url).then(function(resp){
        console.log(resp["data"])
    }).catch(function(err){
        if (err){
            console.error(`ERROR fetch ${url} : ${err}` )
            process.exit(1) 
        }   
    });
}

function sort(argv){
    if(argv[3].slice(0,4)=="http"){
        webCat(argv[3])
    }
    else{
        cat(argv[3])
    }  
}

sort(argv)
