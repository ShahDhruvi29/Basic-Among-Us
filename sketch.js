const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var backgroundImg,game;
var imposter,crew1,crew2,crew3;
function preload() {
       backgroundImg = loadImage("Amongy2.jpg");
    enterSound = loadSound("amongy enter.mp3")
    startSound = loadSound("amongy gameStart.mp3")
    playSound  = loadSound("amongy problem.mp3")
    resultSound =loadSound("amongy vote.mp3")
    victorySound=loadSound("amongy wins.mp3")
    losingSound =loadSound("amongy defeat.mp3")
}
function setup(){
     createCanvas(1350,600);
    engine = Engine.create();
    world = engine.world;
    imposter=new Fruit(200,300,60,60)
    crew1=new Brown(600,450,70,70)
    crew2=new Player(1000,450,60,70)
    crew3=new Ghost(1200,350,56,66)
}
function draw(){
    background(backgroundImg);
    textSize(30)
    textFont("cursive")
    fill(0)
    text("Hi, welcome to Among-us cafeteria",550,80)
    Engine.update(engine);
    imposter.display()
    crew1.display()
    crew2.display()
    crew3.display()
}