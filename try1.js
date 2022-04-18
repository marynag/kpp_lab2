var readlineSync = require('readline-sync');
var blessed = require('blessed');

var color_num_first = 0;
var color_num_second = 0;
var color_num_third = 0;
var color_num_fourth = 0;

var screen = blessed.screen({
	smartCSR: true,
  });
  
var Colors=['blue','green','red','yellow','magenta','cyan'];

var B=['right','15%','30%','45%'];

var A=[];

  for (var i=0; i<=4;i++){
	var box = blessed.box({
		top: 'right',
		left: B[i],
		width: '15%',
		height: '30%',
		border: {
		  type: 'line'
		},
		style: {
		  fg: 'white',
		  bg: 'blue',
		  
		}
	  });
	A.push(box);	
  }

  screen.append(A[0]);
  screen.append(A[1]);
  screen.append(A[2]);
  screen.append(A[3]);

  screen.key(['escape', 'C-c'], function(ch, key) {
	return process.exit(0);
  });

  function genetateColor(){	
	var color = (Math.floor(Math.random()*6));
	return color;
}

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


screen.render();


// GAME

screen.key('enter', function (ch, key) {


	if (color_num_first!=color_num_second && color_num_first!=color_num_third && color_num_first!=color_num_fourth && color_num_second!=color_num_third && color_num_second!=color_num_fourth && color_num_third!=color_num_fourth){

		console.log(" \r\n");

		var counter=0;

		rnd=color_num_first.toString()+color_num_second.toString()+color_num_third+color_num_fourth.toString();

		//console.log("Загадане число "+rnd);

		function verifyEntry(number){
			number=number.toString();
			verif=true;
			for (var i=0;i<4;i++){
				if (number.lastIndexOf(number.charAt(i))!=i){
				verif=false;
				break;
				}	
			}
			if (number.length!=4){
				verif=false;
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
			rnd=rnd.toString();
	
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
				console.log(userNumber+" - Загадане число"+" \r\n"+ "Ви виграли, кількість спроб: "+counter+" \r\n");

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

	}
	else{
		console.log(" \r\n");
		console.log('Неправильні дані');
	}

});

