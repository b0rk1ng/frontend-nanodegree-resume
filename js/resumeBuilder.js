/*
This is empty on purpose! Your code to build the resume will go here.
*/

let name = "Matthew Ashman";
let role = "Infrastructure Engineer";

let formattedName = HTMLheaderName.replace('%data%', name);
let formattedRole = HTMLheaderRole.replace('%data%', role);

$('#header').append(formattedName);
$('#header').append(formattedRole);
