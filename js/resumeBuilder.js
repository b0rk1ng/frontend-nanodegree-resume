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

let work = Object();

work.employer = "RCDTS (for HMRC)";
work.start = "January 2022";
work.title = bio.role;
work.location = "Telford"
work.description = "Implementing enterprise tooling solutons, such as Configuration of integrations between ServiceNow and other applications, for example Nexthink digital experience monitoring and set up of ServiceNow data ingestion via AWS S3. Supporting enterprise tooling solutions including out of hours support.";

let formattedName = HTMLheaderName.replace('%data%', bio.name);
let formattedRole = HTMLheaderRole.replace('%data%', bio.role);
let formattedMobile = HTMLmobile.replace('%data%', bio.mobile);
let formattedEmail = HTMLemail.replace('%data%', bio.email);
let formattedBioPic = HTMLbioPic.replace('%data%', bio.pic);
let formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcome);
let formattedSkills = bio.skills.map((skill) => HTMLskills.replace('%data%', skill));
formattedSkills = HTMLskillsStart.replace('%data%', formattedSkills);
let formattedEducationSchool = HTMLschoolName.replace('%data%', education.school);
let formattedWorkJob = HTMLworkTitle.replace('%data%', work['title']);

$('#header').append(formattedName);
$('#header').append(formattedRole);
$('#header').append(formattedWelcome);
$('#header').append(formattedEmail);
$('#header').append(formattedMobile);
$('#header').prepend(formattedBioPic);
$('#main').append(formattedSkills);
$('#main').append(formattedEducationSchool);
$('#main').append(formattedWorkJob);
