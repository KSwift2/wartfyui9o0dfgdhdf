var canvas = new fabric.Canvas('myCanvas');
block_image_width=30;
block_image_height=30;
player_x=10;
player_y=10;
var player_object="";
function player_update()
{
    fabric.Image.fromURL("player.png", function(img) {
        player_object.scaletoWidth(150);
        player_object.scaletoHeight(140);
        player_object.set({
            top:player_y, 
            left:player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image) 
{
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object=Img;
        block_image_object.scaletoWidth(block_image_width);
        block_image_object.scaletoHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x

        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80')
    {
        console.log("p and shift pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(e.shiftKey && keyPressed == '77')
    {
        console.log("m and shift pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;

    }
    if(keyPressed == '87')
    {
        up();
        console.log("w");
    }
    if(keyPressed == '83')
    {
        down();
        console.log("s");
    }
    if(keyPressed == '65')
    {
        left();
        console.log("a");
    }
    if(keyPressed == '68')
    {
        right();
        console.log("d");
    }
    if(keyPressed == '69')
    {
        new_image('wall.jpg');
        console.log("e");
    }
    if(keyPressed == '88')
    {
        new_image('ground.png');
        console.log("x");
    }
    if(keyPressed == '67')
    {
        new_image('light_green.png');
        console.log("c");
    }
    if(keyPressed == '86')
    {
        new_image('trunk.jpg');
        console.log("v");
    }
    if(keyPressed == '81')
    {
        new_image('roof.jpg');
        console.log("q");
    }
    if(keyPressed == '20')
    {
        new_image('yellow_wall.png');
        console.log("CapsLK");
    }
    if(keyPressed == '18')
    {
        new_image('dark_green.png');
        console.log("LAlt");
    }
    if(keyPressed == '82')
    {
        new_image('different.png');
        console.log("r");
    }
    if(keyPressed == '70')
    {
        new_image('cloud.jpg');
        console.log("f");
    }
}