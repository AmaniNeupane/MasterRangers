
// Create canvas variable
var canvas = new fabric.Canvas('myCanvas');
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	// to upload images
	fabric.Image.fromURL(get_image, function(Img) {
		block_image_object = Img;

		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
			top:block_y,
			left:block_x
		});
		canvas.add(block_image_object);
	});
	
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	
	if(keyPressed == '71')
	{
		block_x = 260;
		// upload green ranger
		new_image('blackgirlgreen.png');
		console.log("g")
	}
	
	if(keyPressed == '89')
	{
		block_x =505;
		new_image('brownboygreen.png');
		console.log("y")
		// upload yellow ranger
		
	}
	if(keyPressed == '80')
	{
		block_x = 800;
		new_image('gingergirlpink.png');
		console.log("p")
		// upload pink ranger
	}
	if(keyPressed == '66')
	{
		block_x = 5;
		new_image('blondeboyblue.png');
		console.log("b")
	// upload blue ranger
	}
	
}

