console.log('hello word');

var readline = require('readline');  
var rl = readline.createInterface(process.stdin, process.stdout);

/*  
     rl.question('What is your age? ', (age) => {
        console.log('Your age is: ' + age);
        rl.close();
    });
*/

var counter=0;

//генерація числа 0-9

function randomNumber(){             
    var number= Math.floor(Math.random()*10);
    return number
}


function computerNumber(){
    var fourth= randomNumber();
    for (var i;i=1;i++) {
	    var third= randomNumber();
	    var second= randomNumber();
	    var first= randomNumber();
	    if(third!=fourth && second!=fourth && second!=third && first!=fourth && first!=third && first!=second)
        {break}
    }
    var rnd=fourth.toString()+third.toString()+second.toString()+first.toString();
    console.log("Загадане число "+rnd);
    return rnd;
}



function verifyEntry(number){
	number=number.toString();
	verif=true;
	for (var i=0;i<4;i++){
		if (number.lastIndexOf(number.charAt(i))!=i){
			verif=false;
			break;
		}
	}
	return verif;
}



function check(){  
	
	//var userNumber='1234';

	// з файлу 	

	const fs = require('fs')

	userNumber = fs.readFileSync("work_please.txt", "utf8");


	//---------------------------------------------
    rl.question('Enter number \r\n', ( userNumber) => {
        console.log('Your number: ' + userNumber);
        rl.close();
		return userNumber;
    });	
	//----------------------------------------------------
	
	
	console.log('юзернамбер '+ userNumber);
	var cows=0;
	var bulls=0;
	if (verifyEntry(userNumber)===false){
		console.log(userNumber+" - Неправильні дані\r\n");
	} 
	else {
		for (var n=0; n<4; n++){
			for (var i=0; i<4; i++){
				if (userNumber.charAt(i) === rnd.charAt(n) && i==n){
					bulls++;
				}
				else {
					if(userNumber.charAt(i) === rnd.charAt(n)) {
						cows++;
					}
				}
			}
		}
		counter++;
		if (bulls===4){
			console.log("___________________________________________________________ \r\n"+userNumber+" - Загадане число"+" \r\n"+ "Ви виграли, кількість спроб: "+counter+" \r\n");
			rnd=computerNumber();
			counter=0;
    	}
		else{
        	console.log(userNumber+ " - " + cows +" корів, "+ bulls +" биків, спроб: "+counter+"\r\n");}
    	}
	}



	rnd = computerNumber();
	var goal = check();