Some basic shapes for use in creative coding:


  drawStar(200, 200, 20, 10, 5, 87, '#FFD700'); // x, y, outer radius, inner radius, points, rotation, colour
  
  drawCircle(100, 100, 60, '#000000','#00ff00', 45); // x,y, radius, colour1, colour2, rotation
  
  drawPie(300,300,50,12,'#000000', '#0000ff'); // x,y, radius, segments, colour1, colour2
  
  
  drawDottedCircle(200,50,50, '#ff0000','#0000004D');
  //use: drawScratchedCircle(x,y,r, ellipseColour, scratchColour)
  
  
  drawScratchedCircle(100,300,50,45,'#ff0000','#0000004D');
  //use: drawScratchedCircle2(x,y,rc,scratchAngleARG,ellipseColour, scratchColour)
  
  
  drawSwirl(300,100, 100, 10, 5, '#000000', '#ff0000',0.5, 200);
  // use: drawSwirl(cx, cy, maxRadius, turns, step, ellipseColour, swirlColour, scaleSize, rotateAngle)
  
  
  //symbolAngle += 0.01; 
  drawYinYang(45, 30, 40, 0); // change 0 to symbolAngle if you want it to rotate);
  
  
  wigglyCircle(200,320,50,9, '#ff0000');
  //use wigglyCircle(x1,y1,radius, noiseSeed)
  
  // Draw a hexagon at x,y with radius r and colour 
  drawHexagon(60, 200, 60, '#00ff00');
  
  wigglyLine(380, 100, 380, 300, 20, 50, 5, '#ff0000');
 // use: wigglyLine(x1, y1, x2, y2, amp, steps, Weight, colour)
