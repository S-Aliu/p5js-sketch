console.log('sketch file loaded')

const s = (sketch) => {

   let brushHue = 0;

   sketch.setup = () => {
     document.body.style['userSelect'] = 'none';
     let c = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
     sketch.colorMode(sketch.HSB, 360, 100, 100);
     c.position(0, 0);
     c.style('pointer-events', 'none');
     sketch.clear();
   };

   sketch.draw = () => {
     brushHue = (brushHue + 1) % 360;
     sketch.stroke(brushHue, 50, 80);
     sketch.strokeWeight(4);
     if (sketch.mouseIsPressed) {
       sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
     }
   };
 };

let myp5 = new p5(s);
