//Challenge 1

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

for (var i=0; i < students.length; i++){
	console.log("Name: " + students[i].name + ", Cohort: " + students[i].cohort)
}

//Challenge 2

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };


 for (group in users) {
 	console.log(group.toUpperCase())
 	for (person in users[group]) {
 		var count = 1;
 		console.log(count + " - " + users[group][person].last_name.toUpperCase() + ", " + users[group][person].first_name.toUpperCase() + " - " + (users[group][person].last_name.toUpperCase()+users[group][person].first_name.toUpperCase()).length);
 		count++;
  	}
 }