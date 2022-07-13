/*
  This is empty on purpose! Your code to build the resume will go here.
*/

let bio = {
    name : "Matthew Ashman",
    role : "Infrastructure Engineer",
    mobile: "07403928289",
    email: "matthewiashman@gmail.com",
    pic: "images/moi.jfif",
    welcome: "A passionate, highly motivated and dedicated professional with strong technical, organisational and optimisation skills. Experienced with ServiceNow platform and with troubleshooting IT issues and managing a variety of data for a wide range of purposes.",
    skills: ["ServiceNow", "Python", "Linux", "JavaScript", "HTML/CSS", "SQL", "AWS", "Git", "Ansible", "Terraform"]
}

let education = Object();

education['school'] = "University of Liverpool";
education['start'] = 2006;
education['degree'] = "Mathematical Physics";
education['dates'] = "2006-2010";
education['location'] = "Liverpool";
education['major'] = "String Theory";

let formattedName = HTMLheaderName.replace('%data%', bio.name);
let formattedRole = HTMLheaderRole.replace('%data%', bio.role);
let formattedMobile = HTMLmobile.replace('%data%', bio.mobile);
let formattedEmail = HTMLemail.replace('%data%', bio.email);
let formattedBioPic = HTMLbioPic.replace('%data%', bio.pic);
let formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcome);
let formattedSkills = bio.skills.map((skill) => HTMLskills.replace('%data%', skill));
formattedSkills = HTMLskillsStart.replace('%data%', formattedSkills);
let formattedEducationSchool = HTMLschoolName.replace('%data%', education.school);

$('#header').append(formattedName);
$('#header').append(formattedRole);
$('#header').append(formattedWelcome);
$('#header').append(formattedEmail);
$('#header').append(formattedMobile);
$('#header').prepend(formattedBioPic);
$('#main').append(formattedSkills);
$('#main').append(formattedEducationSchool);
