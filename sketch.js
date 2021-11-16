const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2, ground3, ground4, ground5, ground6, polygon, slingshot, constrainedPoint;
var box100, box200, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16;
var box17, box18, box19, box20, box21, box22, box23, box24, box25;

var backgroundImg;

var bg = "lightBackground.png"

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1300,600);
    engine = Engine.create();
    world = engine.world;

   
    
    ground1 = new Ground(600, 380, 400, 20);
    ground2 = new Ground(1100, 240, 300, 20);
    ground3 = new Ground(650, 590, 2000, 20);
    ground4 = new Ground(650, 10, 1300, 20);
    ground5 = new Ground(10, 300, 20, 600);
    ground6 = new Ground(1290, 300, 20, 600);
    
    box1 = new Bluebox(500, 340, 40, 40);
    box2 = new Bluebox(540, 340, 40, 40);
    box3 = new Bluebox(580, 340, 40, 40);
    box4 = new Bluebox(620, 340, 40, 40);
    box5 = new Bluebox(660, 340, 40, 40);
    box6 = new Bluebox(700, 340, 40, 40);
    box7 = new Bluebox(740, 340, 40, 40);
    box8 = new Pinkbox(540, 300, 40, 40);
    box9 = new Pinkbox(580, 300, 40, 40);
    box10 = new Pinkbox(620, 300, 40, 40);
    box11 = new Pinkbox(660, 300, 40, 40);
    box12 = new Pinkbox(700, 300, 40, 40);
    box13 = new Greenbox(580, 260, 40, 40);
    box14 = new Greenbox(620, 260, 40, 40);
    box15 = new Greenbox(660, 260, 40, 40);
    box16 = new Whitebox(620, 220, 40, 40);
    box17 = new Whitebox(1000, 200, 40, 40);
    box18 = new Whitebox(1040, 200, 40, 40);
    box19 = new Whitebox(1080, 200, 40, 40);
    box20 = new Whitebox(1120, 200, 40, 40);
    box21 = new Whitebox(1160, 200, 40, 40);
    box22 = new Purplebox(1040, 160, 40, 40);
    box23 = new Purplebox(1080, 160, 40, 40);
    box24 = new Purplebox(1120, 160, 40, 40);
    box25 = new Greenbox(1080, 120, 40, 40);

    //constrainedPoint = new Ground(200, 200, 2, 2);
     polygon = new Polygon(80, 80);
    slingshot = new Slingshot(polygon.body, {x:200, y:300});

    
    
    polygon.x = mouseX;
    polygon.y = mouseY
}

function draw(){
    background(0);
    Engine.update(engine);

   
    
    ground1.display();
    ground2.display();
    ground3.display();
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();

    //constrainedPoint.display();
     polygon.display();
    slingshot.display();
    
    textSize(20);
    fill("white");
    text("Press space for a second chance to play. ", 20, 30);
    
}

        function mouseDragged(){
            Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
        }


        function mouseReleased(){
            slingshot.fly();
        }

        function keyPressed(){
            if(keyCode === 32){
                slingshot.attach(polygon.body);

            }
        }


        async function getBackgroundImg(){ 
            var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata"); 
            console.log(response);
             var responseJSON = await response.json();
             console.log(responseJSON);
              var dateTime = responseJSON.datetime 
              console.log(dateTime);
               var hour = dateTime.slice(11,13);
                console.log(hour);
                console.log("hour: "+hour)
                if(hour>=6 && hour <=19){
                     bg = "lightBackground.png" ;
                } 
                else{ 
                    bg = "darkBackground.png" ; 
            } 
            backgroundImg = loadImage(bg); 
            console.log(backgroundImg); 
        }

        