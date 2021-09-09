var canvas = new fabric.Canvas("myCanvas")
var blockimage_width = 30
var blockimage_height = 30

var player_X= 10
var player_y = 10

var player_object =""

function player_update()
{
    fabric.Image.fromURL("player.png",function(img){
        player_object = img
        player_object.scaleToWidth(150)
        player_object.scaleToHeight(140)
        player_object.set({
            top:player_y,left:player_X
        });
        canvas.add(player_object);
    });
}

function new_image(get_image)
{
fabric.Image.fromURL (get_image,function(img){
    blockimage_object = img
    blockimage_object.scaleToWidth(blockimage_width);
    blockimage_object.scaleToHeight(blockimage_height);
    blockimage_object.set({
        top:player_y,left:player_X
    });
    canvas.add(blockimage_object);     
});
}

window.addEventListener("keydown",my_Keydown);

function my_Keydown(e)
{
    keypress = e.keyCode
    console.log(keypress)

    if(e.shiftKey == true && keypress == '80')
    {
        blockimage_width = blockimage_width + 10
        blockimage_height = blockimage_height + 10
        document.getElementById("current_width").innerHTML = blockimage_width;
        document.getElementById("current_height").innerHTML = blockimage_height;
    }

    if(e.shiftKey == true && keypress == '77')
    {
        blockimage_width = blockimage_width - 10
        blockimage_height = blockimage_height - 10
        document.getElementById("current_width").innerHTML = blockimage_width
        document.getElementById("current_height").innerHTML = blockimage_height 
    }
    if(keypress == '37'){
        left()
    }

    if(keypress == '38')
    {
        up()
    }

    if(keypress == '39')
    {
        right()
    }

    if(keypress == '40')
    {
        down()
    }

    if(keypress == '97')
    {
        new_image('wall.jpg')
    }

    if(keypress == '98')
    {
        new_image('ground.png')
    }

    if(keypress == '99')
    {
        new_image('roof.jpg')
    }

    if(keypress == '100')
    {
        new_image('yellow_wall.png')
    }

    if(keypress == '101')
    {
        new_image('light_green.png')
    }

    if(keypress == '102')
    {
        new_image('unique.png')
    }

    if(keypress == '103')
    {
        new_image('dark_green.png')
    }

}

function up()
{
    if(player_y >= 0)   ///player_y should be more than equal to zero
    {
      player_y = player_y - blockimage_height
      canvas.remove(player_object)
      player_update() 
    }

}

function down()
{
    if(player_y <= 500)
    {
       player_y = player_y + blockimage_height
       canvas.remove(player_object)
       player_update()
    }

}

function left()
{
    if(player_X >= 0)
    {
        player_X = player_X - blockimage_width
        canvas.remove(player_object)
        player_update()
    }

}

function right()
{
    if(player_X <= 500)
    {
        player_X = player_X + blockimage_width
        canvas.remove(player_object)
        player_update()
    }
}