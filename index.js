const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

let fileContents = "";
let teamManagerInfo = "";
let teamMembersInfo = "";
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

        teamManagerInfo = fileContents;

        addTeamMembers();
    })
}

async function getEngineerInfo() {
    console.log("\n-> Please provide some information about the Engineer team member.\n")

    const engineer = new Engineer();
    const teamMember = await engineer.createNew();
    
    fs.readFile('./src/assets/engineer-card.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        fileContents = data;
        
        // Update file contents
        fileContents = fileContents.replace(/data\.name/g, teamMember.name);
        fileContents = fileContents.replace(/data\.id/g, teamMember.id);
        fileContents = fileContents.replace(/data\.email/g, teamMember.email);
        fileContents = fileContents.replace(/data\.github/g, teamMember.github);

        teamMembersInfo += fileContents;

        addTeamMembers();
    })
}

function addTeamMembers() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'addTeamMember',
            message: 'Add another team member?',
            choices: ['Engineer', 'Intern', 'Finished']
        }
    ])
    .then((res) => {
        switch (res.addTeamMember) {
            case 'Engineer':
                getEngineerInfo();
                break;

            case 'Intern':
                
                break;
        
            default:
                console.log("\n**************************************************\n\n-> Generating the team profile web page.\n");
                generateHTML();
                break;
        }
    })
}

function generateHTML() {
    // Check for Output folder and create if needed
    if (!fs.existsSync(outputDir)){
        fs.mkdirSync(outputDir);
    }

    fileOutput = fileOutput.replace(/data\.teamManager/g, teamManagerInfo);
    fileOutput = fileOutput.replace(/data\.teamMembers/g, teamMembersInfo);

    // Create the index.html file
    fs.writeFile(
        './dist/index.html', 
        fileOutput, 
        (err) => err ? console.log(err) : console.log('Success! Your Team Profile web page has been created! File Path: ./dist/index.html\n')
    );
}