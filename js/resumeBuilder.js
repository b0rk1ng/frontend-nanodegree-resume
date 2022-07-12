/*
This is empty on purpose! Your code to build the resume will go here.
*/

let bio = {
    name : "Matthew Ashman",
    role : "Infrastructure Engineer"
}

let formattedName = HTMLheaderName.replace('%data%', bio.name);
let formattedRole = HTMLheaderRole.replace('%data%', bio.role);

$('#header').append(formattedName);
$('#header').append(formattedRole);
