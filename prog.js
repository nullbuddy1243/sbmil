const ProgBar = require("progress");

console.log(`
         ▄▄                         
        ▄██                         
         ██                         
 ▄██▀███ ██▄████▄ ▀████████▄█████▄  
 ██   ▀▀ ██    ▀██  ██    ██    ██  
 ▀█████▄ ██     ██  ██    ██    ██  
 █▄   ██ ██▄   ▄██  ██    ██    ██  
 ██████▀ █▀█████▀ ▄████  ████  ████▄
                                    
                                    
`);

var bar = new ProgBar(" SB-_-Milady [:bar]  :percent", {
  complete: "=",
  incomplete: "",
  width: 20,
  total: 100,
});
console.log("\n");

// because 0.0.1 is 10/100 of 0.1 which will be tag for the first release
bar.tick(10);
console.log("\n");
