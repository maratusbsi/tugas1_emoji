function setup() {
    // put setup code here
    createCanvas(700,350);
    y=230;
    j=0;
}
function draw() {
    background(220);
    line(349, 0, 349, 349);

    fill(255, 255, 0);
    ellipse(200, 200, 190, 190);

    fill(0, 0, 0);
    ellipse(160, 170, 30, 30);
    ellipse(240, 170, 30, 30);
    line(220, 230, 180, 230);

//gambar sebelah kiri
    fill(255, 255, 0);
    ellipse(550, 200, 190, 190);
//mata
    fill(0, 0, 0)
    ellipse(510, 170, 30, 30);
    ellipse(590, 170, 30, 30);

    var y= 230 +30*Math.sin(PI/10*j)
    j+=1
    line(570,y, 530, 230);

    
} ,