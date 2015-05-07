// var chai = require('chai'),
//  expect = chai.expect;

var expect = require('chai').expect;

// I can list my tasks...
var taskList = [ ];



function listTasks() {

}

// I can add a task to my list

function addTaskToList(task, list){
  // what is the task? @param task
  // where is the task going? @param list
  // what order / priority? on the bottom
    return list.push(task);
}

expect(taskList.length).to.equal(0);
addTaskToList("Remember the milk", taskList);
expect(taskList[0]).to.equal("Remember the milk");
expect(taskList.length).to.equal(1);

// expect what?
addTaskToList("Take out the trash", taskList)
// expectt what now?
console.log(taskList[0]);

// testing git add, commit and push
