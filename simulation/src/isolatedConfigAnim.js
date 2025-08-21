// Create the Raphael canvas

function isolatedAnim(){

$("#page1Div1").html('');

w = 800;
 h = 550;
 
 
	paper = new Raphael(document.getElementById('page1Div1'));

 width = $(window).width();

	if ($(window).width() < 600) {
		width = $(this).width();

		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	} else {

		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	}

var x=100,y=100;

// Draw the footing base (rectangular foundation)
var footingBase = paper.path("M"+(x+40)+" "+(y+340)+"l 500 0 l 0 -100 l -200 0 l 0 -160 l -100 0 "
              +"l 0 160 l -200 0 z")
.attr({
    fill: '#fff',
    stroke: "#000",
    "stroke-width": 2
});

// Draw main bar holder

var mainBarHolder = paper.path("M"+(x+83.5)+" "+(y+272)+" l 0 35"+"M"+(x+86)+" "+(y+309)+" l 400 0"
                                  +"M"+(x+492.5)+" "+(y+272)+" l 0 35").attr({
        stroke: "#000"
    });

// Draw reinforcement bars (horizontal lines in the footing base)
for (let i = 188; i < 600; i += 50) {
    paper.circle(i, 405, 5).attr({
        fill: "#000",
        stroke: "none"
    });
}


//ladder

var ladTop = paper.path("M"+(x+259.5)+" "+(y+20)+"l 0 237 l 60 0 l 0 -237"
              +"M"+(x+259.5)+" "+(y+36)+"l 60 0" +"M"+(x+259.5)+" "+(y+80)+"l 60 0"
              +"M"+(x+259.5)+" "+(y+126)+"l 60 0" +"M"+(x+259.5)+" "+(y+170)+"l 60 0"
              +"M"+(x+259.5)+" "+(y+214)+"l 60 0" 
             ).attr({
        stroke: "#424141"
    });

var arcLeft = paper.path("M" + (x + 260) + " " + (y + 257) + 
                     " A 30 30 0 0 1 " + (x + 235) + " " + (y + 279.5)).attr({
        stroke: "#000"
    });
    
 var lineLeft = paper.path("M"+ (x + 236)+ " " + (y + 279.5)+" l -100 0").attr({
        stroke: "#000"
    });    


var arcRight = paper.path("M" + (x + 319.5) + " " + (y + 257) + 
                     " A 30 30 0 0 0 " + (x + 342) + " " + (y + 280)).attr({
        stroke: "#000"
    });
    
 var lineRight = paper.path("M"+ (x + 342)+ " " + (y + 279.8)+" l 100 0").attr({
        stroke: "#000"
    });  
 
 labels();
 
 function labels(){
	
	var ftBase = paper.text((x+5),y+207,"Footing base").attr({
    font: "18px Arial", fill: "#14336b", stroke: "#51565e", "stroke-width": 0.5});
	
	var ftBaseLine = paper.path("M"+(x+130)+" "+(y+240)+" l -30 -30 l -30 0").attr({
      stroke: "#000", "stroke-width": 1.5});
	
	var mainBar = paper.text((x+100),y+380,"Main bar (both direction)").attr({
    font: "18px Arial", fill: "#14336b", stroke: "#51565e", "stroke-width": 0.5});
    
	var mainBarLine = paper.path("M"+(x+185)+" "+(y+308)+" l -60 60 ").attr({
      stroke: "#000", "stroke-width": 1.5});
    
    var footingNeck = paper.text((x+78),y+70,"Footing neck or column").attr({
    font: "18px Arial", fill: "#14336b", stroke: "#51565e", "stroke-width": 0.5});    
    
    var neckLine =  paper.path("M"+(x+248)+" "+(y+100)+" l -30 -30 l -30 0").attr({
      stroke: "#000", "stroke-width": 1.5}); 
      
    var dowel = paper.text((x+428),y+120," Dowels ").attr({
    font: "18px Arial", fill: "#14336b", stroke: "#51565e", "stroke-width": 0.5});  
      
    var dowelLine =  paper.path("M"+(x+320)+" "+(y+150)+" l 30 -30 l 40 0").attr({
      stroke: "#000", "stroke-width": 1.5}); 
     
     
     var ties = paper.text((x+430),y+54," Ties ").attr({
    font: "18px Arial", fill: "#14336b", stroke: "#51565e", "stroke-width": 0.5});
      
     var tieLine =  paper.path("M"+(x+282)+" "+(y+126)+" l 70 -70 l 50 0").attr({
      stroke: "#000", "stroke-width": 1.5});  
         
      
}
 
 
 
function colorSet(){
	
	$("#page1Div1").html('');
	
	w = 800;
 h = 550;
 
 
	paper = new Raphael(document.getElementById('page1Div1'));

 width = $(window).width();

	if ($(window).width() < 600) {
		width = $(this).width();

		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	} else {

		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	}

var x=100,y=100;
	
	labels();
	
if(conVal == 0){
			color = '#fff';
		}else if (conVal == 10){
			color = '#dfe6df';
	}else if (conVal == 15){
		color = '#d7ded7';
	}else if (conVal == 20){
		color = '#bdbfbd';
	}else if (conVal == 25){
		color = '#bbbdbb';
	}else if (conVal == 30){
		color = '#b6b8b6';
	}else if (conVal == 35){
		color = '#a6aba6';
	}else if (conVal == 40){
		color = '#9b9e9b';
	}else if (conVal == 45){
		color = '#878c87';
	}else if (conVal == 50){
		color = '#737873';
	}else if (conVal == 55){
		color = '#616661';
	}else if (conVal == 60){
		color = '#525952';
	}else if (conVal == 65){
		color = '#4a4f4a';
	}else if (conVal == 70){
		color = '#3f453f';
	}else if (conVal == 75){
		color = '#374037';
	}else if (conVal == 80){
		color = '#3a453a';
	}
    footingBase = paper.path("M"+(x+40)+" "+(y+340)+"l 500 0 l 0 -100 l -200 0 l 0 -160 l -100 0 "
              +"l 0 160 l -200 0 z")
.attr({
    fill: color,
    stroke: "#000",
    "stroke-width": 2
});

// Draw main bar holder

var mainBarHolder = paper.path("M"+(x+83.5)+" "+(y+272)+" l 0 35"+"M"+(x+86)+" "+(y+309)+" l 400 0"
                                  +"M"+(x+492.5)+" "+(y+272)+" l 0 35").attr({
        stroke: "#000"
    });

// Draw reinforcement bars (horizontal lines in the footing base)
for (let i = 188; i < 600; i += 50) {
    paper.circle(i, 405, 5).attr({
        fill: "#000",
        stroke: "none"
    });
}


//ladder

var ladTop = paper.path("M"+(x+259.5)+" "+(y+20)+"l 0 237 l 60 0 l 0 -237"
              +"M"+(x+259.5)+" "+(y+36)+"l 60 0" +"M"+(x+259.5)+" "+(y+80)+"l 60 0"
              +"M"+(x+259.5)+" "+(y+126)+"l 60 0" +"M"+(x+259.5)+" "+(y+170)+"l 60 0"
              +"M"+(x+259.5)+" "+(y+214)+"l 60 0" 
             ).attr({
        stroke: "#000"
    });

var arcLeft = paper.path("M" + (x + 260) + " " + (y + 257) + 
                     " A 30 30 0 0 1 " + (x + 235) + " " + (y + 279.5)).attr({
        stroke: "#000"
    });
    
 var lineLeft = paper.path("M"+ (x + 236)+ " " + (y + 279.5)+" l -100 0").attr({
        stroke: "#000"
    });    


var arcRight = paper.path("M" + (x + 319.5) + " " + (y + 257) + 
                     " A 30 30 0 0 0 " + (x + 342) + " " + (y + 280)).attr({
        stroke: "#000"
    });
    
 var lineRight = paper.path("M"+ (x + 342)+ " " + (y + 279.8)+" l 100 0").attr({
        stroke: "#000"
    });  
}
}
