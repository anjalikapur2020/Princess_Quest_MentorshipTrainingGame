// function preload--- 
//funtion setput--
//function draw--


//levels?? home Screen-- start button.. about the game.. how ??..LOGO
//feedback...pop ups -- health..score..sound



var player, obs,s1,s2,s3,s4,playerimg
var gameState="wait"



function preload(){
//playerimg=loadImage("angryfairy.gif")
playerimgright=loadAnimation("wright/w1.png","wright/w2.png","wright/w3.png","wright/w4.png","wright/w5.png","wright/w6.png","wright/w7.png","wright/w8.png","wright/w9.png","wright/w10.png")
playerimgleft=loadAnimation("wleft/w1.png","wleft/w2.png","wleft/w3.png","wleft/w4.png","wleft/w5.png","wleft/w6.png","wleft/w7.png","wleft/w8.png","wleft/w9.png","wleft/w10.png")

s1img=loadImage("slabs/b3.png")
s2img=loadImage("slabs/b4.png")
s3img=loadImage("slabs/b5.png")
s4img=loadImage("slabs/b7.png")
s5img=loadImage("lava2.png")





}

function setup(){
//runs only 1 .. starting of the codes
createCanvas(windowWidth-35,windowHeight-35)

//var name= createSprite( x position,y position,width,height)
//player
player=createSprite(100,height-150,20,20)
//player.addImage(playerimg)
//player.addImage("variable where image is loaded")
//player.addAnimation("tag name",variable where animation is loaded)

player.addAnimation("rightwalk",playerimgright)
player.addAnimation("leftwalk",playerimgleft)
//scale is to resize
player.scale=0.75



//slabs
s1=createSprite(width/4,height/2,200,10)
s1.addImage(s1img)

//s2=createSprite(width/2,height/2,200,10)
//s2.addImage(s2img)

s2=createSprite(s1.x+150,s1.y,200,10)
s2.addImage(s2img)

s3=createSprite(width/1.5,height/4,200,10)
s3.addImage(s3img)



s4=createSprite(width/2+width/4+100,height/2+height/4,200,10)
s4.addImage(s4img)
//s4.addImage(s5img)
//s4.scale=0.5


//slabs


}

function draw(){

    


    if(gameState==="wait"){
        background("pink")


        if(keyDown("RIGHT_ARROW")){
            player.x=player.x+10
            player.changeAnimation("rightwalk")
        }

        if(keyDown("LEFT_ARROW")){
            player.x=player.x-10
            player.changeAnimation("leftwalk")

        }

    }



//make the player comeback to the scene if going out

    if(player.x<0){
        player.x=width-10
    }

    if(player.x>width){
        player.x=10
    }


    
    drawSprites()

}