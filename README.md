# Task-Manager
A simple Task Manager in HTML, Express, Node.js


This is building off of a project I had to do in my WebSystems class at Lehigh University, CSE264. 

To run this project, you will need to have Node.js installed.

Use "npm init" to create a package.json file.

Use "npm install --save express path ejs" to install these modules

The app will run using the command "node app.js" on localhost:3000


Directions for Use:

To add a task the user does the following:
- Writes the description of the tasks
- Clicks on the date field and selects a date from the calender
- Selects one of 5 task types: Next Action, Waiting, Talk, Future, and Someday/Maybe. 
- Finally, the user clicks Add and the new task is added to the list on the left and the form is reset.

To delete one or more tasks, the user does the following:
- Clicks the check boxes of the tasks to be deleted from the table on the left.
- Clicks the Delete button. 
- The tasks are deleted from the list and the task list is refreshed with the updated list of tasks.
