/*
  This is empty on purpose! Your code to build the resume will go here.
*/

const bio = {
    name : "Matthew Ashman",
    role : "Infrastructure Engineer",
    mobile: "07403928289",
    email: "matthewiashman@gmail.com",
    pic: "images/moi.jfif",
    welcome: "A passionate, highly motivated and dedicated professional with strong technical, organisational and optimisation skills. Experienced with ServiceNow platform and with troubleshooting IT issues and managing a variety of data for a wide range of purposes.",
    skills: ["ServiceNow", "PowerShell", "Python", "Linux", "JavaScript", "HTML/CSS", "SQL", "AWS", "Git", "Ansible", "Terraform"]
};

const education = {
    'school': "University of Liverpool",
    'start': 2006,
    'degree': "Mathematical Physics",
    'dates': "2006-2010",
    'location': "Liverpool",
    'major': "String Theory"
};

const work = {
    'employer': "HMRC",
    'start': "January 2022",
    'title': bio.role,
    'location': "Telford",
    'description': "Implementing enterprise tooling solutons, such as Configuration of integrations between ServiceNow and other applications, for example Nexthink digital experience monitoring and set up of ServiceNow data ingestion via AWS S3. Supporting enterprise tooling solutions including out of hours support."
};

const formattedName = HTMLheaderName.replace('%data%', bio.name);
const formattedRole = HTMLheaderRole.replace('%data%', bio.role);
const formattedMobile = HTMLmobile.replace('%data%', bio.mobile);
const formattedEmail = HTMLemail.replace('%data%', bio.email);
const formattedBioPic = HTMLbioPic.replace('%data%', bio.pic);
const formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcome);
let formattedSkills = bio.skills.map((skill) => HTMLskills.replace('%data%', skill));
formattedSkills = HTMLskillsStart.replace('%data%', formattedSkills);

$('#header').append(formattedName);
$('#header').append(formattedRole);
$('#header').append(formattedWelcome);
$('#header').append(formattedEmail);
$('#header').append(formattedMobile);
$('#header').prepend(formattedBioPic);
$('#header').append(formattedSkills);
