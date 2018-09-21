
function makeIcon() {
  let pixelArray = [[],[],[],[],[]];
  let indexCounter = 0;
  random(50);
  pixelArray.forEach(function(A) {
    if(indexCounter > 2) {
      pixelArray[4-indexCounter].slice().forEach(function(B){
        A.push(B);
      });
    } else {
      let counter = 0;
      while (counter<5) {
        let random_boolean = Math.random() >= 0.5;
        A.push(random_boolean)
        counter++;
      }
    }
    indexCounter++;
  });
  let iconColor = color(random(255),random(255),random(255));
  return [pixelArray, iconColor];
}

function showIcon() {
  fill(icon[1]);
  noStroke();
  for(i = 0; i < icon[0].length; i++) {
    for(j = 0; j < icon[0][i].length; j++) {
      if (icon[0][i][j] == true) {
        rect(i*scale+25, j*scale+25, scale, scale);
      }
    }
  }
}

let scale = 0;
icon = null;

function setup() {
  createCanvas(300,300);
  background('#f0f0f0');
  scale = (width-50)/5;

  icon = makeIcon();

  showIcon()
}

function draw() {
}


function mouseClicked() {
  background('#f0f0f0');
  icon = makeIcon();
  showIcon();
}
