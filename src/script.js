console.log('sketch file loaded')

const s = (sketch) => {

   sketch.setup = () => {
    console.log('sketch started')
    let h = document.body.clientHeight;
    let c = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
    c.position(0, 0);
    c.style('pointer-events', 'none');
    sketch.clear();
  };

   sketch.draw = () => {
     console.log('sketch looping')
    sketch.stroke(0);
    sketch.strokeWeight(4);
    if (sketch.mouseIsPressed) {
      sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
    }
  };
};

let myp5 = new p5(s);
