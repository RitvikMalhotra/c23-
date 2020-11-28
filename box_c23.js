class box_c23{
constructor(x,y,width,height){
var options = {
 restitution: 0.4

}
this.x = x;
this.y = y;
this.width = width;
this.height = height;

this.body = Bodies.rectangle(x,y,width,height);
World.add(world,this.body);
}

display(){
rect(this.x,this.y,this.width,this.height);

}

}

