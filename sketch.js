//needs recursive definition.. 
//n! = n * (n-1)!

//visual--
//branch -- beg has begin and has 2 branches attached (recursive) 
/*      
		
	\	 /
	 \	/
	  \/
	   |
b --   |
	   |
needs treminating condition
*/
var angle = 0;
var slider;

function setup(){
	createCanvas(800,800); //bckgrnd
	slider = createSlider(0,TWO_PI,PI/2,0.01);
}

function draw(){
	background(50);
	angle = slider.value();
	stroke(225);
	translate(400,height);
	branch(250);
	 //trunk.. 
}

function branch(len){
	
	line(0,0, 0, -len);
	translate(0,-len);
	if(len>2){
	push();
	rotate(angle);
	branch(len*0.72);
	pop();
	push();
	rotate(-angle);
	branch(len*0.60);
	pop();
	}
	//line(0,0,0,-len * 0.67);
}