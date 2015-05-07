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
expect(taskList.length).to.equal(1);
addTaskToList("Take out the trash", taskList);
expect(taskList[1]).to.equal("Take out the trash");
expect(taskList.length).to.equal(2);

expect(taskList.length).to.equal(2);
addTaskToList("Clean the bathroom", taskList);
expect(taskList[2]).to.equal("Clean the bathroom");
expect(taskList.length).to.equal(3);

expect(taskList.length).to.equal(3);
addTaskToList("Feed the dog", taskList);
expect(taskList[3]).to.equal("Feed the dog");
expect(taskList.length).to.equal(4);
// expectt what now?
console.log(taskList[0]);
console.log(taskList[1]);
console.log(taskList[2]);
console.log(taskList[3]);

// testing git add, commit and push
