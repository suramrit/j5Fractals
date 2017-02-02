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


//branch obj.. start end display function.. 

var angle = 0;
var slider;
var tree = [];
var count = 0;
var leaves = [];

function setup(){
	createCanvas(800,800); //bckgrnd
	slider = createSlider(0,TWO_PI,PI/2,0.01);
	var a = createVector(width/2, height);
	var b = createVector(width/2,height-100);
	var rut = new branch(a,b);
	tree[0] = rut;

}

function mousePressed(){

	for(var i=tree.length-1; i>=0; i--){
		if(!tree[i].finished){
		tree.push(tree[i].brnchA());
		tree.push(tree[i].brnchB());}
		tree[i].finished=true;
	};
	//tree[1] = tree[0].brnchA();
	//tree[2] = tree[0].brnchB();
	count++;
	if(count===6){
		for(var i=0; i<tree.length; i++){
				if(!tree[i].finished){
					var leaf = (tree[i].end.copy());
					leaves.push(leaf);
				}
		}
	}
}

function draw(){
	background(50);
	for(var i=0;i<tree.length;i++)
	{
		tree[i].show();
		//tree[i].jitter();
	}

	for(var i=0;i<leaves.length;i++)
	{
		fill(255,0,100,1000);
		noStroke();
		ellipse(leaves[i].x, leaves[i].y, 8,8);
		//leaves[i].y += random(0,1);

		//tree[i].jitter();
	}
	//angle = slider.value();

	/*stroke(230);
	translate(400,height);
	branch(250);*/
	 //trunk..
	  
}

/*function branch(len){
	
	line(0,0, 0, -len);
	translate(0,-len);
	if(len>2){
	push();
	rotate(angle);
	branch(len*0.68);
	pop();
	push();
	rotate(-angle);
	branch(len*0.68);
	pop();
	}
	//line(0,0,0,-len * 0.67);
}*/