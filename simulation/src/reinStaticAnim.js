
 var deffText1,deffText2;
  var txtD;    

function staticDiag(){
	$("#page4Div2").html('');
 var x=100,y=50;
var paper = new Raphael(document.getElementById('page4Div2'));

var w = 600;
	var h = 450;

	var width = $(window).width();

	if ($(window).width() < 600) {
		width = $(this).width();
//		if(flg==0){
			paper = new Raphael(document.getElementById('page4Div2'), '100%', '100%');
//		}else{
//			paper = new Raphael(document.getElementById('main-div-conf'), '100%', '100%');
//		}
		
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	} else {
//		if(flg==0){
			paper = new Raphael(document.getElementById('page4Div2'), '100%', '100%');
//		}else{
//			paper = new Raphael(document.getElementById('main-div-conf'), '100%', '100%');
//		}
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	}
//	
   var frame = paper.image("images/reinFrame.png",(x+50), (y+30),250, 350);
  var circle1 = paper.circle((x+107),(y+88), 25).attr({'stroke':'#000','fill': '#a19d92','stroke-width': 2});
  var circle2 = paper.circle((x+240),(y+88), 25).attr({'stroke':'#000','fill': '#a19d92','stroke-width': 2});
  
  var circle3 = paper.circle((x+107),(y+318), 25).attr({'stroke':'#000','fill': '#a19d92','stroke-width': 2});
  var circle4 = paper.circle((x+240),(y+318), 25).attr({'stroke':'#000','fill': '#a19d92','stroke-width': 2});
  
  var dline = paper.path("M"+(x+39)+" "+(y+40)+" l 0 330").attr({'stroke':'#000','stroke-width': 1});
  var arD = paper.path("M"+(x+40)+" "+(y+45)+" l 10 0 l -11 -11 l -11 11 z").attr({'stroke':'#000','stroke-width': 1,'fill':'#000'});
  var arDL = paper.path("M"+(x+40)+" "+(y+358)+" l 10 0 l -11 11 l -11 -11 l 10 0").attr({'stroke':'#000','stroke-width': 1,'fill':'#000'});
  
  var dline1 = paper.path("M"+(x+311)+" "+(y+40)+" l 0 275").attr({'stroke':'#000','stroke-width': 1});
  var arD1 = paper.path("M"+(x+312)+" "+(y+45)+" l 10 0 l -11 -11 l -11 11 z").attr({'stroke':'#000','stroke-width': 1,'fill':'#000'});
   
  var arD2 = paper.path("M"+(x+312)+" "+(y+306)+" l 10 0 l -11 11 l -11 -11 l 10 0")
   .attr({'stroke':'#000','stroke-width': 1,'fill':'#000'});

    paper.path('M' + (x + 105) + ' ' + (y + 318 )  + 'l 240 0 ')
		.attr({ 'stroke-dasharray':  "- ", 'stroke-width': '2','stroke': '#000'}).toFront();
		
		
    var lin = paper.path("M"+(x+311)+" "+(y+320)+" l 0 50");	
	var a1 = paper.path("M"+(x+312)+" "+(y+330)+" l 10 0 l -11 -11 l -11 11 z").attr({'stroke':'#000','stroke-width': 1,'fill':'#000'});
	var a2 = paper.path("M"+(x+312)+" "+(y+358)+" l 10 0 l -11 11 l -11 -11 l 10 0").attr({'stroke':'#000','stroke-width': 1,'fill':'#000'});
	
	 txtD = paper.text(x+20,y+190,"D").attr({'font-weight': 'bold','font-size':'18px','stroke':'#f20515'});
     deffText1 = paper.text(x+325,y+190,"d").attr({'font-weight': 'bold','font-size':'18px','stroke':'#f20515'});
     deffText2 = paper.text(x+340,y+195,"eff").attr({'font-weight': 'bold','font-size':'14px','stroke':'#f20515'});
    var textd1 = paper.text(x+380,y+345,"d' = "+effectCover+" mm").attr({'font-weight': 'bold','font-size':'18px','stroke':'#f20515'});
    var txtb = paper.text(x+175,y+5,"b = "+bfVal+" mm").attr({'font-weight': 'bold','font-size':'18px','stroke':'#f20515'}); 

     
 
	var lin1 = paper.path("M"+(x+60)+" "+(y+16)+" l 225 0 ");
	var a11 = paper.path("M"+(x+68)+" "+(y+16)+" l 0 10 l-11 -11 l 11 -11 z").attr({'stroke':'#000','stroke-width': 1,'fill':'#000'});
	var a12 = paper.path("M"+(x+283)+" "+(y+16)+" l 0 10 l 11 -11 l -11 -11 z").attr({'stroke':'#000','stroke-width': 1,'fill':'#000'});

	}
	
function deffVal(){
	
	$("#page4Div2").html('');
	 var x=100,y=50;
var paper = new Raphael(document.getElementById('page4Div2'));

var w = 600;
	var h = 450;

	var width = $(window).width();

	if ($(window).width() < 600) {
		width = $(this).width();
//		if(flg==0){
			paper = new Raphael(document.getElementById('page4Div2'), '100%', '100%');
//		}else{
//			paper = new Raphael(document.getElementById('main-div-conf'), '100%', '100%');
//		}
		
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	} else {
//		if(flg==0){
			paper = new Raphael(document.getElementById('page4Div2'), '100%', '100%');
//		}else{
//			paper = new Raphael(document.getElementById('main-div-conf'), '100%', '100%');
//		}
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	}
//	
   var frame = paper.image("images/reinFrame.png",(x+50), (y+30),250, 350);
  var circle1 = paper.circle((x+107),(y+88), 25).attr({'stroke':'#000','fill': '#a19d92','stroke-width': 2});
  var circle2 = paper.circle((x+240),(y+88), 25).attr({'stroke':'#000','fill': '#a19d92','stroke-width': 2});
  
  var circle3 = paper.circle((x+107),(y+318), 25).attr({'stroke':'#000','fill': '#a19d92','stroke-width': 2});
  var circle4 = paper.circle((x+240),(y+318), 25).attr({'stroke':'#000','fill': '#a19d92','stroke-width': 2});
  
  var dline = paper.path("M"+(x+39)+" "+(y+40)+" l 0 330").attr({'stroke':'#000','stroke-width': 1});
  var arD = paper.path("M"+(x+40)+" "+(y+45)+" l 10 0 l -11 -11 l -11 11 z").attr({'stroke':'#000','stroke-width': 1,'fill':'#000'});
  var arDL = paper.path("M"+(x+40)+" "+(y+358)+" l 10 0 l -11 11 l -11 -11 l 10 0").attr({'stroke':'#000','stroke-width': 1,'fill':'#000'});
  
  var dline1 = paper.path("M"+(x+311)+" "+(y+40)+" l 0 275").attr({'stroke':'#000','stroke-width': 1});
  var arD1 = paper.path("M"+(x+312)+" "+(y+45)+" l 10 0 l -11 -11 l -11 11 z").attr({'stroke':'#000','stroke-width': 1,'fill':'#000'});
   
  var arD2 = paper.path("M"+(x+312)+" "+(y+306)+" l 10 0 l -11 11 l -11 -11 l 10 0")
   .attr({'stroke':'#000','stroke-width': 1,'fill':'#000'});

    paper.path('M' + (x + 105) + ' ' + (y + 318 )  + 'l 240 0 ')
		.attr({ 'stroke-dasharray':  "- ", 'stroke-width': '2','stroke': '#000'}).toFront();
		
		
    var lin = paper.path("M"+(x+311)+" "+(y+320)+" l 0 50");	
	var a1 = paper.path("M"+(x+312)+" "+(y+330)+" l 10 0 l -11 -11 l -11 11 z").attr({'stroke':'#000','stroke-width': 1,'fill':'#000'});
	var a2 = paper.path("M"+(x+312)+" "+(y+358)+" l 10 0 l -11 11 l -11 -11 l 10 0").attr({'stroke':'#000','stroke-width': 1,'fill':'#000'});
	
	 txtD = paper.text(x+20,y+190,"D").attr({'font-weight': 'bold','font-size':'18px','stroke':'#f20515'});
     deffText1 = paper.text(x+325,y+190,"d").attr({'font-weight': 'bold','font-size':'18px','stroke':'#f20515'});
     deffText2 = paper.text(x+340,y+195,"eff").attr({'font-weight': 'bold','font-size':'14px','stroke':'#f20515'});
     var deffTxt = paper.text(x+410,y+190," = "+dVal+" mm").attr({'font-weight': 'bold','font-size':'18px','stroke':'#f20515'});
    var textd1 = paper.text(x+380,y+345,"d' = "+effectCover+" mm").attr({'font-weight': 'bold','font-size':'18px','stroke':'#f20515'});
    var txtb = paper.text(x+175,y+5,"b = "+bfVal+" mm").attr({'font-weight': 'bold','font-size':'18px','stroke':'#f20515'}); 

     
 
	var lin1 = paper.path("M"+(x+60)+" "+(y+16)+" l 225 0 ");
	var a11 = paper.path("M"+(x+68)+" "+(y+16)+" l 0 10 l-11 -11 l 11 -11 z").attr({'stroke':'#000','stroke-width': 1,'fill':'#000'});
	var a12 = paper.path("M"+(x+283)+" "+(y+16)+" l 0 10 l 11 -11 l -11 -11 z").attr({'stroke':'#000','stroke-width': 1,'fill':'#000'});

	
//    
		
	}
	
	
	
	function DCalculateVal(){
		$("#page4Div2").html('');
	 var x=100,y=50;
var paper = new Raphael(document.getElementById('page4Div2'));

var w = 600;
	var h = 450;

	var width = $(window).width();

	if ($(window).width() < 600) {
		width = $(this).width();
//		if(flg==0){
			paper = new Raphael(document.getElementById('page4Div2'), '100%', '100%');
//		}else{
//			paper = new Raphael(document.getElementById('main-div-conf'), '100%', '100%');
//		}
		
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	} else {
//		if(flg==0){
			paper = new Raphael(document.getElementById('page4Div2'), '100%', '100%');
//		}else{
//			paper = new Raphael(document.getElementById('main-div-conf'), '100%', '100%');
//		}
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	}
//	
   var frame = paper.image("images/reinFrame.png",(x+50), (y+30),250, 350);
  var circle1 = paper.circle((x+107),(y+88), 25).attr({'stroke':'#000','fill': '#a19d92','stroke-width': 2});
  var circle2 = paper.circle((x+240),(y+88), 25).attr({'stroke':'#000','fill': '#a19d92','stroke-width': 2});
  
  var circle3 = paper.circle((x+107),(y+318), 25).attr({'stroke':'#000','fill': '#a19d92','stroke-width': 2});
  var circle4 = paper.circle((x+240),(y+318), 25).attr({'stroke':'#000','fill': '#a19d92','stroke-width': 2});
  
  var dline = paper.path("M"+(x+39)+" "+(y+40)+" l 0 330").attr({'stroke':'#000','stroke-width': 1});
  var arD = paper.path("M"+(x+40)+" "+(y+45)+" l 10 0 l -11 -11 l -11 11 z").attr({'stroke':'#000','stroke-width': 1,'fill':'#000'});
  var arDL = paper.path("M"+(x+40)+" "+(y+358)+" l 10 0 l -11 11 l -11 -11 l 10 0").attr({'stroke':'#000','stroke-width': 1,'fill':'#000'});
  
  var dline1 = paper.path("M"+(x+311)+" "+(y+40)+" l 0 275").attr({'stroke':'#000','stroke-width': 1});
  var arD1 = paper.path("M"+(x+312)+" "+(y+45)+" l 10 0 l -11 -11 l -11 11 z").attr({'stroke':'#000','stroke-width': 1,'fill':'#000'});
   
  var arD2 = paper.path("M"+(x+312)+" "+(y+306)+" l 10 0 l -11 11 l -11 -11 l 10 0")
   .attr({'stroke':'#000','stroke-width': 1,'fill':'#000'});

    paper.path('M' + (x + 105) + ' ' + (y + 318 )  + 'l 240 0 ')
		.attr({ 'stroke-dasharray':  "- ", 'stroke-width': '2','stroke': '#000'}).toFront();
		
		
    var lin = paper.path("M"+(x+311)+" "+(y+320)+" l 0 50");	
	var a1 = paper.path("M"+(x+312)+" "+(y+330)+" l 10 0 l -11 -11 l -11 11 z").attr({'stroke':'#000','stroke-width': 1,'fill':'#000'});
	var a2 = paper.path("M"+(x+312)+" "+(y+358)+" l 10 0 l -11 11 l -11 -11 l 10 0").attr({'stroke':'#000','stroke-width': 1,'fill':'#000'});
	txtD.remove
	 txtD = paper.text(x-30,y+190,"D = "+overDepthVal+" mm").attr({'font-weight': 'bold','font-size':'18px','stroke':'#f20515'});
     deffText1 = paper.text(x+325,y+190,"d").attr({'font-weight': 'bold','font-size':'18px','stroke':'#f20515'});
     deffText2 = paper.text(x+340,y+195,"eff").attr({'font-weight': 'bold','font-size':'14px','stroke':'#f20515'});
     var deffTxt = paper.text(x+410,y+190," = "+dVal+" mm").attr({'font-weight': 'bold','font-size':'18px','stroke':'#f20515'});
    var textd1 = paper.text(x+380,y+345,"d' = "+effectCover+" mm").attr({'font-weight': 'bold','font-size':'18px','stroke':'#f20515'});
    var txtb = paper.text(x+175,y+5,"b = "+bfVal+" mm").attr({'font-weight': 'bold','font-size':'18px','stroke':'#f20515'}); 

     
 
	var lin1 = paper.path("M"+(x+60)+" "+(y+16)+" l 225 0 ");
	var a11 = paper.path("M"+(x+68)+" "+(y+16)+" l 0 10 l-11 -11 l 11 -11 z").attr({'stroke':'#000','stroke-width': 1,'fill':'#000'});
	var a12 = paper.path("M"+(x+283)+" "+(y+16)+" l 0 10 l 11 -11 l -11 -11 z").attr({'stroke':'#000','stroke-width': 1,'fill':'#000'});

	
//    
		
	}
	
	
	
	
	