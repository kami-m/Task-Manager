//Kamilla Muminova, CSE264, HW3
const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

let taskIdCounter = 0; //increment for each new task
let taskList = {}; //this is an object

// Insert Routers Here

//root path
app.get("/", function(req,res){
  res.render("taskmanager",{
    taskList:taskList
  });
});

//process form path
app.get("/processform", function(req,res){

  const cmd = req.query.command;
  console.log(req.query.command);
  //credit for add and delete from Monday lecture
  if(cmd == "Add"){
    //define the constants
    const description = req.query.tDesc;
    const ttype = req.query.tType;
    const ddate = req.query.tDate;
    const id = ++taskIdCounter;
    const t = {}
    //add individual task info into task list
    t.id = id;
    t.desc = description;
    t.ttype = ttype;
    t.ddate = ddate;

    //add new task to task list
    taskList[id] = t;
  } else if(cmd == "Delete"){
    const tid = req.query.tID;

    if(typeof tid == "string"){
      delete taskList[tid]
    } else if (typeof tid == "object") {
      tid.forEach( (taskid, index) => { delete taskList[taskid]; });
    }
  }
  res.render("taskmanager",{
    taskList:taskList
  });

  console.log(taskList);
});

app.use(function(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Invalid Request.");
});

console.log("Starting App...");
app.listen(3000);

