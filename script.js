const { add, sub, divide } = require("./utils");
const http = require("http");
const fs = require("fs");
const { Console } = require("console");
// const path = require("path");
// const { error } = require("console");

const userList = [{ name: "jhon" }, { name: "tony" }, { name: "malik" }];
const server = http.createServer(function (req, res) {
  res.setHeader("Access-Controll-Allow-Origin", "*");

  switch (req.url) {
    case "/":
      fs.readFile("./views/index.html", "utf-8", (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
      break;
    case "/users":
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(userList));
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Page not fount");
      break;
  }
});

const PORT = 3001;

server.listen(PORT,() => console.log(`Server Started in ${PORT}`))






// copy and past it >>> 

const getUsers = async () => {
    const response = await axios("http://localhost:3001/users").catch((error) => {
      console.log(error)
    })

    return response;

};
console.log(getUsers());


// copy and past it <<<

// http.createServer(function (req,res) {
// fs.readFile('views/index.html', function(err, data) {
//     res.writeHead(200, {'ContentDf': 'text/html'});
//     res.write(data);
//     return res.end();
// });
// }).listen(3001);

// console.log(add());
// console.log(sub());
// console.log(divide());
