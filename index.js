<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>About rabits!!!!!</title>
        <style>
        body{
           background-color:gold;
            
        }
        h2 {
            color: rgb(0, 232, 15);
        }  
        
        #rabbits-info-heading {
            background-color: purple;
           font-weight: bold; 
         text-decoration: underline;
        }
        
        p {
            color: rgb(191, 0, 255);
            font-family: "Helvetica", sans-serif;
        }
        
        .song-lyrics {
             background-color: yellow;
            font-family: fantasy;
            font-size: 13px;
            font-style: italic;
            line-height: 1.5em;
            text-align: center;
        }
        a{
            text-decoration:none;
          }
          td{
             color:red; 
             text-decoration:underline;
             font-family: fantasy;
            font-size: 19px;
            font-style: italic;
            line-height: 1.5em;
            text-align: center;
          }
          th{
           font-family:Helvetica ;
            font-size: 19px;
            font-style: italic;
            line-height: 1.5em;
            text-align: center;   
             
              
          }
        </style>
    </head>
    <body>
<h1>ADNAN SAMI WEBPAGE
    
</h1>
    <h1>All about rabbits!</h1>
    
    <h2 id="rabbits-info-heading">Basic info</h2>
    
    <p>Rabbits are little creatures with long ears and puffy tails, and they move their nose up and down in an adorable way. They eat the most orange vegetables in <em>our</em> world, and <strong>they reproduce more than any human <em>ever</em> has</strong>.</p>
    
    <h2>Songs</h2>
   <img src="https://www.kasandbox.org/programming-images/landscapes/beach-in-hawaii.png" width="273">
    <p class="song-lyrics">Little Bunny Foo Foo, <br>
I don't want to see you <br>
scooping up the field mice <br>
and bopping them on the head!</p>
    
    <p class="song-lyrics">And down came the Good Fairy <br>
And she said <br>
"Little bunny Foo Foo <br>
I don't like you're attitude <br>
Scooping up the field mice <br>
And bopping 'em on the head" <br>
    </p>
    
    <p class="song-lyrics">I'll give you 3 chances. <br>
Then I'll turn you into a goon! <br>
The next day…</p>
    
    <img src="https://www.kasandbox.org/programming-images/animals/rabbit.png" alt="Rabbit with lop ears in barn" width="203"> 
    
    <h3>Why rabbits make great pets</h3>
    
    <ul>
        <li>They're furry!</li>
        <li>Great listeners!</li>
        <li>Eat all your leftover carrots!</li>
    </ul>
    
    <h3>Top 3 most famous rabbits</h3>
    
    <ol>
        <li>Bugs bunny</li>
        <li>Easter Bunny</li>
        <li>Thumper</li>
    </ol>
    <table>
        <thead>
            <tr>
                <td>color</td>
                <td>country</td>
                <td>live</td>
            </tr>
        </thead>
        <tbody>
          <tr>
             <th>white</th> 
             <th>Bangladesh</th> 
              <th>Hole</th>
              
              
          </tr>  
            
            
            
        </tbody>
    </table>
    
    </body>
</html>
var Beaver = function(x, y) {
    this.x = x;
    this.y = y;
    this.img = getImage("creatures/Hopper-Happy");
    this.sticks = 0;
};

Beaver.prototype.draw = function() {
    fill(255, 0, 0);
    this.y = constrain(this.y, 0, height-50);
    image(this.img, this.x, this.y, 40, 40);
};

Beaver.prototype.hop = function() {
    this.img = getImage("creatures/Hopper-Jumping");
    this.y -= 5;
};

Beaver.prototype.fall = function() {
    this.img = getImage("creatures/Hopper-Happy");
    this.y += 5;
};

Beaver.prototype.checkForStickGrab = function(stick) {
    if ((stick.x >= this.x && stick.x <= (this.x + 40)) &&
        (stick.y >= this.y && stick.y <= (this.y + 40))) {
        stick.y = -400;
        this.sticks++;
    }
};

var Stick = function(x, y) {
    this.x = x;
    this.y = y;
};

Stick.prototype.draw = function() {
    fill(89, 71, 0);
    rectMode(CENTER);
    rect(this.x, this.y, 5, 40);
};

var beaver = new Beaver(200, 300);

var sticks = [];
for (var i = 0; i < 40; i++) {  
    sticks.push(new Stick(i * 40 + 300, random(20, 260)));
}

var grassXs = [];
for (var i = 0; i < 25; i++) { 
    grassXs.push(i*20);
}

draw = function() {
    
    // static
    background(227, 254, 255);
    fill(130, 79, 43);
    rectMode(CORNER);
    rect(0, height*0.90, width, height*0.10);
    
    for (var i = 0; i < grassXs.length; i++) {
        image(getImage("cute/GrassBlock"), grassXs[i], height*0.85, 20, 20);
        grassXs[i] -= 1;
        if (grassXs[i] <= -20) {
            grassXs[i] = width;
        }
    }
    
    for (var i = 0; i < sticks.length; i++) {
        sticks[i].draw();
        beaver.checkForStickGrab(sticks[i]);
        sticks[i].x -= 1;
    }
    
    textSize(18);
    text("Score: " + beaver.sticks, 20, 30);
    
    if (beaver.sticks/sticks.length >= 0.95) {
        textSize(36);
        text("YOU WIN!!!!", 100, 200);
    }
    
    if (keyIsPressed && keyCode === 0) {
        beaver.hop();
    } else {
        beaver.fall();
    }
    beaver.draw();
};
