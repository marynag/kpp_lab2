var readlineSync = require('readline-sync');
var blessed = require('blessed');
const { reduce } = require('blessed/lib/colors');

var color_num_first = 0;
var color_num_second = 0;
var color_num_third = 0;
var color_num_fourth = 0;

var screen = blessed.screen({
	smartCSR: true,
  });
  
var Colors=['blue','green','red','yellow','magenta','cyan'];

var B=['30%','40%','50%','60%'];

var A=[];

function disp_color(){
  for (var i=0; i<=4;i++){
	var box = blessed.box({
		top: 'right',
		left: B[i],
		width: '5%',
		height: '5%',		
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
  screen.render();
}



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
			  left: '30%',
			  width: '5%',
			  height: '5%',
			  style: {
				fg: 'white',				
				bg: Colors[color_num_first],				
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
			  left: '40%',
			  width: '5%',
			  height: '5%',
			  style: {
				fg: 'white',
				bg: Colors[color_num_second],
			  }
			});
			screen.append(A[1]);
			screen.render();	
		return color_num_second;	  
	});

	screen.key('r', function(ch, key) {
		
		color_num_third = genetateColor();
		  A[2]= blessed.box({
			  top: 'left',
			  left: '50%',
			  width: '5%',
			  height: '5%',
			  style: {
				fg: 'white',
				bg: Colors[color_num_third],
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
			  left: '60%',
			  width: '5%',
			  height: '5%',
			  style: {
				fg: 'white',
				bg: Colors[color_num_fourth],		
			  }
			});
			screen.append(A[3]);
			screen.render();	
		return color_num_fourth;	  
	});


screen.render();

var user_choice_i=[];
var user_choice=[];



function display_user_choice(){
	var display_top=['10%','20%','30%','40%','50%','60%','70%','80%', '100%'];
	var display_user_location=['5%','15%','25%','35%', '50%'];	
	var user_color=[color_num_first,color_num_second,color_num_third,color_num_fourth];	

			
		for (let i=0; i<=3;i++){
			var box = blessed.box({
			top: display_top[count_position],
			//top: '10%',
			left: display_user_location[i],
			width: '5%',
			height: '5%',		
			style: {
			fg: 'white',
			bg: Colors[user_color[i]],
			//bg: 'red',
			}
			});
			
			screen.append(box);
		}		
	screen.render();
};


function Game_over(){
	return process.exit(0);
}




 var count_position=0;


// GAME

function randomNumber(){             
    var number= Math.floor(Math.random()*6);
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
    return rnd;
}

rnd = computerNumber();

var cc=0;

console.log(" ");
console.log(" ");
console.log(" ");
screen.key('enter', function (ch, key) {
	

	if (color_num_first!=color_num_second && color_num_first!=color_num_third && color_num_first!=color_num_fourth && color_num_second!=color_num_third && color_num_second!=color_num_fourth && color_num_third!=color_num_fourth){
					
		var counter=0;
		//console.log(" \r\n");	
		function check(){  	

			userNumber=color_num_first.toString()+color_num_second.toString()+color_num_third+color_num_fourth.toString();
			//console.log("     Загадане число "+rnd);

			var cows=0;
			var bulls=0;
			
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
				console.log(userNumber+" - Загадане число"+" \r\n"+ "Ви виграли!!!"+" \r\n");
				counter=0;
    		}
			else{
				console.log(" \r\n");
				display_user_choice();
				
        		console.log("   "+userNumber+ " - " + cows +" корів, "+ bulls +" биків"+"\r\n");
			
				count_position+=1;	
				
				if (count_position>8){
					Game_over();
				}
			
			}
		};
		
		if ( cc<1){
			var goal = check();			
		}
		
	}
	
});

disp_color();