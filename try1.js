var readlineSync = require('readline-sync');
var blessed = require('blessed');

// перемістила зміні з генерацієї кольорів
var screen = blessed.screen({
	smartCSR: true,
  });

/*
  var color_num_first = genetateColor();
  var color_num_second = genetateColor();
  var color_num_third = genetateColor();
  var color_num_fourth = genetateColor();*/

  var color_num_first = 1;
  var color_num_second = 0;
  var color_num_third = 2;
  var color_num_fourth = 3;
  
  var box = blessed.box({
	top: 'left',
	left: 'right',
	width: '15%',
	height: '30%',
	border: {
	  type: 'line'
	},
	style: {
	  fg: 'white',
	  bg: 'green',
	  border: {
		fg: 'white'
	  },
	  focus: {
		border: {
		  fg: 'blue'
		}
	  }
	}
  });
  

  var box2 = blessed.box({
	top: 'left',
	left: '15%',
	width: '15%',
	height: '30%',
	border: {
	  type: 'line'
	},
	style: {
	  fg: 'white',
	  bg: 'blue',
	  border: {
		fg: 'white'
	  },
	  focus: {
		border: {
		  fg: 'blue'
		}
	  }
	}
  });

  var box3 = blessed.box({
	top: 'left',
	left: '30%',
	width: '15%',
	height: '30%',
	border: {
	  type: 'line'
	},
	style: {
	  fg: 'white',
	  bg: 'red',
	  border: {
		fg: 'white'
	  },
	  focus: {
		border: {
		  fg: 'blue'
		}
	  }
	}
  });

  var box4 = blessed.box({
	top: 'left',
	left: '45%',
	width: '15%',
	height: '30%',
	border: {
	  type: 'line'
	},
	style: {
	  fg: 'white',
	  bg: 'yellow',
	  border: {
		fg: 'white'
	  },
	  focus: {
		border: {
		  fg: 'blue'
		}
	  }
	}
  });
  
var A=[box,box2,box3,box4];

 
  screen.append(A[0]);
  screen.append(A[1]);
  screen.append(A[2]);
  screen.append(A[3]);
/*
  var icon = blessed.image({
	parent: box,
	top: 0,
	left: 0,
	type: 'overlay',
	width: 'shrink',
	height: 'shrink',
	file: __dirname + '/my-program-icon.png',
	search: false
  }); */
  

  screen.key(['escape', 'C-c'], function(ch, key) {
	return process.exit(0);
  });

  function genetateColor(){
	//var Colors=['blue','green','red','yellow','magenta','cyan'];
	var color = (Math.floor(Math.random()*6));
	//color= Colors[color_number];
	return color;
}




var Colors=['blue','green','red','yellow','magenta','cyan'];
//B=['15%','15%','30%','45%']

		screen.key('w', function(ch, key) {
		screen.free(A[0]);
		color_num_first = genetateColor();
		  A[0]= blessed.box({
			  top: 'left',
			  left: 'right',
			  width: '15%',
			  height: '30%',
			  border: {
				type: 'line'
			  },			  
			  style: {
				fg: 'white',				
				bg: Colors[color_num_first],				
				border: {
				  fg: 'white'
				},
				focus: {
				  border: {
					fg: 'blue'
				  }
				}
			  }
			});
			screen.append(A[0]);
			screen.render();
		return color_num_first;		  
	});

	screen.key('e', function(ch, key) {
		screen.free(A[1]);
		color_num_second = genetateColor();
		  A[1]= blessed.box({
			  top: 'left',
			  left: '15%',
			  width: '15%',
			  height: '30%',
			  border: {
				type: 'line'
			  },
			  style: {
				fg: 'white',
				bg: Colors[color_num_second],
				border: {
				  fg: 'white'
				},
				focus: {
				  border: {
					fg: 'blue'
				  }
				}
			  }
			});
			screen.append(A[1]);
			screen.render();	
		return color_num_second;	  
	});

	screen.key('r', function(ch, key) {
		screen.free(A[2]);
		color_num_third = genetateColor();
		  A[2]= blessed.box({
			  top: 'left',
			  left: '30%',
			  width: '15%',
			  height: '30%',
			  border: {
				type: 'line'
			  },
			  style: {
				fg: 'white',
				bg: Colors[color_num_third],
				border: {
				  fg: 'white'
				},
				focus: {
				  border: {
					fg: 'blue'
				  }
				}
			  }
			});
			screen.append(A[2]);
			screen.render();	
		return color_num_third;	  
	});

	screen.key('t', function(ch, key) {
		screen.free(A[3]);
		color_num_fourth = genetateColor();
		  A[3]= blessed.box({
			  top: 'left',
			  left: '45%',
			  width: '15%',
			  height: '30%',
			  border: {
				type: 'line'
			  },
			  style: {
				fg: 'white',
				bg: Colors[color_num_fourth],
				
				border: {
				  fg: 'white'
				},
				focus: {
				  border: {
					fg: 'blue'
				  }
				}
			  }
			});
			screen.append(A[3]);
			screen.render();	
		return color_num_fourth;	  
	});


	for (var i=0; i<4; i++){
		A[i].key(["d"], function (ch, key) {
			screen.focusNext();
		  });
	};	

screen.render();


screen.key(["h"], function (ch, key) {


console.log(" \r\n");

var counter=0;

/*

var color_num_first = genetateColor();
var color_num_second = genetateColor();
var color_num_third = genetateColor();
var color_num_fourth = genetateColor();*/

rnd=color_num_first.toString()+color_num_second.toString()+color_num_third+color_num_fourth.toString();


console.log("Загадане число "+rnd);


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
});
