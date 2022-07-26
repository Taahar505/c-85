canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');
greencar_width=75;
greencar_height=100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x=5;
greencar_y=225;

function add() {
	//upload car, and background images on the canvas.
	background_imgTag = new Image(); 
	background_imgTag.onload = uploadBackground; 
	background_imgTag.src = background_image; 
	rover_imgTag = new Image(); 
	rover_imgTag.onload = uploadgreencar;  
	rover_imgTag.src = greencar_image; 
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height); 

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height); 

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(greencar_y >=0) {

        greencar_y=greencar_y-10;
        console.log("When up arrow is pressed, x = " + greencar_x + " | y = " +greencar_y) ;
        uploadBackground();
        uploadgreencar();

    }
}

function down()
{
	//Define function to move the car downward
	
    if(greencar_y <=500) {

        greencar_y=greencar_y+10;
        console.log("When down arrow is pressed, x = " + greencar_x + " | y = " +greencar_y) ;
        uploadBackground();
        uploadgreencar();

    }
}

function left()
{
	//Define function to move the car left side
	if(greencar_x >=0) {

        greencar_x = greencar_x - 10;
        console.log("When left arrow is pressed, x = " + greencar_x + " | y = " +greencar_y) ;
        uploadBackground();
        uploadgreencar();

    }
}

function right()
{
	//Define function to move the car right side
	if(greencar_x <=700) {

        greencar_x = greencar_x + 10;
        console.log("When right arrow is pressed, x = " + greencar_x + " | y = " +greencar_y) ;
        uploadBackground();
        uploadgreencar();
        
    }
}
