#pragma strict
	var up : int;
	var box : GameObject;
	var index : float;
	var upBox: boolean;
	var upInt: int;
	var downInt: int;
	var pressed: boolean;
	upBox = false;
	box = GameObject.Find("moveCube");
	upInt = 0;
	downInt = 0;

function Test() {

	    if(upBox){
	    	upInt = 10;
	    	}
	    else if(!upBox){
	    	downInt = 10;
	    	Debug.Log("downInt " + downInt);
	    	}
	    if(upInt > -1 && upBox)
	    	Up(upInt);
	    if(downInt > -1 && !upBox){
	    	Debug.Log("reached down if");
	    	Down(downInt);
	    	}
  }
            
function Up(x){
	if(box.transform.position.y < 10){
		transform.Translate(Vector3.up*2);
		upInt--;	
		}
	else if(box.transform.position.y == 10){
		upBox = true;
		Debug.Log("up");
    	//box.GetComponent.<Renderer>().material.color = Color.grey;
	    pressed = false;
	  }
}
function Down(y){
Debug.Log(box.transform.position.y);
if(box.transform.position.y > -10){
		transform.Translate(Vector3.down*2);
		downInt--;
		Debug.Log("reached Down()");
	}	
else if(box.transform.position.y == -10){
	upBox = false;
	Debug.Log("down");	
    //box.GetComponent.<Renderer>().material.color = Color.red;
    pressed = false;
   }
}