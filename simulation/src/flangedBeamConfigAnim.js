

function secondConfigAnim(){
$("#page2Div1").html("");


 w = 600;
 h = 450;
 x = 100;
 y = 100;
 
 bw = 50;
 df=50;
 capD = 100;

if(carFlg==0){
 paper = new Raphael(document.getElementById('page2Div1'));
}else{
	 $("#page4Div2").html("");
	paper = new Raphael(document.getElementById('page4Div2'));
}
 width = $(window).width();

	if ($(window).width() < 600) {
		width = $(this).width();

		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	} else {

		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	}
	
	
// onLoad
	  beamSize = paper.path("M"+(x+250)+" "+(y+200)+"l "+(-bw)+" 0 l 0 "+(-2*df)+" l "+(-2*bw)+" 0 "+
		 "l 0 "+(-df)+" l "+(5*bw)+" 0 "+" l 0 "+df+" l "+(-2*bw)+" 0  l 0 "+(2*df)).attr({'stroke':'#000','stroke-width': 2});
	
	  l1 = paper.path("M"+(x+250)+" "+(y+230)+"l "+(-bw)+" 0 ").attr({'stroke':'#000','stroke-width': 2});
	  l1f = paper.path("M"+(x+250)+" "+(y+220)+"l 0 20 ").attr({'stroke':'#000','stroke-width': 2});
      l1b = paper.path("M"+(x+200)+" "+(y+220)+"l 0 20 ").attr({'stroke':'#000','stroke-width': 2});
     
      tl1 = paper.text(x+250-(bw/2),y+250,"b ").attr({'font-size':'18px','stroke':'red'});
      tl1s = paper.text(x+260-(bw/2),y+256,"w ").attr({'font-size':'12px','stroke':'red'});

    
      l2 = paper.path("M"+(x+250-bw+(-2*bw)-20)+" "+(y+230-df*3.6)+"l 0 50 ").attr({'stroke':'#000','stroke-width': 2});
      l2f = paper.path("M"+(x+240-bw+(-2*bw)-20)+" "+(y+230-df*3.6)+"l 20 0 ").attr({'stroke':'#000','stroke-width': 2});
      l2b = paper.path("M"+(x+240-bw+(-2*bw)-20)+" "+(y+200-df*2)+"l 20 0 ").attr({'stroke':'#000','stroke-width': 2});
     
 t21 = paper.text(x+250-bw+(-2*bw)-50,(y+200+(-2*df)+(-(df/2))),"d ").attr({'font-size':'18px','stroke':'red'});
      t21s = paper.text(x+250-bw+(-2*bw)-50+9,(y+206+(-2*df)+(-(df/2)))," f ").attr({'font-size':'12px','stroke':'red'});

	  l3 = paper.path("M"+(x+250-bw+(-2*bw))+" "+(y+25)+"l "+(bw*5)+" 0 ").attr({'stroke':'#000','stroke-width': 2});
	  l3f = paper.path("M"+(x+230+(2*bw)+20)+" "+(y+25-9)+"l "+(bw*5)+" l 0 20").attr({'stroke':'#000','stroke-width': 2});
	  l3b = paper.path("M"+(x+250-bw+(-2*bw))+" "+(y+34)+"l "+(bw*5)+" l 0 -20").attr({'stroke':'#000','stroke-width': 2});
      
      t31 = paper.text(x+250-bw+(-2*bw)+((bw*5)/2),(y+7),"b ").attr({'font-size':'18px','stroke':'red'});
      t31s = paper.text(x+250-bw+(-2*bw)+8+((bw*5)/2),(y+7+6)," f ").attr({'font-size':'12px','stroke':'red'});
 
      
	 
      l4 = paper.path("M"+(x+250+(2*bw)+20)+" "+(y+200+(-2*df)-(df))+" l 0 "+(3*df)).attr({'stroke':'#000','stroke-width': 2});
      l4f = paper.path("M"+(x+250+(2*bw)+10)+" "+(y+200+(-2*df)-(df))+" l 20 0").attr({'stroke':'#000','stroke-width': 2});
      l4b = paper.path("M"+(x+250+(2*bw)+10)+" "+(y+200)+" l 20 0").attr({'stroke':'#000','stroke-width': 2});
      
       t41 = paper.text(x+250+(2*bw)+40,y+280+(-2*df)-(df)," D").attr({'font-size':'18px','stroke':'red'});
//      colorSet();
	}
	var color;
	
	function colorSet(){
		secondConfigAnim();
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
	
	beamSize.attr({'fill':color});
	}
	
	 flangeOriginal = 0, depthOriginal = 0 ;
	 t21sVal = paper.text(x+250,y+206," ");
	
	function dchange(){
		secondConfigAnim();
		beamSize.remove();
		l1.remove();
		l1f.remove();
		l1b.remove();
		l2.remove();
		l2f.remove();
		l2b.remove();
		l3.remove();
		l3f.remove();
		l3b.remove();
		l4.remove();
		l4f.remove();
		l4b.remove();
		t21sVal.remove();
		t11sVal.remove();
		tl1.remove();
		tl1s.remove();		
		t21.remove();	
		t21s.remove();	
		t31.remove();	
		t31s.remove();	
		t41.remove();	
		t31sVal.remove();
		
		df = parseFloat(flangeDepth);
		capD = parseInt(totDepth);
		
		if(capD<=700){
			y=100;
		}else{
			y=150;
		}
		
		flangeOriginal = df;
		depthOriginal = capD;
		
		if(capD==300){
		df = (flangeDepth/5);
		capD = (totDepth/5);	
		}if(capD==380){
		  df = (flangeDepth/4.9);
		capD = (totDepth/4.9);		
		}if(capD==450){
		  df = (flangeDepth/4.8);
		capD = (totDepth/4.8);		
		}if(capD==500){
		  df = (flangeDepth/4.7);
		capD = (totDepth/4.7);		
		}if(capD==530){
		  df = (flangeDepth/4.6);
		capD = (totDepth/4.6);		
		}if(capD==600){
		  df = (flangeDepth/4.5);
		capD = (totDepth/4.5);		
		}if(capD==700){
		  df = (flangeDepth/4.4);
		capD = (totDepth/4.4);		
		}if(capD==800){
		  df = (flangeDepth/4.3);
		capD = (totDepth/4.3);		
		}if(capD==900){
		  df = (flangeDepth/4.2);
		capD = (totDepth/4.2);		
		}if(capD==1000){
		  df = (flangeDepth/4.1);
		capD = (totDepth/4.1);		
		}
		 subFlg = capD-df;
		 leftOver = subFlg/2;
		
		console.log("df : "+df+" capD : "+capD);
		console.log("subFlg : "+subFlg+" leftOver : "+leftOver);
		
		beamSize = paper.path("M"+(x+250)+" "+(y+200)+"l "+(-bw)+" 0 l 0 "+(-subFlg)+" l "+(-2*bw)+" 0 "+
	 "l 0 "+(-df)+" l "+(5*bw)+" 0 "+" l 0 "+df+" l "+(-2*bw)+" 0  l 0 "+(subFlg)).attr({'stroke':'#000','stroke-width': 2,'fill':color});
	 
	   l2 = paper.path("M"+(x+250+(-bw)+(-2*bw)-20)+" "+(y+230-30+(-subFlg))+"l  0 "+(-df)).attr({'stroke':'#000','stroke-width': 2});
	  l2f = paper.path("M"+(x+250+(-bw)+(-2*bw)-30)+" "+(y+230-30+(-subFlg))+"l 20 0 ").attr({'stroke':'#000','stroke-width': 2});
      l2b = paper.path("M"+(x+250+(-bw)+(-2*bw)-30)+" "+(y+200+(-subFlg)+(-df))+"l 20 0 ").attr({'stroke':'#000','stroke-width': 2});
	 
	  t21 = paper.text((x+250+(-bw)+(-2*bw)-80),(y+200+(-subFlg)-(df/2))," d ").attr({'font-size':'18px','stroke':'red'});
      t21s = paper.text((x+250+(-bw)+(-2*bw)-73),(y+206+(-subFlg)-(df/2))," f ").attr({'font-size':'12px','stroke':'red'});
      t21sVal = paper.text((x+250+(-bw)+(-2*bw)-45),(y+200+(-subFlg)-(df/2))," : "+flangeOriginal).attr({'font-size':'18px','stroke':'red'});

	 
	 
	   l4 = paper.path("M"+(x+250+(2*bw)+20)+" "+(y+200)+" l 0 "+(-capD)).attr({'stroke':'#000','stroke-width': 2});
       l4f = paper.path("M"+(x+250+(2*bw)+10)+" "+(y+200+(-capD))+" l 20 0").attr({'stroke':'#000','stroke-width': 2});
       l4b = paper.path("M"+(x+250+(2*bw)+10)+" "+(y+200)+" l 20 0").attr({'stroke':'#000','stroke-width': 2});
       
       t41 = paper.text(x+250+(2*bw)+60,y+200+(-capD/2)," D : "+depthOriginal).attr({'font-size':'18px','stroke':'red'});


	}
	
	var originalBw = 0;
	var bfProp = 0;
	var dfOriginal = 0;
	
	var t31sVal = paper.text(x+250,y+200," ");
	var t11sVal = paper.text(x+250,y+200," ");
	
	function bchange(){
		secondConfigAnim();
		beamSize.remove();
		
		l1.remove();
		l1f.remove();
		l1b.remove();
		l2.remove();
		l2f.remove();
		l2b.remove();
		l3.remove();
		l3f.remove();
		l3b.remove();
		l4.remove();
		l4f.remove();
		l4b.remove();
		
		t11sVal.remove();
		t21sVal.remove();		
		tl1.remove();
		tl1s.remove();		
		t21.remove();	
		t21s.remove();	
		t31.remove();	
		t31s.remove();	
		t41.remove();	
		t31sVal.remove();
		
		df = parseFloat(flangeDepth);
		capD = parseInt(totDepth);
		dfOriginal = df;
	    depthOriginal = capD;
	    
	    if(capD<=700){
			y=100;
//			x=150;
		}else{
			y=150;
//			x=100;
		}
	    	
		if(capD==300){
		df = (flangeDepth/5);
		capD = (totDepth/5);	
		}if(capD==380){
		  df = (flangeDepth/4.9);
		capD = (totDepth/4.9);		
		}if(capD==450){
		  df = (flangeDepth/4.8);
		capD = (totDepth/4.8);		
		}if(capD==500){
		  df = (flangeDepth/4.7);
		capD = (totDepth/4.7);		
		}if(capD==530){
		  df = (flangeDepth/4.6);
		capD = (totDepth/4.6);		
		}if(capD==600){
		  df = (flangeDepth/4.5);
		capD = (totDepth/4.5);		
		}if(capD==700){
		  df = (flangeDepth/4.4);
		capD = (totDepth/4.4);		
		}if(capD==800){
		  df = (flangeDepth/4.3);
		capD = (totDepth/4.3);		
		}if(capD==900){
		  df = (flangeDepth/4.2);
		capD = (totDepth/4.2);		
		}if(capD==1000){
		  df = (flangeDepth/4.1);
		capD = (totDepth/4.1);		
		}
		
		var bf1=0;

		var subFlg = capD-df;
		var leftOver = subFlg/2;
		
		console.log("df : "+df+" capD : "+capD);
		console.log("subFlg : "+subFlg+" leftOver : "+leftOver);
		
//		var bfVar = parseInt(bfProportion);
		
		 beamWidth1 = parseInt(beamWidthValw);
		originalBw = beamWidth1;
//		bfProp = parseInt(bfProportion);
		 
//		 if(beamWidth<=400){
//			
//		}else{
//			x=100;
//		}
		 x=140;
		if(beamWidth1==150){
			
			bf1=180;
			beamWidth1 = bf1/3;
		}if(beamWidth1==200){
			bf1=210;
			beamWidth1 = bf1/3;
		}if(beamWidth1==230){
			bf1=240;
			beamWidth1 = bf1/3;
		}if(beamWidth1==300){
			bf1=270;
			beamWidth1 = bf1/3;
		}if(beamWidth1==400){
			bf1=320;
			beamWidth1 = bf1/3;
		}if(beamWidth1==500){
			bf1=370;
			beamWidth1 = bf1/3;
		}if(beamWidth1==600){
			bf1=420;
			beamWidth1 = bf1/3;
		}
//		  subFlang = bf1-beamWidth1;
//	 remain = subFlang/2;
		
//		if(bfVal>1400){
//			bf1=450;
//			beamWidth1 = bf1/3;
//		}
		
	var sub = (bfVal-beamWidthValw)/2.5;	
	var rem = sub/2;
		
		bfLine = parseFloat(rem)+parseFloat(beamWidth1)+parseFloat(rem);
		
//	var rem = remain1/5;
	beamSize = paper.path("M"+(x+250)+" "+(y+200)+"l "+(-beamWidth1)+" 0 l 0 "+(-subFlg)+" l "+(-rem)+" 0 "+
	 "l 0 "+(-df)+" l "+bfLine+" 0 "+" l 0 "+df+" l "+(-rem)+" 0  l 0 "+(subFlg)).attr({'stroke':'#000','stroke-width': 2,'fill':color});
 	
		
	  l1 = paper.path("M"+(x+250)+" "+(y+220)+"l "+(-beamWidth1)+" 0 ").attr({'stroke':'#000','stroke-width': 2});
	  l1f = paper.path("M"+(x+250)+" "+(y+230)+"l 0 -20 ").attr({'stroke':'#000','stroke-width': 2});
      l1b = paper.path("M"+(x+250-beamWidth1)+" "+(y+230)+"l 0 -20 ").attr({'stroke':'#000','stroke-width': 2});
      
      tl1 = paper.text(x+250-(beamWidth1/2)-20,y+250,"b ").attr({'font-size':'18px','stroke':'red'});
      tl1s = paper.text(x+260-(beamWidth1/2)-20,y+256," w ").attr({'font-size':'12px','stroke':'red'});
      t21sVal = paper.text((x+270-(beamWidth1/2)),y+250," : "+originalBw).attr({'font-size':'18px','stroke':'red'});
      
      l3 = paper.path("M"+(x+250+(-beamWidth1)+(-rem))+" "+(y+200+(-subFlg)+(-df)-20)+"l "+bfLine+" 0 ").attr({'stroke':'#000','stroke-width': 2});
	  l3f = paper.path("M"+(x+250+(-beamWidth1)+(-rem))+" "+(y+200+(-subFlg)+(-df)-10)+" l 0 -20").attr({'stroke':'#000','stroke-width': 2});
	  l3b = paper.path("M"+(x+250+rem)+" "+(y+200+(-subFlg)+(-df)-10)+" l 0 -20").attr({'stroke':'#000','stroke-width': 2});
      
       t31 = paper.text(x+250-70,y+200+(-subFlg)+(-df)-40,"b ").attr({'font-size':'18px','stroke':'red'});
       t31s = paper.text(x+250-62,y+200+(-subFlg)+(-df)-36,"f ").attr({'font-size':'12px','stroke':'red'});
      
       t31sVal = paper.text(x+250-20,y+200+(-subFlg)+(-df)-40," : "+bfVal).attr({'font-size':'18px','stroke':'red'});
      
      l2 = paper.path("M"+(x+250+(-beamWidth1)+(-rem)-20)+" "+(y+230-30+(-subFlg))+"l  0 "+(-df)).attr({'stroke':'#000','stroke-width': 2});
	  l2f = paper.path("M"+(x+250+(-beamWidth1)+(-rem)-10)+" "+(y+230-30+(-subFlg))+"l -20 0 ").attr({'stroke':'#000','stroke-width': 2});
      l2b = paper.path("M"+(x+250+(-beamWidth1)+(-rem)-10)+" "+(y+230-30+(-subFlg)-df)+"l -20 0 ").attr({'stroke':'#000','stroke-width': 2});
	  
	  t21 = paper.text(x+250+(-beamWidth1)+(-rem)-(df/2)-60,y+230-30+(-subFlg)+(-(df/2)),"d ").attr({'font-size':'18px','stroke':'red'});
      t21s = paper.text(x+250+(-beamWidth1)+(-rem)-(df/2)-52,y+236-30+(-subFlg)+(-(df/2))," f ").attr({'font-size':'12px','stroke':'red'});
	  t11sVal = paper.text(x+250+(-beamWidth1)+(-rem)-(df/2)-25,y+230-30+(-subFlg)+(-(df/2))," : "+dfOriginal).attr({'font-size':'18px','stroke':'red'});
 
      l4 = paper.path("M"+(x+250+rem+20)+" "+(y+200)+" l 0 "+(-(subFlg)-df)).attr({'stroke':'#000','stroke-width': 2});
      l4f = paper.path("M"+(x+250+rem+10)+" "+(y+200)+" l 20 0").attr({'stroke':'#000','stroke-width': 2});
      l4b = paper.path("M"+(x+250+rem+10)+" "+(y+200-capD)+" l 20 0").attr({'stroke':'#000','stroke-width': 2});

       t41 = paper.text(x+250+rem+60,y+200-(capD/2)," D : "+depthOriginal).attr({'font-size':'18px','stroke':'red'});
	
	}
	
		 