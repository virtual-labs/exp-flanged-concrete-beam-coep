


$("#page1Div1").html("");

var w = 600;
var h = 450;
var x = 10;
y = 100;
 var z = x+350;
var conVal;	

 var paper = new Raphael(document.getElementById('page1Div1'));
//  }else{
//var paper = new Raphael(document.getElementById('page2Div2'));	  
//  }
var textl0 = paper.text(z-100,y+193,"");
var width = $(window).width();

	if ($(window).width() < 600) {
		width = $(this).width();

		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	} else {

		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	}
//	
	var color ;
	if(conVal==0){
		color = '#fff';
	}
	
	 var rect1 = paper.rect(x+71,y+85,353,90).attr({'stroke':'#000','stroke-width': 2,'fill':color});
//     var rect2 = paper.rect(x+480,y+85,60,90).attr({'stroke':'#000','stroke-width': 2,'fill':color});
     var rect3 = paper.rect(x+71,y+175,75,50).attr({'stroke':'#000','stroke-width': 2,'fill':color});
     var rect4 = paper.rect(x+349,y+175,75,50).attr({'stroke':'#000','stroke-width': 2,'fill':color});
	
	 var tLin = paper.path("M"+(x+495)+" "+(y+175)+" l 40 0 l 0 -60 l 50 0 l 0 -30 l -140 0 l 0 30 l 50 0 l 0 60").attr({'stroke':'#000','stroke-width': 2,'fill':color});
	  
	 dfarrL = paper.path("M"+(x+445)+" "+(y+70)+" l 140 0").attr({'stroke':'#000','stroke-width': 2});
	 dfarr1 = paper.path("M"+(x+450)+" "+(y+65)+" l 0 10 l -5 -5 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});  
	 dfarr2 = paper.path("M"+(x+580)+" "+(y+65)+" l 0 10 l 5 -5 z")
	 .attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
	 
	 dwarrL1 = paper.path("M"+(x+495)+" "+(y+190)+" l 40 0 ").attr({'stroke':'#000','stroke-width': 2});
	 dwarr11 = paper.path("M"+(x+500)+" "+(y+185)+" l 0 10 l -5 -5 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'}); 
	 dwarr22 = paper.path("M"+(x+530)+" "+(y+185)+" l 0 10 l 5 -5 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});  
    
	  
	 ttxt1 = paper.text(x+510,y+50," b").attr({'font-weight': 'bold','font-size':'18px','stroke':'#f20515'}); 
	 ttxt2 = paper.text(x+520,y+55," f ").attr({'font-weight': 'bold','font-size':'12px','stroke':'#f20515'}); 
  
     
	 ttxt11 = paper.text(x+515,y+210," b").attr({'font-weight': 'bold','font-size':'18px','stroke':'#f20515'}); 
	 ttxt22 = paper.text(x+527,y+215," w ").attr({'font-weight': 'bold','font-size':'12px','stroke':'#f20515'}); 
   
	  
	 paper.path('M' + (x + 70) + ' ' + (y + 130 )  + 'l 355 0')		
		.attr({ 'stroke-dasharray':  "-.",'stroke': '#a89f8a', 'stroke-width': 2}).toFront();
		
		var ld = paper.path('M' + (x + 70) + ' ' + (y + 115 )  + 'l 355 0')		
		.attr({'stroke': '#2e100a', 'stroke-width': 2}).toFront();
		
	  paper.path('M' + (x + 108) + ' ' + (y + 90 )  + 'l 0 250')
		.attr({ 'stroke-dasharray':  "-.", 'stroke': '#a89f8a','stroke-width': '2'}).toFront();
		
	paper.path('M' + (x + 387) + ' ' + (y + 90 )  + 'l 0 250')
		.attr({ 'stroke-dasharray':  "-.",'stroke': '#a89f8a', 'stroke-width': '2'}).toFront();		
	
	 paper.path('M' + (x + 71) + ' ' + (y + 225 )  + 'l 0 50')
		.attr({ 'stroke-dasharray':  "-.", 'stroke-width': '2','stroke': '#a89f8a'}).toFront();
		
		 paper.path('M' + (x + 146) + ' ' + (y + 225 )  + 'l 0 50')
		.attr({ 'stroke-dasharray':  "-.", 'stroke-width': '2','stroke': '#a89f8a'}).toFront();
		
		 paper.path('M' + (x + 349) + ' ' + (y + 225 )  + 'l 0 50')
		.attr({ 'stroke-dasharray':  "-.", 'stroke-width': '2','stroke': '#a89f8a'}).toFront();
		
		 paper.path('M' + (x + 424) + ' ' + (y + 225 )  + 'l 0 50')
		.attr({ 'stroke-dasharray':  "-.", 'stroke-width': '2','stroke': '#a89f8a'}).toFront();
		
		
	var line1w1 = paper.path("M"+(x+71)+" "+(y+255)+"l 75 0").attr({ 'stroke': '#000', 'stroke-width': 2});

    var w1 = paper.text(x+110,y+270,"w").attr({'font-weight': 'bold','font-size':'18px','stroke':'#f20515'});
	var w112 = paper.text(x+120,y+276,"1 ").attr({'font-weight': 'bold','font-size':'8px','stroke':'#f20515'});   
						
	var arr1 = paper.path("M"+(x+145)+" "+(y+255)+"l -11 -5 l 0 11 z").attr({ 'stroke': '#000', 'stroke-width': 2,'fill': '#000'});
	var arr2 = paper.path("M"+(x+73)+" "+(y+255)+"l 11 5 l 0 -11 z").attr({ 'stroke': '#000', 'stroke-width': 2,'fill': '#000'});
	
	var line1w2 = paper.path("M"+(x+350)+" "+(y+255)+"l 75 0").attr({ 'stroke': '#000', 'stroke-width': 2});
	var arr1 = paper.path("M"+(x+422)+" "+(y+255)+"l -11 -5 l 0 11 z").attr({ 'stroke': '#000', 'stroke-width': 2,'fill': '#000'});
 	var arr2 = paper.path("M"+(x+351)+" "+(y+255)+"l 11 5 l 0 -11 z").attr({ 'stroke': '#000', 'stroke-width': 2,'fill': '#000'});
    
//	 var w2 = paper.text(x+390,y+270,"w2").attr({'font-weight': 'bold','font-size':'18px','stroke':'#f20515'}); 
	var w2 = paper.text(x+390,y+270,"w").attr({'font-weight': 'bold','font-size':'18px','stroke':'#f20515'});
	var w2c = paper.text(x+400,y+276,"2 ").attr({'font-weight': 'bold','font-size':'8px','stroke':'#f20515'});   
						
	
	
	var lin1 = paper.path("M"+(x+108)+" "+(y+295)+"l 0 30"+"M"+(x+387)+" "+(y+295)+"l 0 30"
	                     +"M"+(x+115)+" "+(y+310)+"l 260 0 ")
    .attr({ 'stroke': '#000', 'stroke-width': 2});
	
	
	
	var arr1 = paper.path("M"+(x+387)+" "+(y+310)+"l -15 -8 l 0 17 z").attr({ 'stroke': '#000', 'stroke-width': 2,'fill': '#000'});
	var arr2 = paper.path("M"+(x+110)+" "+(y+310)+"l 15 8 l 0 -17 z").attr({ 'stroke': '#000', 'stroke-width': 2,'fill': '#000'});
     t1 = paper.text(z-100,y+300,"L").attr({'font-weight': 'bold','font-size':'18px','stroke':'#f20515'});
     
     var linlx = paper.path("M"+(x+150)+" "+(y+190)+"l 0 0"+"M"+(x+345)+" "+(y+190)+"l 0 0"
	                     +"M"+(x+158)+" "+(y+203)+"l 182 0")
    .attr({ 'stroke': '#000', 'stroke-width': 2});
    
    var arr1 = paper.path("M"+(x+347)+" "+(y+203)+"l -10 -7 l 0 15 z").attr({ 'stroke': '#000', 'stroke-width': 2,'fill': '#000'});
	var arr2 = paper.path("M"+(x+148)+" "+(y+203)+"l 10 7 l 0 -15 z").attr({ 'stroke': '#000', 'stroke-width': 2,'fill': '#000'});
    // t1 = paper.text(z-100,y+255,"L").attr({'font-weight': 'bold','font-size':'15px'});
      textl0 = paper.text(z-100,y+193,"Lo").attr({'font-weight': 'bold','font-size':'18px','stroke':'#f20515'});
     
      var t11 = paper.text(x+443,y+175,"B").attr({'font-weight': 'bold','font-size':'15px'});
        var t2 = paper.text(x+55,y+175,"A").attr({'font-weight': 'bold','font-size':'15px'}); 
//        var t5 = paper.text(x+510,y+185,"b").attr({'font-weight': 'bold','font-size':'15px'});
//        var t6 = paper.text(x+550,y+140,"D").attr({'font-weight': 'bold','font-size':'15px'});
	
    
	
	var l = paper.path("M"+(x+71.5)+" "+(y+85)+"l 0 -45 l 353 0 l 0 45").attr({'stroke':'#000','stroke-width': 2});
    var l1 = paper.path("M"+(x+107)+" "+(y+40)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l2 = paper.path("M"+(x+107)+" "+(y+82)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
	
	var l3 = paper.path("M"+(x+142)+" "+(y+40)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l4 = paper.path("M"+(x+142)+" "+(y+82)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l5 = paper.path("M"+(x+177)+" "+(y+40)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l6 = paper.path("M"+(x+177)+" "+(y+82)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l7 = paper.path("M"+(x+212)+" "+(y+40)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l8 = paper.path("M"+(x+212)+" "+(y+82)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l9 = paper.path("M"+(x+247)+" "+(y+40)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l10 = paper.path("M"+(x+247)+" "+(y+82)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l11 = paper.path("M"+(x+282)+" "+(y+40)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l12 = paper.path("M"+(x+282)+" "+(y+82)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l13 = paper.path("M"+(x+317)+" "+(y+40)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l14 = paper.path("M"+(x+317)+" "+(y+82)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l15 = paper.path("M"+(x+352)+" "+(y+40)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l16 = paper.path("M"+(x+352)+" "+(y+82)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l17 = paper.path("M"+(x+387)+" "+(y+40)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
   var l18 = paper.path("M"+(x+387)+" "+(y+82)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var t4 = paper.text(x+250,y+28,"w ").attr({'font-weight': 'bold','font-size':'18px','stroke':'#f20515'});
	var t5 = paper.text(x+261,y+32,"u ").attr({'font-weight': 'bold','font-size':'12px','stroke':'#f20515'});

	
	function change(){
	
	
	 if (conVal == 10){
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
	
	  rect1 = paper.rect(x+71,y+85,353,90).attr({'stroke':'#000','stroke-width': 2,'fill':color});
//      rect2 = paper.rect(x+480,y+85,60,90).attr({'stroke':'#000','stroke-width': 2,'fill':color});
      rect3 = paper.rect(x+71,y+175,75,50).attr({'stroke':'#000','stroke-width': 2,'fill':color});
      rect4 = paper.rect(x+349,y+175,75,50).attr({'stroke':'#000','stroke-width': 2,'fill':color});
	 	  tLin = paper.path("M"+(x+495)+" "+(y+175)+" l 40 0 l 0 -60 l 50 0 l 0 -30 l -140 0 l 0 30 l 50 0 l 0 60").attr({'stroke':'#000','stroke-width': 2,'fill':color});
      
      
      
	   paper.path('M' + (x + 70) + ' ' + (y + 130 )  + 'l 355 0')		
		.attr({ 'stroke-dasharray':  "-.",'stroke': '#a89f8a', 'stroke-width': 2}).toFront();
		
		 ld = paper.path('M' + (x + 70) + ' ' + (y + 115 )  + 'l 355 0')		
		.attr({'stroke': '#2e100a', 'stroke-width': 2}).toFront();
		
	  paper.path('M' + (x + 108) + ' ' + (y + 90 )  + 'l 0 138')
		.attr({ 'stroke-dasharray':  "-.", 'stroke-width': '2', 'stroke':'#8a8182'}).toFront();
		
	paper.path('M' + (x + 387) + ' ' + (y + 90 )  + 'l 0 138')
		.attr({ 'stroke-dasharray':  "-.", 'stroke-width': '2', 'stroke':'#8a8182' }).toFront();	   
     
	 
     
	}
    
    var w11e = paper.text(x+120,y+270,"");
    
	function getValuesEntered(){
		textl0.remove();
		w1.remove();
		w112.remove();
	    w11e.remove();
		w2.remove();
		t4.remove();
		t5.remove();
		t66.remove();
		w2c.remove();
	     wwc.remove();
		
		t12 = paper.text(z-90,y+193,"Lo : "+beamSpanVal+"m").attr({'font-weight': 'bold','font-size':'18px','stroke':'#f20515'});

        w1 = paper.text(x+80,y+270,"w ").attr({'font-weight': 'bold','font-size':'16px','stroke':'#f20515'});
	    w112 = paper.text(x+88,y+276,"1 ").attr({'font-weight': 'bold','font-size':'8px','stroke':'#f20515'});                 
      	w11e = paper.text(x+120,y+270," : "+w1WidthVal+" m").attr({'font-weight': 'bold','font-size':'16px','stroke':'#f20515'});

         w2 = paper.text(x+360,y+270,"w").attr({'font-weight': 'bold','font-size':'16px','stroke':'#f20515'});
	 w2c = paper.text(x+369,y+274,"2 ").attr({'font-weight': 'bold','font-size':'8px','stroke':'#f20515'});   
	 wwc = paper.text(x+405,y+270," : "+w2WidthVal+" m").attr({'font-weight': 'bold','font-size':'16px','stroke':'#f20515'});			
 

		t4 = paper.text(x+210,y+28,"w "+loadMagVal+"kN/m").attr({'font-weight': 'bold','font-size':'18px','stroke':'#f20515'});
		 t5 = paper.text(x+220,y+32,"u ").attr({'font-weight': 'bold','font-size':'12px','stroke':'#f20515'});
		 t66 = paper.text(x+271,y+28," : "+loadMagVal+" kN/m").attr({'font-weight': 'bold','font-size':'18px','stroke':'#f20515'});

	} 
	
	
	function updateBeamSpanVal(){
		textl0.remove();
		beamSpanVal = $("#beamSpan").val();
		textl0 = paper.text(z-90,y+193,"Lo : "+beamSpanVal+" m").attr({'font-weight': 'bold','font-size':'18px','stroke':'#f20515'});

	}

var t66 = paper.text(x+270,y+28," ");
    function updateLoadMag(){
			t4.remove();
			t5.remove();
			t66.remove();
		loadMagVal = $("#loadMag").val();
         t4 = paper.text(x+210,y+28,"w ").attr({'font-weight': 'bold','font-size':'18px','stroke':'#f20515'});
		 t5 = paper.text(x+220,y+32,"u ").attr({'font-weight': 'bold','font-size':'12px','stroke':'#f20515'});
		 t66 = paper.text(x+270,y+28," : "+loadMagVal+" kN/m").attr({'font-weight': 'bold','font-size':'18px','stroke':'#f20515'});

}
 
 function updateValW1(){
	w1.remove();
	w112.remove();
	w11e.remove();
	
    w1WidthVal = $("#w1Width").val();
  
        w1 = paper.text(x+80,y+270,"w ").attr({'font-weight': 'bold','font-size':'16px','stroke':'#f20515'});
	    w112 = paper.text(x+88,y+276,"1 ").attr({'font-weight': 'bold','font-size':'8px','stroke':'#f20515'});                 
      	w11e = paper.text(x+120,y+270," : "+w1WidthVal+" m").attr({'font-weight': 'bold','font-size':'16px','stroke':'#f20515'});

}
 
 var wwc = paper.text(x+420,y+270,"");
 
 function updateValW2(){
	w2.remove();
	w2c.remove();
	wwc.remove();
	
    w2WidthVal = $("#w2Width").val();
//	w2 = paper.text(x+390,y+270,"w2 : "+w2WidthVal+"m").attr({'font-weight': 'bold','font-size':'16px','stroke':'#f20515'});

     w2 = paper.text(x+360,y+270,"w").attr({'font-weight': 'bold','font-size':'16px','stroke':'#f20515'});
	 w2c = paper.text(x+369,y+274,"2 ").attr({'font-weight': 'bold','font-size':'8px','stroke':'#f20515'});   
	 wwc = paper.text(x+405,y+270," : "+w2WidthVal+" m").attr({'font-weight': 'bold','font-size':'16px','stroke':'#f20515'});			
 

}
 

	  
	   