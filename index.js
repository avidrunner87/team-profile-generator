const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

let fileContents = "";
let fileOutput = "";
const outputDir = './dist';

console.clear();

console.log("\n**************************************************\n\nWELCOME TO TEAM PROFILE GENERATOR\n\n**************************************************");

loadHTMLTemplate();

function loadHTMLTemplate() {
    fs.readFile('./src/index.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        fileOutput = data;
        getMgrInfo();    
    })
}

async function getMgrInfo() {
    console.log("\n-> Let's begin by getting some information about the team's manager.\n")

    const manager = new Manager();
    const teamManager = await manager.createNew();
    
    fs.readFile('./src/assets/manager-card.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        fileContents = data;
        
        // Update file contents
        fileContents = fileContents.replace(/data\.name/g, teamManager.name);
        fileContents = fileContents.replace(/data\.id/g, teamManager.id);
        fileContents = fileContents.replace(/data\.email/g, teamManager.email);
        fileContents = fileContents.replace(/data\.officeNumber/g, teamManager.officeNumber);

        fileOutput = fileOutput.replace(/data\.teamManager/g, fileContents);
        console.log(fileOutput);
    })
    
}