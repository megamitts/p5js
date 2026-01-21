/* based on code I found ages ago on github somewhere */

let randomColour;
			let randomSize;
			let xPos;
			
			let yPos;
			let i; // counter
			let j; // counter

function setup() {
  createCanvas(400, 400);
  
  noLoop();
  noStroke();
  
}

function draw() {
  background(220, 50);
  
  //Set up random number of circles 
			let randNo = Math.round(Math.random()*20000);
			let count = 0;
			
			while(count < randNo){
			
				randomColour = '#'+(Math.random()*0xFFFFFF<<0).toString(16)+50;  //add translucency at the end
				randomSize = Math.round(Math.random()*50);
				xPos = Math.round(Math.random()*1200);
				yPos = Math.round(Math.random()*800);
				
				
              
              drawSplatter(randomSize, xPos, yPos, randomColour) 
                rotate(count);
				count ++;
				
			}
		
            filter(INVERT);
  
  
  
}

function drawFilledCircle(size,xPos,yPos,colour){
				
                fill(colour)
				circle(xPos,yPos,size);
				
                beginShape();
                vertex(random(xPos), -yPos);
                vertex(xPos+random(size),yPos+size);
                vertex(xPos+size/2,yPos+random(size/2*tan(size))*cos(xPos));
                vertex(xPos*tan(size*cos(yPos),yPos));
                endShape(CLOSE);
				
            
				}

function drawSplatter(size,xPos,yPos,colour){
				for(let j=0;j<10;j++){
					let splatSize = size / Math.round(Math.random()*30);
					drawFilledCircle(splatSize,xPos +
					Math.round(Math.random()*50),yPos + Math.round(Math.random()*50),colour);
				}
			}



