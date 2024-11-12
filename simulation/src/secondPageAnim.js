function SecondPage(){
	$("#page3Div2").html('');
	var x=50,y=-50;
	var z = x+350;
x=50,y=-100;
	 z = x+350;
 paper = new Raphael(document.getElementById('page3Div2'), '100%', '100%');
   
    
	var w = 600;
	var h = 450;

	var width = $(window).width();

	if ($(window).width() < 600) {
		width = $(this).width();
		 paper = new Raphael(document.getElementById('page3Div2'), '100%', '100%');		
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	} else {
		 paper = new Raphael(document.getElementById('page3Div2'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	}
   
	var t11 = paper.text(x+443,y+175,"B").attr({'font-weight': 'bold','font-size':'15px','stroke':'red'});
        var t2 = paper.text(x+55,y+175,"A").attr({'font-weight': 'bold','font-size':'15px','stroke':'red'}); 
        

    t1 = paper.text(z-100,y+225,"L").attr({'font-weight': 'bold','font-size':'15px','stroke':'red'});    
    t2 = paper.text(z-85,y+227,"eff").attr({'font-weight': 'bold','font-size':'12px','stroke':'red'});
          
          var lin1 = paper.path("M"+(z+75)+" "+(y+225)+"l 0 30"+"M"+(z-278)+" "+(y+225)+"l 0 30").attr({ 'stroke': '#000', 'stroke-width': 2});
            var linB = paper.path("M"+(x+71.5)+" "+(y+175)+"l 353 0").attr({ 'stroke': '#000', 'stroke-width': 2});         

    var arr1 = paper.path("M"+(z+74)+" "+(y+240)+"l -15 -8 l 0 17 z").attr({ 'stroke': '#000', 'stroke-width': 2,'fill': '#000'});
	var arr2 = paper.path("M"+(z-277)+" "+(y+240)+"l 15 8 l 0 -17 z").attr({ 'stroke': '#000', 'stroke-width': 2,'fill': '#000'});
     var l33 = paper.path("M"+(x+71.5)+" "+(y+240)+"l 350 0").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
     
     var firstArr = paper.path("M"+(x+72)+" "+(y+225)+" l 0 -40 ").attr({'stroke':'#3c423d','stroke-width': 2}); 
     var a1=paper.path("M"+(x+72)+" "+(y+185)+"l 10 0 l -10 -10 l -10 10 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
     
      var secondArr = paper.path("M"+(x+425)+" "+(y+225)+" l 0 -40 ").attr({'stroke':'#3c423d','stroke-width': 2}); 
     var a2=paper.path("M"+(x+425)+" "+(y+185)+"l 10 0 l -10 -10 l -10 10 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});          
         
      paper.path('M' + (x + 72) + ' ' + (y + 187 )  + 'l 0 100')		
		.attr({ 'stroke-dasharray':  "-.",'stroke': '#a89f8a', 'stroke-width': 2}).toFront(); 
		
		 paper.path('M' + (x + 425) + ' ' + (y + 187 )  + 'l 0 100')		
		.attr({ 'stroke-dasharray':  "-.",'stroke': '#a89f8a', 'stroke-width': 2}).toFront();   
       
         
     var l = paper.path("M"+(x+71.5)+" "+(y+175)+"l 0 -45 l 353 0 l 0 45").attr({'stroke':'#000','stroke-width': 2});

	
    var l1 = paper.path("M"+(x+107)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l2 = paper.path("M"+(x+107)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
	
	var l3 = paper.path("M"+(x+142)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l4 = paper.path("M"+(x+142)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l5 = paper.path("M"+(x+177)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l6 = paper.path("M"+(x+177)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l7 = paper.path("M"+(x+212)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l8 = paper.path("M"+(x+212)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l9 = paper.path("M"+(x+247)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l10 = paper.path("M"+(x+247)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l11 = paper.path("M"+(x+282)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l12 = paper.path("M"+(x+282)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l13 = paper.path("M"+(x+317)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l14 = paper.path("M"+(x+317)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l15 = paper.path("M"+(x+352)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l16 = paper.path("M"+(x+352)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l17 = paper.path("M"+(x+387)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l18 = paper.path("M"+(x+387)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
//      t44 = paper.text(x+260,y+120,"w : "+loadMagVal+ " kN/m").attr({'font-weight': 'bold','font-size':'15px','stroke':'red'});   
      
     var t44 = paper.text(x+240,y+120,"w ").attr({'font-weight': 'bold','font-size':'15px','stroke':'red'});
     var t441 = paper.text(x+250,y+125,"u ").attr({'font-weight': 'bold','font-size':'8px','stroke':'red'});
     var t444 = paper.text(x+290,y+120," : "+loadMagVal+" kN/m").attr({'font-weight': 'bold','font-size':'15px','stroke':'red'});

      

//	var s1 = paper.path("M"+(z-278)+" "+(y+310)+"l 0 40"+"M"+(z-278)+" "+(y+310)+"l 353 80 l 0 -40 l -353 0 ").attr({ 'stroke': 'red', 'stroke-width': 2});
//    var txt1 = paper.text(z-310,y+330,"WuL/2").attr({'font-weight': 'bold','font-size':'15px'});
//    var txt2 = paper.text(z+106,y+368,"-WuL/2").attr({'font-weight': 'bold','font-size':'15px'});
//     
//     
//    var s1 = paper.path("M"+(z-278)+" "+(y+520)+"l 353 0"+"M"+(z-285)+" "+(y+1500)+" A 1 2 0.5 0 1 "+(z+74)+" "+(y+520)).attr({ 'stroke': 'blue', 'stroke-width': 2});
    
       
     
}

var s1;
function factLoad(){
	
	$("#page3Div2").html('');
	var x=50,y=-50;
	var z = x+350;
    x=50,y=-100;
	 z = x+350;
 paper = new Raphael(document.getElementById('page3Div2'), '100%', '100%');
   
    
	var w = 600;
	var h = 450;

	var width = $(window).width();

	if ($(window).width() < 600) {
		width = $(this).width();
		 paper = new Raphael(document.getElementById('page3Div2'), '100%', '100%');		
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	} else {
		 paper = new Raphael(document.getElementById('page3Div2'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	}

	var t11 = paper.text(x+443,y+175,"B").attr({'font-weight': 'bold','font-size':'15px','stroke':'red'});
        var t2 = paper.text(x+55,y+175,"A").attr({'font-weight': 'bold','font-size':'15px','stroke':'red'}); 
        

    t1 = paper.text(z-100,y+225,"L").attr({'font-weight': 'bold','font-size':'15px','stroke':'red'});    
    t2 = paper.text(z-85,y+227,"eff").attr({'font-weight': 'bold','font-size':'12px','stroke':'red'});
            
          var lin1 = paper.path("M"+(z+75)+" "+(y+225)+"l 0 30"+"M"+(z-278)+" "+(y+225)+"l 0 30").attr({ 'stroke': '#000', 'stroke-width': 2});
            var linB = paper.path("M"+(x+71.5)+" "+(y+175)+"l 353 0").attr({ 'stroke': '#000', 'stroke-width': 2});         

    var arr1 = paper.path("M"+(z+74)+" "+(y+240)+"l -15 -8 l 0 17 z").attr({ 'stroke': '#000', 'stroke-width': 2,'fill': '#000'});
	var arr2 = paper.path("M"+(z-277)+" "+(y+240)+"l 15 8 l 0 -17 z").attr({ 'stroke': '#000', 'stroke-width': 2,'fill': '#000'});
     var l33 = paper.path("M"+(x+71.5)+" "+(y+240)+"l 350 0").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
     
     var firstArr = paper.path("M"+(x+72)+" "+(y+225)+" l 0 -40 ").attr({'stroke':'#3c423d','stroke-width': 2}); 
     var a1=paper.path("M"+(x+72)+" "+(y+185)+"l 10 0 l -10 -10 l -10 10 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
     
      var secondArr = paper.path("M"+(x+425)+" "+(y+225)+" l 0 -40 ").attr({'stroke':'#3c423d','stroke-width': 2}); 
     var a2=paper.path("M"+(x+425)+" "+(y+185)+"l 10 0 l -10 -10 l -10 10 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});          
         
      paper.path('M' + (x + 72) + ' ' + (y + 187 )  + 'l 0 100')		
		.attr({ 'stroke-dasharray':  "-.",'stroke': '#a89f8a', 'stroke-width': 2}).toFront(); 
		
		 paper.path('M' + (x + 425) + ' ' + (y + 187 )  + 'l 0 100')		
		.attr({ 'stroke-dasharray':  "-.",'stroke': '#a89f8a', 'stroke-width': 2}).toFront();   
       
         
     var l = paper.path("M"+(x+71.5)+" "+(y+175)+"l 0 -45 l 353 0 l 0 45").attr({'stroke':'#000','stroke-width': 2});

	
    var l1 = paper.path("M"+(x+107)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l2 = paper.path("M"+(x+107)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
	
	var l3 = paper.path("M"+(x+142)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l4 = paper.path("M"+(x+142)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l5 = paper.path("M"+(x+177)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l6 = paper.path("M"+(x+177)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l7 = paper.path("M"+(x+212)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l8 = paper.path("M"+(x+212)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l9 = paper.path("M"+(x+247)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l10 = paper.path("M"+(x+247)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l11 = paper.path("M"+(x+282)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l12 = paper.path("M"+(x+282)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l13 = paper.path("M"+(x+317)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l14 = paper.path("M"+(x+317)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l15 = paper.path("M"+(x+352)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l16 = paper.path("M"+(x+352)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l17 = paper.path("M"+(x+387)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l18 = paper.path("M"+(x+387)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
//     var wuload = parseInt(facLoad);
      var t44 = paper.text(x+240,y+120,"w ").attr({'font-weight': 'bold','font-size':'15px','stroke':'red'});
     var t441 = paper.text(x+250,y+125,"u ").attr({'font-weight': 'bold','font-size':'8px','stroke':'red'});
     var t444 = paper.text(x+290,y+120," : "+loadMagVal+" kN/m").attr({'font-weight': 'bold','font-size':'15px','stroke':'red'});



//      t45 = paper.text(x+260,y+120,"u").attr({'font-weight': 'bold','font-size':'12px','stroke':'red'}); 
//      t46 = paper.text(x+260,y+120," : "+facLoad).attr({'font-weight': 'bold','font-size':'12px','stroke':'red'});    
      

//	var s1 = paper.path("M"+(z-278)+" "+(y+310)+"l 0 40"+"M"+(z-278)+" "+(y+310)+"l 353 80 l 0 -40 l -353 0 ").attr({ 'stroke': 'red', 'stroke-width': 2});
//    var txt1 = paper.text(z-310,y+330,"WuL/2").attr({'font-weight': 'bold','font-size':'15px'});
//    var txt2 = paper.text(z+106,y+368,"-WuL/2").attr({'font-weight': 'bold','font-size':'15px'});
//     
//     
//    var s1 = paper.path("M"+(z-278)+" "+(y+520)+"l 353 0"+"M"+(z-285)+" "+(y+1500)+" A 1 2 0.5 0 1 "+(z+74)+" "+(y+520)).attr({ 'stroke': 'blue', 'stroke-width': 2});
//        var txt2 = paper.text(z+106,y+368,"-WuL/2").attr({'font-weight': 'bold','font-size':'15px'});

//     function leff(){
//     t1 = paper.text(z-100,y+225,"L").attr({'font-weight': 'bold','font-size':'15px','stroke':'red'});    
//    t2 = paper.text(z-85,y+227,"eff").attr({'font-weight': 'bold','font-size':'12px','stroke':'red'});
//    t2 = paper.text(z-70,y+225," : "+facLoad).attr({'font-weight': 'bold','font-size':'15px','stroke':'red'});
//}          
     
//t44 = paper.text(x+260,y+120,"w : "+beamSpanVal).attr({'font-weight': 'bold','font-size':'15px','stroke':'red'});   

	
}


function leffective(){
	$("#page3Div2").html('');
	var x=50,y=-50;
	var z = x+350;
    x=50,y=-100;
	 z = x+350;
 paper = new Raphael(document.getElementById('page3Div2'), '100%', '100%');
   
    
	var w = 600;
	var h = 450;

	var width = $(window).width();

	if ($(window).width() < 600) {
		width = $(this).width();
		 paper = new Raphael(document.getElementById('page3Div2'), '100%', '100%');		
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	} else {
		 paper = new Raphael(document.getElementById('page3Div2'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	}

	var t11 = paper.text(x+443,y+175,"B").attr({'font-weight': 'bold','font-size':'15px','stroke':'red'});
        var t2 = paper.text(x+55,y+175,"A").attr({'font-weight': 'bold','font-size':'15px','stroke':'red'}); 
        
     
    t1 = paper.text(z-106,y+225,"L").attr({'font-weight': 'bold','font-size':'15px','stroke':'red'});    
    t2 = paper.text(z-93,y+227,"eff").attr({'font-weight': 'bold','font-size':'12px','stroke':'red'});
    t3 = paper.text(z-50,y+227," :  "+effspan+" m").attr({'font-weight': 'bold','font-size':'15px','stroke':'red'});
            
          var lin1 = paper.path("M"+(z+75)+" "+(y+225)+"l 0 30"+"M"+(z-278)+" "+(y+225)+"l 0 30").attr({ 'stroke': '#000', 'stroke-width': 2});
            var linB = paper.path("M"+(x+71.5)+" "+(y+175)+"l 353 0").attr({ 'stroke': '#000', 'stroke-width': 2});         

    var arr1 = paper.path("M"+(z+74)+" "+(y+240)+"l -15 -8 l 0 17 z").attr({ 'stroke': '#000', 'stroke-width': 2,'fill': '#000'});
	var arr2 = paper.path("M"+(z-277)+" "+(y+240)+"l 15 8 l 0 -17 z").attr({ 'stroke': '#000', 'stroke-width': 2,'fill': '#000'});
     var l33 = paper.path("M"+(x+71.5)+" "+(y+240)+"l 350 0").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
     
     var firstArr = paper.path("M"+(x+72)+" "+(y+225)+" l 0 -40 ").attr({'stroke':'#3c423d','stroke-width': 2}); 
     var a1=paper.path("M"+(x+72)+" "+(y+185)+"l 10 0 l -10 -10 l -10 10 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
     
      var secondArr = paper.path("M"+(x+425)+" "+(y+225)+" l 0 -40 ").attr({'stroke':'#3c423d','stroke-width': 2}); 
     var a2=paper.path("M"+(x+425)+" "+(y+185)+"l 10 0 l -10 -10 l -10 10 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});          
         
      paper.path('M' + (x + 72) + ' ' + (y + 187 )  + 'l 0 100')		
		.attr({ 'stroke-dasharray':  "-.",'stroke': '#a89f8a', 'stroke-width': 2}).toFront(); 
		
		 paper.path('M' + (x + 425) + ' ' + (y + 187 )  + 'l 0 100')		
		.attr({ 'stroke-dasharray':  "-.",'stroke': '#a89f8a', 'stroke-width': 2}).toFront();   
       
         
     var l = paper.path("M"+(x+71.5)+" "+(y+175)+"l 0 -45 l 353 0 l 0 45").attr({'stroke':'#000','stroke-width': 2});

	
    var l1 = paper.path("M"+(x+107)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l2 = paper.path("M"+(x+107)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
	
	var l3 = paper.path("M"+(x+142)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l4 = paper.path("M"+(x+142)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l5 = paper.path("M"+(x+177)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l6 = paper.path("M"+(x+177)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l7 = paper.path("M"+(x+212)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l8 = paper.path("M"+(x+212)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l9 = paper.path("M"+(x+247)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l10 = paper.path("M"+(x+247)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l11 = paper.path("M"+(x+282)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l12 = paper.path("M"+(x+282)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l13 = paper.path("M"+(x+317)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l14 = paper.path("M"+(x+317)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l15 = paper.path("M"+(x+352)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l16 = paper.path("M"+(x+352)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l17 = paper.path("M"+(x+387)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l18 = paper.path("M"+(x+387)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
     var wuload = parseInt(facLoad);
 var t44 = paper.text(x+240,y+120,"w ").attr({'font-weight': 'bold','font-size':'15px','stroke':'red'});
     var t441 = paper.text(x+250,y+125,"u ").attr({'font-weight': 'bold','font-size':'8px','stroke':'red'});
     var t444 = paper.text(x+290,y+120," : "+loadMagVal+" kN/m").attr({'font-weight': 'bold','font-size':'15px','stroke':'red'});

}

var s11;
function shearForceFinal(){
	$("#page3Div2").html('');
	var x=50,y=-50;
	var z = x+350;
    x=50,y=-100;
	 z = x+350;
 paper = new Raphael(document.getElementById('page3Div2'), '100%', '100%');
   
    
	var w = 600;
	var h = 450;

	var width = $(window).width();

	if ($(window).width() < 600) {
		width = $(this).width();
		 paper = new Raphael(document.getElementById('page3Div2'), '100%', '100%');		
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	} else {
		 paper = new Raphael(document.getElementById('page3Div2'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	}

	var t11 = paper.text(x+443,y+175,"B").attr({'font-weight': 'bold','font-size':'15px','stroke':'red'});
        var t2 = paper.text(x+55,y+175,"A").attr({'font-weight': 'bold','font-size':'15px','stroke':'red'}); 
        
     
   t1 = paper.text(z-106,y+225,"L").attr({'font-weight': 'bold','font-size':'15px','stroke':'red'});    
    t2 = paper.text(z-93,y+227,"eff").attr({'font-weight': 'bold','font-size':'12px','stroke':'red'});
    t3 = paper.text(z-50,y+227," :  "+effspan+" m").attr({'font-weight': 'bold','font-size':'15px','stroke':'red'});
              
          var lin1 = paper.path("M"+(z+75)+" "+(y+225)+"l 0 30"+"M"+(z-278)+" "+(y+225)+"l 0 30").attr({ 'stroke': '#000', 'stroke-width': 2});
            var linB = paper.path("M"+(x+71.5)+" "+(y+175)+"l 353 0").attr({ 'stroke': '#000', 'stroke-width': 2});         

    var arr1 = paper.path("M"+(z+74)+" "+(y+240)+"l -15 -8 l 0 17 z").attr({ 'stroke': '#000', 'stroke-width': 2,'fill': '#000'});
	var arr2 = paper.path("M"+(z-277)+" "+(y+240)+"l 15 8 l 0 -17 z").attr({ 'stroke': '#000', 'stroke-width': 2,'fill': '#000'});
     var l33 = paper.path("M"+(x+71.5)+" "+(y+240)+"l 350 0").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
     
     var firstArr = paper.path("M"+(x+72)+" "+(y+225)+" l 0 -40 ").attr({'stroke':'#3c423d','stroke-width': 2}); 
     var a1=paper.path("M"+(x+72)+" "+(y+185)+"l 10 0 l -10 -10 l -10 10 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
     
      var secondArr = paper.path("M"+(x+425)+" "+(y+225)+" l 0 -40 ").attr({'stroke':'#3c423d','stroke-width': 2}); 
     var a2=paper.path("M"+(x+425)+" "+(y+185)+"l 10 0 l -10 -10 l -10 10 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});          
         
      paper.path('M' + (x + 72) + ' ' + (y + 187 )  + 'l 0 350')		
		.attr({ 'stroke-dasharray':  "-.",'stroke': '#a89f8a', 'stroke-width': 2}).toFront(); 
		
		 paper.path('M' + (x + 425) + ' ' + (y + 187 )  + 'l 0 350')		
		.attr({ 'stroke-dasharray':  "-.",'stroke': '#a89f8a', 'stroke-width': 2}).toFront();   
       
         
     var l = paper.path("M"+(x+71.5)+" "+(y+175)+"l 0 -45 l 353 0 l 0 45").attr({'stroke':'#000','stroke-width': 2});

	
    var l1 = paper.path("M"+(x+107)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l2 = paper.path("M"+(x+107)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
	
	var l3 = paper.path("M"+(x+142)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l4 = paper.path("M"+(x+142)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l5 = paper.path("M"+(x+177)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l6 = paper.path("M"+(x+177)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l7 = paper.path("M"+(x+212)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l8 = paper.path("M"+(x+212)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l9 = paper.path("M"+(x+247)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l10 = paper.path("M"+(x+247)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l11 = paper.path("M"+(x+282)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l12 = paper.path("M"+(x+282)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l13 = paper.path("M"+(x+317)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l14 = paper.path("M"+(x+317)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l15 = paper.path("M"+(x+352)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l16 = paper.path("M"+(x+352)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l17 = paper.path("M"+(x+387)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l18 = paper.path("M"+(x+387)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
     var wuload = parseInt(facLoad);
 var t44 = paper.text(x+240,y+120,"w ").attr({'font-weight': 'bold','font-size':'15px','stroke':'red'});
     var t441 = paper.text(x+250,y+125,"u ").attr({'font-weight': 'bold','font-size':'8px','stroke':'red'});
     var t444 = paper.text(x+290,y+120," : "+loadMagVal+" kN/m").attr({'font-weight': 'bold','font-size':'15px','stroke':'red'});

//	if(shearForce%2==0){
//		s11 = parseInt(shearForce);
//	}else{
//		s11 = parseFloat(shearForce);
//	}
	
 	var s1 = paper.path("M"+(z-278)+" "+(y+310)+"l 0 40"+"M"+(z-278)+" "+(y+310)+"l 353 80 l 0 -40 l -353 0 ")
 	.attr({ 'stroke': '#fa8282', 'stroke-width': 2,'fill':'#fcd4d4'});
    var txt1 = paper.text(z-330,y+330,shearForce+" kN").attr({'font-weight': 'bold','font-size':'15px','stroke':'#000'});
    var txt2 = paper.text(z+118,y+371,"-"+shearForce+" kN").attr({'font-weight': 'bold','font-size':'15px','stroke':'#000'});
	
}

var b1;
function bendingMomentFinal(){
	
	$("#page3Div2").html('');
	
	var x1=100,y1=100;
	var x=50,y=-50;
	var z = x+350;
//    x=50,y=-100;
//	 z = x+350;
 paper = new Raphael(document.getElementById('page3Div2'), '100%', '100%');
   
    
	var w = 600;
	var h = 450;

	var width = $(window).width();

	if ($(window).width() < 600) {
		width = $(this).width();
		 paper = new Raphael(document.getElementById('page3Div2'), '100%', '100%');		
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	} else {
		 paper = new Raphael(document.getElementById('page3Div2'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	}

	var t11 = paper.text(x+443,y+175,"B").attr({'font-weight': 'bold','font-size':'15px','stroke':'red'});
        var t2 = paper.text(x+55,y+175,"A").attr({'font-weight': 'bold','font-size':'15px','stroke':'red'}); 
        
     
    t1 = paper.text(z-106,y+225,"L").attr({'font-weight': 'bold','font-size':'15px','stroke':'red'});    
    t2 = paper.text(z-93,y+227,"eff").attr({'font-weight': 'bold','font-size':'12px','stroke':'red'});
    t3 = paper.text(z-50,y+227," :  "+effspan+" m").attr({'font-weight': 'bold','font-size':'15px','stroke':'red'});
             
          var lin1 = paper.path("M"+(z+75)+" "+(y+225)+"l 0 30"+"M"+(z-278)+" "+(y+225)+"l 0 30").attr({ 'stroke': '#000', 'stroke-width': 2});
            var linB = paper.path("M"+(x+71.5)+" "+(y+175)+"l 353 0").attr({ 'stroke': '#000', 'stroke-width': 2});         

    var arr1 = paper.path("M"+(z+74)+" "+(y+240)+"l -15 -8 l 0 17 z").attr({ 'stroke': '#000', 'stroke-width': 2,'fill': '#000'});
	var arr2 = paper.path("M"+(z-277)+" "+(y+240)+"l 15 8 l 0 -17 z").attr({ 'stroke': '#000', 'stroke-width': 2,'fill': '#000'});
     var l33 = paper.path("M"+(x+71.5)+" "+(y+240)+"l 350 0").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
     
     var firstArr = paper.path("M"+(x+72)+" "+(y+225)+" l 0 -40 ").attr({'stroke':'#3c423d','stroke-width': 2}); 
     var a1=paper.path("M"+(x+72)+" "+(y+185)+"l 10 0 l -10 -10 l -10 10 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
     
      var secondArr = paper.path("M"+(x+425)+" "+(y+225)+" l 0 -40 ").attr({'stroke':'#3c423d','stroke-width': 2}); 
     var a2=paper.path("M"+(x+425)+" "+(y+185)+"l 10 0 l -10 -10 l -10 10 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});          
         
      paper.path('M' + (x + 72) + ' ' + (y + 187 )  + 'l 0 450')		
		.attr({ 'stroke-dasharray':  "-.",'stroke': '#a89f8a', 'stroke-width': 2}).toFront(); 
		
		 paper.path('M' + (x + 425) + ' ' + (y + 187 )  + 'l 0 450')		
		.attr({ 'stroke-dasharray':  "-.",'stroke': '#a89f8a', 'stroke-width': 2}).toFront();   
       
         
     var l = paper.path("M"+(x+71.5)+" "+(y+175)+"l 0 -45 l 353 0 l 0 45").attr({'stroke':'#000','stroke-width': 2});

	
    var l1 = paper.path("M"+(x+107)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l2 = paper.path("M"+(x+107)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
	
	var l3 = paper.path("M"+(x+142)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l4 = paper.path("M"+(x+142)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l5 = paper.path("M"+(x+177)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l6 = paper.path("M"+(x+177)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l7 = paper.path("M"+(x+212)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l8 = paper.path("M"+(x+212)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l9 = paper.path("M"+(x+247)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l10 = paper.path("M"+(x+247)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l11 = paper.path("M"+(x+282)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l12 = paper.path("M"+(x+282)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l13 = paper.path("M"+(x+317)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l14 = paper.path("M"+(x+317)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l15 = paper.path("M"+(x+352)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l16 = paper.path("M"+(x+352)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
    var l17 = paper.path("M"+(x+387)+" "+(y+130)+"l 0 42 ").attr({'stroke':'#000','stroke-width': 2});         
    var l18 = paper.path("M"+(x+387)+" "+(y+172)+"l 7 -7 l -14 0 z").attr({'stroke':'#000','stroke-width': 2,'fill':'#000'});
    
//     var wuload = parseInt(facLoad);
 var t44 = paper.text(x+240,y+120,"w ").attr({'font-weight': 'bold','font-size':'15px','stroke':'red'});
     var t441 = paper.text(x+250,y+125,"u ").attr({'font-weight': 'bold','font-size':'8px','stroke':'red'});
     var t444 = paper.text(x+290,y+120," : "+loadMagVal+" kN/m").attr({'font-weight': 'bold','font-size':'15px','stroke':'red'});

//	if(shearForce%2==0){
//		s11 = parseInt(shearForce);
//	}else{
//		s11 = parseFloat(shearForce);
//	}
	
	if(bendingMom%2==0){
		b1 = parseInt(bendingMom);
	}else{
		b1 = parseFloat(bendingMom);
	}
	
	var s1 = paper.path("M"+(z-278)+" "+(y+310)+"l 0 40"+"M"+(z-278)+" "+(y+310)+"l 353 80 l 0 -40 l -353 0 ")
 	.attr({ 'stroke': '#fa8282', 'stroke-width': 2,'fill':'#fcd4d4'});
	
    var txt1 = paper.text(z-330,y+330,shearForce+" kN").attr({'font-weight': 'bold','font-size':'15px','stroke':'#000'});
    var txt2 = paper.text(z+118,y+371,"-"+shearForce+" kN").attr({'font-weight': 'bold','font-size':'15px','stroke':'#000'});
	
	var s1 = paper.path("M"+(x1+21)+" "+(y1+348)+"l 355 0"+"M"+(x1+17)+" "+(y1+1355)+" A -1 2 0.5 0 1 "+(x1+374)+" "+(y1+347)).attr({ 'stroke': '#64a0ed', 'stroke-width': 2,'fill':'#d0dff2'});
//	var s1 = paper.path("M"+(z-278)+" "+(y+520)+"l 353 0"+"M"+(z-285)+" "+(y+1500)+" A 1 2 0.5 0 1 "+(z+74)+" "+(y+520)).attr({ 'stroke': 'blue', 'stroke-width': 2});
    var txt3 = paper.text(z-95,y+376,b1+" kNm").attr({'font-weight': 'bold','font-size':'15px','stroke':'#000'});
    var c1 = paper.circle(z-100,y+387,3).attr({'stroke':'#64a0ed','fill':'#64a0ed'});
    
    t01 = paper.text(x1+12,y1+345," 0 ").attr({ 'stroke': '#000', 'font-size':'15px'}); 
    t02 = paper.text(x1+390,y1+345," 0 ").attr({ 'stroke': '#000', 'font-size':'15px'});  
}

