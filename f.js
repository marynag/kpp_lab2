var readlineSync = require('readline-sync');
var blessed = require('blessed');


/// Create a screen object.
var screen = blessed.screen({
	smartCSR: true
  });
  
  
  // Create a box perfectly centered horizontally and vertically.
  var box = blessed.box({
	top: 'left',
	left: '35%',
	width: '15%',
	height: '40%',
	tags: true,
	border: {
	  type: 'line'
	},
	style: {
	  fg: 'white',
	  bg: 'green',
	  border: {
		fg: 'white'
	  },
	}
  });
  
  var box1 = blessed.box({
	top: 'left',
	left: 'right',
	width: '15%',
	height: '40%',
	tags: true,
	border: {
	  type: 'line'
	},
	style: {
	  fg: 'white',
	  bg: 'blue',
	  border: {
		fg: 'white'
	  },
	}
  });

  var box2 = blessed.box({
	top: '50%-1',
	left: 'right',
	width: '15%',
	height: '40%',
	tags: true,
	border: {
	  type: 'line'
	},
	style: {
	  fg: 'white',
	  bg: 'red',
	  border: {
		fg: 'white'
	  },
	}
  });

  var box3 = blessed.box({
	top: '50%-1',
	left: '35%',
	width: '15%',
	height: '40%',
	tags: true,
	border: {
	  type: 'line'
	},
	style: {
	  fg: 'white',
	  bg: 'yellow',
	  border: {
		fg: 'white'
	  },
	}
  });

  var box4 = blessed.box({
	top: 'right',
	left: '65%',
	width: '15%',
	height: '40%',
	tags: true,
	border: {
	  type: 'line'
	},
	style: {
	  fg: 'white',
	  bg: 'cyan',
	  border: {
		fg: 'white'
	  },
	}
  });

  var box5 = blessed.box({
	top: '50%-1',
	left: '65%',
	width: '15%',
	height: '40%',
	tags: true,
	border: {
	  type: 'line'
	},
	style: {
	  fg: 'white',
	  bg: 'magenta',
	  border: {
		fg: 'white'
	  },
	}
  });
  
  
  screen.append(box);
  screen.append(box1);
  screen.append(box2);
  screen.append(box3);
  screen.append(box4);
  screen.append(box5);
  
  
  var icon = blessed.image({
	parent: box,
	top: 0,
	left: 0,
	type: 'overlay',
	width: 'shrink',
	height: 'shrink',
	file: __dirname + '/my-program-icon.png',
	search: false
  }); 
  
  
  screen.render();


console.log(" \r\n");

var counter=0;


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


rnd = computerNumber();

function check(){  	

	userNumber = readlineSync.question('Enter number: ');

	var cows=0;
	var bulls=0;

	if (verifyEntry(userNumber)===false){
		console.log(userNumber+" - Неправильні дані\r\n");
	} 
	else{

	
		for (let n=0; n<4; n++){
			for (let i=0; i<4; i++){
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

			counter=0;
    	}
		else{
        	console.log(userNumber+ " - " + cows +" корів, "+ bulls +" биків, спроб: "+counter+"\r\n");}
	}
};

var goal = check();

for(let r=0; rnd != userNumber;r++ ){
	var goal = check();
}

