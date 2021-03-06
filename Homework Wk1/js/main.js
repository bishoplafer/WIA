/*
     Name: Bishop Lafer
     Date: 10/30/14
     Class & Section:  WIA-C201411
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

//Load different scripts based on our tests
//Modernizr.load

Modernizr.load({
	test: Modernizr.canvas,
	yep: "js/main.js",
	nope: "js/fail.js",
	complete: function(){
		//This will run after the js file is loaded based on the case
		
		console.log("The test is complete");
		
		
		
		
		}
	
	
	
	
	});

	console.log(Modernizr);

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message

/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here

window.onload = function(){
	var theCanvas1 = document.getElementById("Canvas1");
	var ctx1 = theCanvas1.getContext('2d');
	
	ctx1.fillStyle = "blue";
	ctx1.strokeStyle = "black";
	ctx1.lineWidth = 5;

	ctx1.strokeRect(0, 0, 50, 100);
	ctx1.fillRect(0, 0, 50, 100);


/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here

	var theCanvas2 = document.getElementById("Canvas2");
	var ctx2 = theCanvas2.getContext('2d');
	
	ctx2.fillStyle = "red";
	ctx2.strokeStyle = "black";
	ctx2.lineWidth = 5;

	//Full Circle
	var degrees = 360;
	var radians = (degrees/180)*Math.PI;
	
	ctx2.beginPath();
	ctx2.arc(50, 50, 20, 0, radians);
	ctx2.fill();
	ctx2.stroke();



/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/

	
//Draw Star here

	var theCanvas3 = document.getElementById("Canvas3");
	var ctx3 = theCanvas3.getContext('2d');

	var length = 20;

	ctx3.beginPath();
	ctx3.translate(100, 100);

	// initial offset rotation so our star is straight
	ctx3.rotate((Math.PI * 1 / 10));

	// make a point, 5 times
	for (var i = 5; i--;) {
	    // draw line up
	    ctx3.lineTo(0, length);
	    // move origin to current same location as pen
	    ctx3.translate(0, length);
	    // rotate the drawing board
	    ctx3.rotate((Math.PI * 2 / 10));
	    // draw line down
	    ctx3.lineTo(0, -length);
	    // again, move origin to pen...
	    ctx3.translate(0, -length);
	    // ...and rotate, ready for next arm
	    ctx3.rotate(-(Math.PI * 6 / 10));
	};
	// last line to connect things up
	ctx3.lineTo(0, length);
	ctx3.closePath();
	// stroke the path, you could also .fill()
	ctx3.stroke();


/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here

	var theCanvas4 = document.getElementById("Canvas4");
	var ctx4 = theCanvas4.getContext('2d');


	var x = theCanvas4.width / 2;
	var y = theCanvas4.height / 2;
	var radius = 125;
	var startAngle = 1.1 * Math.PI;
	var endAngle = 1.9 * Math.PI;
	var counterClockwise = false;

	ctx4.beginPath();
	ctx4.arc(x, y, radius, startAngle, endAngle, counterClockwise);
	ctx4.lineWidth = 5;

	// line color
	ctx4.strokeStyle = 'black';
	ctx4.stroke();


	//bezierCurveTo(cx1, cy1, cx2, cy2, x, y )
	ctx4.arc(x+25, y, startAngle, endAngle, counterClockwise);
				
	ctx4.stroke();

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here

	var theCanvas5 = document.getElementById("Canvas5");
	var ctx5 = theCanvas5.getContext('2d');

	var theString = "Drawing Text on a Canvas";

	//Stroke and Fill Text
	ctx5.font="24pt Verdana";
	ctx5.fillStyle = "yellow";
	ctx5.strokeStyle = "rgba(0, 255, 0, .5)";
	ctx5.fillText(theString, 20, 160);
	ctx5.strokeText(theString, 20, 160);



/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here

	var theCanvas6 = document.getElementById("Canvas6");
	var ctx6 = theCanvas6.getContext('2d');

	var  srcImg = document.getElementById("img1");

	ctx6.drawImage(srcImg, 0,0);

	ctx6.drawImage(srcImg, 0, 0, 1650, 544);

	ctx6.drawImage(srcImg, 285, 40, 95, 140, 0, 0, 825, 273);


/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here

	var theCanvas7 = document.getElementById("Canvas7");
	var ctx7 = theCanvas7.getContext('2d');
	
	var x = theCanvas7.width / 2;
	var y = theCanvas7.height / 2;
	var radius = 125;
	var startAngle = 1.1 * Math.PI;
	var endAngle = 1.9 * Math.PI;
	var counterClockwise = false;

	ctx7.beginPath();
	ctx7.arc(x, y, radius, startAngle, endAngle, counterClockwise);
	ctx7.lineWidth = 5;

	// line color
	ctx7.strokeStyle = 'black';
	ctx7.stroke();

	var length = 30;

	ctx7.beginPath();
	ctx7.translate(x-20, y-20);

	// initial offset rotation so our star is straight
	ctx7.rotate((Math.PI * 1 / 10));

	// make a point, 5 times
	for (var i = 5; i--;) {
	    // draw line up
	    ctx7.lineTo(0, length);
	    // move origin to current same location as pen
	    ctx7.translate(0, length);
	    // rotate the drawing board
	    ctx7.rotate((Math.PI * 2 / 10));
	    // draw line down
	    ctx7.lineTo(0, -length);
	    // again, move origin to pen...
	    ctx7.translate(0, -length);
	    // ...and rotate, ready for next arm
	    ctx7.rotate(-(Math.PI * 6 / 10));
	};
	// last line to connect things up
	ctx7.lineTo(0, length);
	ctx7.closePath();
	// stroke the path, you could also .fill()
	ctx7.stroke();

	var newString = "Complex Scene";

	ctx7.beginPath();
	ctx7.fill = "green";
	ctx7.font="24pt Verdana";
	ctx7.fillText(newString, -90, 0);

};