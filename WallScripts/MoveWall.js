#pragma strict
	var box : GameObject;
	var upBox: boolean;
	var upInt: int;
	var downInt: int;
	var moving: boolean;
	box = GameObject.Find("moveCube");
	moving = false;
	upInt = 0;
	downInt = 0;

function Run() {
		box = GameObject.Find("moveCube");
		if(box.transform.position.y == 10)
			upBox = true;
	    if(!upBox && !moving) {
	    	upInt = 10; 
	    	moving = true; 
	    	}
	    if(upBox && !moving){
	    	downInt = 10;
	    	moving = true;   
	    	}
	    if(!upBox && moving)
	    	Up(upInt);
	    if(upBox && moving)
	    	Down(downInt);
  }
            
function Up(x){
	if(box.transform.position.y < 10){
		transform.Translate(Vector3.up*2);
		upInt--;	
		}
	if(box.transform.position.y == 10){
		upBox = true;
		moving = false;
		}
	if(upInt > 1)
		Run();
	  }

function Down(y){
	if(box.transform.position.y > -10){
			transform.Translate(Vector3.down*2);
			downInt--;
		}	
	if(box.transform.position.y == -10){
		upBox = false;
		moving = false;
   	}
   	if(downInt > 1)
   		Run();
}