// #1

//console.log(hello);                                   
//var hello = 'world'; 
var hello;
console.log(hello); //Logs Undefined
hello = 'world'

// #2

//var needle = 'haystack';
//test();
//function test(){
//	var needle = 'magnet';
//	console.log(needle);
//}

var needle = 'haystack';
function test(){
	var needle = 'magnet'
	console.log(needle) // Logs 'magnet'
}
test();

// #3

//var brendan = 'super cool';
//function print(){
//	brendan = 'only okay';
//	console.log(brendan);
//}
//console.log(brendan);

var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan) // function not called
}
console.log(brendan); // Logs 'super cool'

// #4

//var food = 'chicken'
//console.log(food);
//eat();
//function eat(){
//	food = 'half-chicken';
//	console.log(food);
//	var food = 'gone';
//}

var food = 'chicken';
function eat(){
	var food;
	food = 'half-chicken';
	console.log(food);
	food = 'gone'
}
console.log(food) // Logs 'chicken'
eat(); //Logs 'half-chicken'

// #5

//mean();
//console.log(food);
//var mean = function() {
//	food = "chicken";
//	console.log(food);
//	var food = "fish";
//	console.log(food);
//}
//console.log(food);

//mean(); //Doesn't run because var mean = before function
console.log(food) // reference error if by itself(logs chicken because of earlier code block #4 in this assignment)
var man = function() {
	var food;
	food = chicken;
	console.log(food); // Function needs to be called after to log this because of var mean = in creating function
	food = 'fish';
	console.log(food);
}
console.log(food); //reference error if by itself(logs chicken because of earlier code block #4 in this assignment)

// #6

/*console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);*/

var genre = 'disco';
function rewind() {
	var genre;
	genre = 'rock';
	console.log(genre); // Logs 'rock'
	var genre = 'r&b';
	console.log(genre); //Logs 'r&b'
}
console.log(genre); // Logs 'disco'
rewind(); // Logs 'rock' and 'r&b'
console.log(genre); // Logs 'disco'

// #7

/*dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);*/

dojo = "san jose"
function learn() {
	var dojo;
	dojo = 'seattle';
	console.log(dojo);
	dojo = 'burbank';
	console.log(dojo);
}
console.log(dojo) // Logs 'san jose'
learn(); // Logs 'seattle' and 'burbank'
console.log(dojo) // Logs 'san jose'

// #8

/*console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}*/

function makeDojo(name, students){
	const dojo = {};
	dojo.name = name;
	dojo.students = students;
	if(dojo.students > 50){
		dojo.hiring = true;
	} else if (dojo.students <= 0){
		dojo = "closed for now" // Error because can't change dojo to str (const)
	}
	return dojo;
}
console.log(makeDojo("Chicago", 65)); // Logs dojo object
console.log(makeDojo("Berkeley", 0)); // Can't run

