var flangeDepth=0;
var totDepth=0;
var bf,beamWidth=0, bfProportion=0;
var bfVal;
var beamWidthValw;
var totLoad = 0;
var liveWtEnter;
var wtCal = 0 ;

function secondConfig(){

     $("#forwardButton").addClass("disabled");
    $('#backwardButton').addClass("disabled");

    var htm1 = '<div class="row">'	
	+'<div class="col-sm-2">'
	+'</div>'
	+'<div class="col-sm-8">'
	+'<center><label class ="labelstyle" style="background:#cbe7e9; margin-bottom: 15px;">Assume section sizes </label></center>'
	+'</div>'
	+'<div class="col-sm-2">'
	+'</div>'
	+'</div>'
	
	+'<div class="row">'	
	+'<div class="col-sm-2">'
	+'</div>'
	+'<div class="col-sm-8">'
	+'<center><label class ="labelstyle" style="background:#e7e7e7; margin-bottom: 15px;">Clear span of Beam L<sub>0</sub> : '+beamSpanVal+' m </label></center>'
	+'</div>'

	+'<div class="col-sm-2">'
	+'</div>'
	+'</div>'
	
	
	 +'<div class="row" >'
				   +'<div class="col-sm-6 ">'
				   +'<label  class="labelstyle marginBottom" >Select total depth D :  </label>'
				   +'</div>'
				   +'<div class="col-sm-4" id="valueStep1">'
				   +'<select  class="form-control selectConf marginBottom"  style="height:auto;margin-bottom:5px; " " id="totDepth">'
				   +'<option value="0">--- Select  --- </option>'
				   +'<option value="300" >300</option>'
				   +'<option value="380" >380</option>'
				   +'<option value="450" >450</option>'
				   +'<option value="500" >500</option>'
				   +'<option value="530" >530</option>'
				   +'<option value="600" >600</option>'
				   +'<option value="700" >700</option>'
				   +'<option value="800" >800</option>'
				    +'<option value="900" >900</option>'
					 +'<option value="1000" >1000</option>'
				  
				   +'</select>'	   
				   +'</div>'
				   +'<div class="col-sm-2">'
	               +'</div>'
				   +'</div>'
	
	
	+'<div class="row">'	
	+'<div class="col-sm-6">'
	+'<label class="labelstyle marginBottom">Enter Depth of the flange d<sub>f</sub>: </label>'
	+'</div>'
	+'<div class="col-sm-4">'
//	+'<input type="number"  style= "width:100%; " onblur="updateLoadMag()" class=" form-control" id="loadMag" value="10">'
	+'<input type="number"  style= "width:100%;"  class=" form-control" id="flangeDepth" >'

	+'</div>'
	+'<div class="col-sm-2">'
	+'</div>'	
    +'</div>'

    
       + '<div class="row">'	     
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom">Enter width b<sub>w</sub> (mm) :  </label>'
	   +'</div>'
	   
	   +'<div class="col-sm-4">'
	   +'<select  class="form-control selectConf marginBottom" id="beamWidth" " style="height:auto;margin-bottom:5px; " >'
	   +'<option value="0">--- Select  --- </option>'
	   +'<option value="150" >150</option>'
	   +'<option value="200" >200</option>'
	   +'<option value="230" >230</option>'
	   +'<option value="300" >300</option>'
	   +'<option value="400" >400</option>'
	   +'<option value="500" >500</option>'
	   +'<option value="600" >600</option>'
	  
	   +'</select>'	   
	  
	   +'</div>'
	   +'<div class="col-sm-2" id="blink3" hidden>'
	   	+'<label class="labelstyle marginBottom" style="margin-top:5px; margin-left:-15px; width:50%;">Uncommon</label>'

	    +'</div>'
       +'</div>'
    
    
    +'<div class="row">'	
	+'<div class="col-sm-6">'
	+'<label class="labelstyle marginBottom">Enter width of beam b (mm) : </label>'
	+'</div>'
	+'<div class="col-sm-4">'
//	+'<input type="number"  style= "width:100%; " onblur="updateLoadMag()" class=" form-control" id="loadMag" value="10">'
	+'<input type="number"  style= "width:100%;"  class=" form-control" id="bWidth" >'

	+'</div>'
	+'<div class="col-sm-2">'
	+'</div>'	
    +'</div>'
    
    
    +'<div class="row">'	
	+'<div class="col-sm-6">'
	+'<label class="labelstyle marginBottom">Calculate the value for b<sub>f</sub> :  </label>'
	+'</div>'
	+'<div class="col-sm-3">'
	+'<input type="number"  style= "width:100%; " class=" form-control" id="bf" >'
    +'</div>'
    +'<div class="col-sm-3">'
   	+'<center><button type="button"   class="btn btn-info btnStyle" id="checkbf" style="width:80%"data-toggle="modal" data-target="#myModal" ><b>Verify </b></button></center>'		
	+'</div>'

	+'</div>'
	
	+'<div class="row">'	
	+'<div class="col-sm-6">'
	+'<label class="labelstyle marginBottom">Calculate self-weight of D.L. (kN/m):  </label>'
	+'</div>'
	+'<div class="col-sm-3">'
	+'<input type="number"  style= "width:100%; " class=" form-control" id="selfWt" disabled>'
    +'</div>'
    +'<div class="col-sm-3">'
   	+'<center><button type="button"   class="btn btn-info btnStyle" id="selfWtSubmit" style="width:80%"data-toggle="modal" data-target="#myModal" disabled><b>Verify </b></button></center>'		
	+'</div>'

	+'</div>'
	
	+'<div class="row">'	
	+'<div class="col-sm-6">'
	+'<label class="labelstyle marginBottom">Enter Live Load L.L. (kN/m):  </label>'
	+'</div>'
	+'<div class="col-sm-3">'
	+'<input type="number"  style= "width:100%; " class=" form-control" id="liveWt" disabled>'
    +'</div>'
    +'<div class="col-sm-3">'
   	+'<center><button type="button"   class="btn btn-info btnStyle" id="liveWtSubmit" style="width:80%"data-toggle="modal" data-target="#myModal" disabled><b>Verify </b></button></center>'		
	+'</div>'

	+'</div>'
	
	
	+'<div class="row">'	
	+'<div class="col-sm-1">'
	+'</div>'
	+'<div class="col-sm-10">'
	+'<center><label class="spanMsg" style=" margin-left:5px;" id="totLab" hidden>Total Load :<label id = "relTemp2" class="spanMsg" hidden> '+totLoad+' </label></label></center>   '
 
    +'</div>'
    +'<div class="col-sm-1">'
	+'</div>'

	+'</div>'
	
	    
	+'<div class="col-sm-12">'
	+'<center><button type="button"   class="btn btn-danger" id="checkConfg1" style="margin-top:10px; width:50%"data-toggle="modal" data-target="#myModal" disabled><b>SUBMIT </b></button></center>'
	+'</div>'
	    
   $("#page2Div2").html(htm1);
   
    
 $("#totDepth").change(function(){
	  totDepth = parseInt($("#totDepth").val());
       var max1 = (totDepth/3).toFixed(2);
       maxLimit = parseFloat(max1);
//       console.log("maxLimit : "+maxLimit);
       if(totDepth==0){
		$("#flangeDepth").prop("disabled",true);
	}else{
	 	$("#flangeDepth").prop("disabled",false);
//	 	$("#totDepth").prop("disabled",true);
		}
    });
   
  
$("#flangeDepth").change(function(){
	flangeDepth = parseFloat($("#flangeDepth").val()); 
	ratio = (totDepth/3).toFixed(2);
	MinRange = parseInt(ratio);
	MaxRange = totDepth-parseInt(30);
	
	if(flangeDepth<MinRange){
		$("#beamWidth").prop("disabled",true);
		toastr.error('<span class="blinking1">Enter value between '+MinRange+' and '+MaxRange+'</span>');
//		toastr.error("Enter value between "+MinRange+" and "+MaxRange);
	}else if(flangeDepth>MaxRange){
		$("#beamWidth").prop("disabled",true);
		toastr.error('<span class="blinking1">Enter value between '+MinRange+' and '+MaxRange+'</span>');
	}else{
		$("#beamWidth").prop("disabled",false);
//		$("#flangeDepth").prop("disabled",true);
//		$("#flangeDepth").blur(function(){
//	 flangeDepth = parseFloat($("#flangeDepth").val()); 
		dchange();
	}
	

});  
  
$("#bWidth").change(function(){
	
	bWidth = parseInt($("#bWidth").val());
	if(bWidth>(beamWidthValw+20) && bWidth<=1200){
		
		$("#bf").prop("disabled",false);
//		$("#bWidth").prop("disabled",true);
		$("#checkbf").prop("disabled",false);
		
	}else{
//		$("#bf").prop("disabled",true);
		$("#bWidth").prop("disabled",false);
		toastr.error('<span class="blinking1">Enter Value greater than '+(beamWidthValw+20)+' and value should not exceed 1200 mm	</span>');
		
//		toastr.error('Enter Value greater than '+(beamWidthValw+20));
	}
}); 
 
 

$("#beamWidth").change(function(){
	toastr.remove();
	
		beamWidthValw = parseInt($("#beamWidth").val());		
//		bfProportion = beamWidthVal*5;
//         bf =  $("#bf").val(bfProportion);
//         console.log("bf : "+bf);
//          bchange();

		  if(beamWidthValw==0){
			toastr.warning("Select Appropraite value");
			$("#beamWidth").prop("disabled",false);
		}else{
		if(beamWidthValw<400){
			$("#blink3").prop("hidden",true);
			
		}else{
		
		blinker();
		$("#blink3").prop("hidden",false);	

		$('#forwardButton').removeClass("disabled");
		}
		
//		$("#beamWidth").prop("disabled",true);
		$("#bWidth").prop("disabled",false);
		$("#checkbf").prop("disabled",false);
	 }	
	}); 
	
	$("#bf").change(function(){
		toastr.remove();
	});
	
 var id=1;
 var bfEnter;
 $("#checkbf").click(function(){
	bfEnter = $("#bf").val();
	if(totDepth==0||flangeDepth==""||beamWidthValw==0||bWidth==""||bfEnter==""){
		$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Select Appropriate Values");
	}else{
		flangeDepth = parseFloat($("#flangeDepth").val()); 
		bWidthEnter = parseFloat($("#bWidth").val());
		calculatebf();
		bfEnter = parseFloat($("#bf").val());
		if(bfEnter == ""){
			
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the Values");
				
			}else{
				 
				if (id <= 3) {
				
				if (bfEnter == bfVal) {				
	              bchange();
	        $("#checkbf").prop("disabled",true);
	        $("#totDepth").prop("disabled",true); 
	        $("#flangeDepth").prop("disabled",true);
	        $("#beamWidth").prop("disabled",true);
	        $("#bWidth").prop("disabled",true);
	        $("#bf").prop("disabled",true);
	        $("#selfWt").prop("disabled",false);
	       $("#selfWtSubmit").prop("disabled",false);
	       
//	       $("#totDepth").prop("disabled",true);
//$("#flangeDepth").prop("disabled",true);
//$("#bf").prop("disabled",true);
//$("#beamWidth").prop("disabled",true);
	        
				} else if (bfEnter != bfVal) {
				  $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is Incorrect.<br>Try again");	

				}
	
	
			} else if (id == 4) {
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			modelImg = '<img src="images/bfFormula.png" class="img-responsive" alt="Cinque Terre">'

		    $("#MsgModal").html(modelImg);

				
			} else {
	
				if (bfEnter== bfVal) {
					bchange();
					  
					   $("#checkbf").prop("disabled",true);
	        $("#totDepth").prop("disabled",true); 
	        $("#flangeDepth").prop("disabled",true);
	        $("#beamWidth").prop("disabled",true);
	        $("#bWidth").prop("disabled",true);
	        $("#bf").prop("disabled",true);
	      $("#selfWt").prop("disabled",false);
	       $("#selfWtSubmit").prop("disabled",false);
	      
					  
				} else {
					
			$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + bfVal);
				 

				}
			}
			id++;
				
			}
		
		
	}
});
 
 var wtCalEnter;
 var idWt = 1;
 
 
  $("#selfWtSubmit").click(function(){
    	wtCalEnter = $("#selfWt").val(); 
     wtCal = (25*bfVal*totDepth)*Math.pow(10,-6);
    wtCal = (wtCal).toFixed(1);
//    console.log("wtCal : "+wtCal);

      if(wtCalEnter == ""){
			
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the Values");
				
			}else{ 
          
         wtCalEnter = parseFloat($("#selfWt").val()); 
		
		if(wtCalEnter == ""){
			
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the Values");
				
			}else{
				 
				if (idWt <= 3) {
				
				if (wtCalEnter == wtCal) {				
	      
	   	   $("#liveWt").prop("disabled",false);
	   	    $("#liveWtSubmit").prop("disabled",false);
	      	$("#selfWt").prop("disabled",true);
	         $("#selfWtSubmit").prop("disabled",true);
	         
				} else if (wtCalEnter != wtCal) {
				  $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is Incorrect.<br>Try again");	

				}
	
	
			} else if (idWt == 4) {
			$(".modal-header").html("Formula ");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Self weight of beam = 25 &times; B &times; D");

				
			} else {
	
				if (wtCalEnter == wtCal) {
					
   	   $("#liveWt").prop("disabled",false);
   	    $("#liveWtSubmit").prop("disabled",false);
	      $("#selfWt").prop("disabled",true);
	         $("#selfWtSubmit").prop("disabled",true);
					  
				} else {
					
			$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + wtCal);
				 

				}
			}
			idWt++;
				
			}
		
	}
 
 });
 
 
 $("#liveWtSubmit").click(function(){
	liveWtEnter = $("#liveWt").val();
	 if(liveWtEnter == ""){
			
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the Values");
				
			}else{ 
				 liveWtEnter = parseFloat($("#liveWt").val());
				 if(liveWtEnter>=2 && liveWtEnter<=5){
					$("#liveWt").prop("disabled",true);
					$("#liveWtSubmit").prop("disabled",true);
					 $("#checkConfg1").prop("disabled",false);
					 totLoad = parseFloat(wtCal)+parseFloat(liveWtEnter);
					 totLoad = totLoad.toFixed(2);
					 totLoad = parseFloat(totLoad);
					 loadMagVal = totLoad;
					 $("#totLab").prop("hidden",false);
					 $("#relTemp2").prop("hidden",false);
					 $("#relTemp2").text(totLoad+" kN/m");
					 
				}else{
					$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the value between 2 kN/m to 5 kN/m");
				}
			}	
})
 
 
 
 function calculatebf(){
	var clearBeamConvert = beamSpanVal*1000;
	var div = ((clearBeamConvert/bWidthEnter)+4).toFixed(2);
	var mainDiv = (clearBeamConvert/div).toFixed(2);
	var halfAdd = parseFloat(mainDiv);
	var bfVal1 = (beamWidthValw+halfAdd).toFixed(2);
	 bfVal = parseFloat(bfVal1);
//	console.log("bfVal "+bfVal);
}
 
 $("#checkConfg1").click(function(){	      
	        bfProportion = $("#bf").val();
		    $("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("<b>Click the next arrow to proceed.</b>");
			$('#forwardButton').removeClass("disabled");
			$('#backwardButton').removeClass("disabled");	
	
});
   
}

function getValuesConfig2(){
	bchange();
	
	$("#beamWidth").val(beamWidthValw);	
	$("#beamWidth").prop("disabled",true);
	$("#flangeDepth").val(flangeDepth); 
	$("#flangeDepth").prop("disabled",true);
	$("#totDepth").val(totDepth);
	$("#totDepth").prop("disabled",true);
	$("#bf").val(bfProportion);
	$("#bf").prop("disabled",true);
	$("#bWidth").val(bfVal);
	$("#bWidth").prop("disabled",true);
	$("#selfWt").val(wtCal);
	$("#selfWt").prop("disabled",true);
	$("#liveWt").val(liveWtEnter);
	$("#liveWt").prop("disabled",true);
	$("#relTemp2").prop("hidden",false);
	$("#relTemp2").text(totLoad+" kN/m");
	
	$("#checkConfg1").prop("disabled",true);
//	beamWidthVal = $("#beamWidth").val(beamWidthVal);	
//	flangeDepth = $("#flangeDepth").val(flangeDepth);
//	totDepth = $("#totDepth").val(totDepth);
//	bf = $("#bf").val(bf);
//	bfVal = $("#bWidth").val(bfVal);
} 
	

	    