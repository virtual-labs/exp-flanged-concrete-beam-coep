
var conVal = 0;
var steelVal = 0;
var maxLimit = 0;
var bfProportion = 0;
var beamWidth=0;
var beamSpanVal , loadMagVal,w1WidthVal,w2WidthVal,nominalCoverVal, beamWidth1Val;
var htm=''
	htm+='<div class="row">'	
	+'<div class="col-sm-6">'
	+'<label class="labelstyle marginBottom" >Enter clear span of Beam L<sub>0</sub>(m) : </label>'
	+'</div>'
	+'<div class="col-sm-4">'
//	+'<input type="number"   onblur="updateBeamSpanVal()" style= "width:100%;"  class=" form-control" id="beamSpan" value="5">'
	+'<input type="number"  style= "width:100%;"  class=" form-control" id="beamSpan" onblur="updateBeamSpanVal();">'

	+'</div>'
	+'<div class="col-sm-2">'
	+'</div>'	
    +'</div>'
    
       +  '<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom">Grade of Concrete f<sub>ck</sub> : </label>'
	   +'</div>'	   
	   +'<div class="col-sm-3">'
	   
	   +'<select  class="form-control selectConf marginBottom" id="concreteGrade"  style="height:auto;margin-bottom:5px; " >'
	   
	   +'<option value="0">--- Select grade of concrete --- </option>'
//	   +'<option value="10" >M10  </option>'
	   +'<option value="15" >M15  </option>'
	   +'<option value="20" >M20  </option>'
	   +'<option value="25" >M25  </option>'
	   +'<option value="30" >M30  </option>'
	   +'<option value="35" >M35  </option>'
	   +'<option value="40" >M40  </option>'
	   +'<option value="45" >M45  </option>'
	   +'<option value="50" >M50  </option>'
	   +'<option value="55" >M55  </option>'
	   +'<option value="60" >M60  </option>'
	   +'<option value="65" >M65  </option>'
	   +'<option value="70" >M70  </option>'
	   +'<option value="75" >M75  </option>'
	   +'<option value="80" >M80  </option>'	  
	   +'</select>'
	   +'</div>'
	   +'<div class="col-sm-3" id="concreteLabel" hidden>'
	   +'<label class="spanMsg" style="margin-top:-5px; margin-left:5px;" >f<sub>ck</sub> :<label id = "relTemp" class="spanMsg"> '+conVal+' </label></label>   '

	   +'</div>'
	   +'</div>'
	   
	   
	   + '<div class="row">'	     
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom">Grade of Steel f<sub>y</sub> : </label>'
	   +'</div>'
	   
	   +'<div class="col-sm-3">'
	   +'<select  class="form-control selectConf marginBottom" id="steelGrade" " style="height:auto;margin-bottom:5px; " >'
	   +'<option value="0">--- Select grade of steel --- </option>'
	   +'<option value="250" >Fe250  </option>'
	   +'<option value="415" >Fe415  </option>'
	   +'<option value="500">Fe500  </option>'
	  
	   +'</select>'	   
	  
	   +'</div>'
	   +'<div class="col-sm-3" id="steelLabel" hidden>'
       +'<label class="labelstyle spanMsg" style="margin-top:-5px;">f<sub>y</sub> :<label id = "relTemp1" class="labelstyle spanMsg"> '+steelVal+' </label>   </label>'
       +'</div>'
       +'</div>'
	   
//	   + '<div class="row">'	     
//	   +'<div class="col-sm-6">'
//	   +'<label class="labelstyle marginBottom">Load acting on beam :  </label>'
//	   +'</div>'
//	   
//	   +'<div class="col-sm-4">'
//	   +'<select  class="form-control selectConf marginBottom" id="loadOnBeam" " style="height:auto;margin-bottom:5px; " >'
//	   +'<option value="0">--- Select  --- </option>'
//	   +'<option value="1" >Uniform distributed load  </option>'
//	   +'<option value="2" disabled>Pointer load  </option>'
//	 
//	  
//	   +'</select>'	   
//	  
//	   +'</div>'
//	   +'<div class="col-sm-2">'
//	    +'</div>'
//       +'</div>'
    
//	+'<div class="row">'	
//	+'<div class="col-sm-6">'
//	+'<label class="labelstyle marginBottom">Enter magnitude of Load w (kN/m): </label>'
//	+'</div>'
//	+'<div class="col-sm-4">'
////	+'<input type="number"  style= "width:100%; " onblur="updateLoadMag()" class=" form-control" id="loadMag" value="10">'
//	+'<input type="number"  style= "width:100%; " class=" form-control" id="loadMag" >'
//
//	+'</div>'
//	+'<div class="col-sm-2">'
//	+'</div>'	
//    +'</div>'
    
    
    + '<div class="row" id="blink" hidden>'
	+'<div class="col-sm-6">'
	+'</div>'
	+'<div class="col-sm-6">'
	+'<span><label class="labelstyle" style="margin-bottom:10px;">(liveLoad + deadLoad)</label></span>'
	+'</div>'
	+'</div>'
	
//	   + '<div class="row">'
//	   +'<div class="col-sm-6">'
//	   +'<label class="labelstyle marginBottom">Enter width of beam b (mm) :  </label>'
//	   +'</div>'
//	   +'<div class="col-sm-4">'
//	   +'<input type="number"  style= "width:100%;"  class=" form-control" id="beamWidth1" >'
//	   +'</div>'
//	   +'<div class="col-sm-2">'
//	   +'</div>'
//	   +'</div>'
	
	
	   + '<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom" >Enter width of Support w1 (m) :  </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number"  style= "width:100%;"  class=" form-control" id="w1Width" onblur="updateValW1()" >'
	   +'</div>'
	   +'<div class="col-sm-2">'
	   +'</div>'
	   +'</div>'
	   
	   + '<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom">Enter width of Support w2 (m) :  </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number"  style= "width:100%;"  class=" form-control" id="w2Width" onblur="updateValW2(),ren()"  >'
	   +'</div>'
	   +'<div class="col-sm-2">'
	   +'</div>'
	   +'</div>'
	   
	 
	   
	   + '<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom">Use bar Diameter longitudinal reinforcement (&empty; mm) : </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	    +'<select  class="form-control selectConf marginBottom" id="longRein" " style="height:auto;margin-bottom:5px; " >'
	   +'<option value="0">--- Select  --- </option>'
	   +'<option value="6" >6</option>'
	   +'<option value="8" >8</option>'
	   +'<option value="10" >10</option>'
	   +'<option value="12" >12</option>'
	   +'<option value="16" >16</option>'
	   +'<option value="20" >20</option>'
	   +'<option value="25" >25</option>'
	   +'<option value="28" >28</option>'
	   +'<option value="32" >32</option>'
	  
	   +'</select>'	  
	   +'</div>'
	   +'<div class="col-sm-2">'
	   +'</div>'
	   +'</div>'
	   
	   + '<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom">Use bar Diameter shear reinforcement (&empty;<sub>s</sub> mm) : </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	    +'<select  class="form-control selectConf marginBottom" id="shearRein" " style="height:auto;margin-bottom:5px; " >'
	   +'<option value="0">--- Select  --- </option>'
	   +'<option value="6" >6</option>'
	   +'<option value="8" >8</option>'
	   +'<option value="10" >10</option>'
	   +'<option value="12" >12</option>'
	   +'<option value="16" >16</option>'
	   +'<option value="20" >20</option>'
	   +'<option value="25" >25</option>'
	   +'<option value="28" >28</option>'
	   +'<option value="32" >32</option>'
	  
	   +'</select>'	  
	   +'</div>'
	   +'<div class="col-sm-2">'
	   +'</div>'
	   +'</div>'
	   
	   + '<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom">Enter nominal cover (mm) :  </label>'
	   +'</div>'
	   +'<div class="col-sm-3">'
	   +'<input type="number"  style= "width:100%;"  class=" form-control" id="nominalCover" >'
	   +'</div>'
	    +'<div class="col-sm-2">'
	   +'<button type="button"   class="btn btn-info btnStyle" id="refer" data-toggle="modal" data-target="#myModal1" >Refer</button>'
//	    +'<i class="fa fa-info-circle infoGreen"  title="Do you like my fa-cog icon?"  id="refer" data-toggle="modal" data-target="#myModal1" ></i>'
//	    +'<i class="fa fa-info-circle fafaInfoGreen"  title="Reference"  id="refer" data-toggle="modal" data-target="#myModal1" ></i>'

	   +'</div>'
	   +'<div class="col-sm-1">'
	   +'</div>'
	   +'</div>'
	   
	   + '<div class="row" id="blink1" hidden>'
	   +'<div class="col-sm-6">'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom" style="margin-bottom:-50px;">Refer IS456:2000<br> Table 16 and 16A</label>'
	   +'</div>'
	  
	   +'</div>'	 
	   
	   	+'<div class="col-sm-12">'
	    +'<center><button type="button"   class="btn btn-danger btnStyle" id="checkConfg" style="margin-top:10px; width:50%"data-toggle="modal" data-target="#myModal" ><b>CONFIGURE </b></button></center>'
	    +'</div>'
	     
	
	$("#page1Div2").html(htm);
	
	$("#concreteGrade").change(function(){
		conVal = parseInt($("#concreteGrade").val());
		 $("#concreteLabel").prop("hidden",false);
	  $("#relTemp").text(conVal+" Mpa");
	  toastr.remove();
	  change();
	}); 
   
 
       $("#steelGrade").change(function(){
	  steelVal = parseInt($("#steelGrade").val());	  
	   $("#steelLabel").prop("hidden",false);
	  $("#relTemp1").text(steelVal+" Mpa");
});
   
      $("#loadOnBeam").change(function(){
	beamLoad = parseInt($("#loadOnBeam").val());
});

//$("#loadMag").click(function(){
//	$("#blink").prop("hidden",false);
//	blinker();
//	
//});

//$("#beamWidth1").click(function(){
//	$("#blink").prop("hidden",true);
//});

var totDepth=0;
 
 $("#w1Width").click(function(){
//	$("#blink").prop("hidden",false);
//	blinker();
	toastr.error('<span class="blinking1">Enter Values between 0.23 m to 2 m</span>');
//	 toastr.warning('Enter Values between 0.23 m to 2 m');
	 $("#blink").prop("hidden",true);
});


$("#w2Width").click(function(){
	 toastr.remove();
	toastr.error('<span class="blinking1">Enter Values between 0.23 m to 2 m</span>');
//	 toastr.warning('Enter Values between 0.23 m to 2 m');
	 $("#blink").prop("hidden",true);
});
 
var longReinVal=0; 
$("#longRein").change(function(){
     toastr.remove();
		longReinVal = $("#longRein").val();
		ren();	

	}); 
 
var shearReinVal=0; 
$("#shearRein").change(function(){
		shearReinVal = $("#shearRein").val();
		ren();	
	}); 
 
 $("#nominalCover").click(function(){
	toastr.error('<span class="blinking1">Enter Values between 20 mm to 70 mm</span>');
//	toastr.warning('Enter Values between 20 mm to 70 mm');
	$("#blink1").prop("hidden",false);
	blinker();
});
 
 
  $("#refer").click(function(){
	var ht = '<iframe src="images/plain-and-reinforced-concrete.pdf#page=48"  width="100%;" height="600px;" ></iframe>'
	
	$(".modal-header").css('background-color', '#45898680');
	$(".modal-header").html("Reference");
	$("#MsgModal1").html(ht);
	
});
 
 

$("#checkConfg").click(function(){
	toastr.remove();
	
	
	
	beamSpanVal = $("#beamSpan").val();
//	loadMagVal = $("#loadMag").val();
	w1WidthVal = $("#w1Width").val();
	w2WidthVal = $("#w2Width").val();
	nominalCoverVal = $("#nominalCover").val();
//	beamWidth1Val = $("#beamWidth1").val();
	
	shearReinVal = parseInt($("#shearRein").val());
	longReinVal = parseInt($("#longRein").val());
	steelVal = parseInt($("#steelGrade").val());	
	conVal = parseInt($("#concreteGrade").val());
	
	if(beamSpanVal==""||w1WidthVal==""||w2WidthVal==""||nominalCoverVal==""||conVal==0||steelVal==0||longReinVal==0||shearReinVal==0){
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Values Missing");
			
			
//			var ht = '<iframe src="images/plain-and-reinforced-concrete.pdf#page=48"  width="100%;" height="600px;" ></iframe>'
//	$(".modal-header").css('background-color', '#45898680');
//	$(".modal-header").html("Reference");
//	$("#MsgModal1").html(ht);
			
	}else{
		
	beamSpanVal = parseFloat($("#beamSpan").val());
//	loadMagVal = parseFloat($("#loadMag").val());
	w1WidthVal = parseFloat($("#w1Width").val());
	w2WidthVal = parseFloat($("#w2Width").val());
	nominalCoverVal = parseFloat($("#nominalCover").val());
//	beamWidth1Val = parseFloat($("#beamWidth1").val());
    if(beamSpanVal<=0||loadMagVal<=0||w1WidthVal<=0||w2WidthVal<=0||nominalCoverVal<=0){
	   
	        $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter value greater than zero");
	   
    }else if(nominalCoverVal<20||nominalCoverVal>70){
		   $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter nominal cover value between 20 mm to 70 mm");
	}else if(w1WidthVal<0.23||w1WidthVal>2){
		    $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the value for w<sub>1</sub> between 0.23 m to 2 m");
	}else if(w2WidthVal<0.23||w2WidthVal>2){
		    $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the value for w<sub>2</sub> between 0.23 m to 2 m");
	}else if(beamSpanVal>10){
		   
		   $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the value between 1m to 10m");
		   
	}else{
		$("#blink1").prop("hidden",true);
		$('#forwardButton').removeClass("disabled");		
			$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("<b>Configuration successful. Click the next arrow to proceed.</b>");
			
			$("#beamSpan").prop("disabled",true);
			$("#concreteGrade").prop("disabled",true);
			$("#steelGrade").prop("disabled",true);
			$("#w1Width").prop("disabled",true);
			$("#w2Width").prop("disabled",true);
			
			$("#longRein").prop("disabled",true);
			$("#shearRein").prop("disabled",true);
			$("#nominalCover").prop("disabled",true);
			
	    }
	}
	
}); 
 
 
 
function blinker()
  {
    if(document.getElementById("blink"))
    {
	    var d = document.getElementById("blink") ;		
        d.style.color= (d.style.color=='red'?'blue':'red');		
        
    } if(document.getElementById("blink1"))
    {
	    var d = document.getElementById("blink1") ;		
        d.style.color= (d.style.color=='red'?'blue':'red');		
        
    } if(document.getElementById("blink3"))
    {
	    var d = document.getElementById("blink3") ;		
        d.style.color= (d.style.color=='red'?'blue':'red');		
        
    }
    
	setTimeout('blinker()', 1200);
}  
 
    


	
	
	
	
	
	