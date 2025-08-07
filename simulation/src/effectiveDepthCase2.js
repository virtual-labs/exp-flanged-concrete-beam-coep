var yf = 0;
var cu = 0;
var ast;
var tu = 0;
function DcalculateCase2(){
	$("#forwardButton").addClass("disabled");
             $('#backwardButton').addClass("disabled");
	
	var htm = '<div class = "row">'
	              +'<div class="col-sm-1 marginBottom" >'
	              +'</div>'
                  +'<div class="col-sm-10 marginBottom" id="">'
                  +' <center><label class="labelstyle " style="margin-left:10px;">When neutral axis in the web and the section is balanced<br>Total compressive force = Total tensile force <br> obtain x<sub>u</sub> by equating, C<sub>u </sub>= T<sub>u</sub></label></center> '
                  +'</div>'
                  +'<div class="col-sm-1 marginBottom" >'
	              +'</div>'
                  +'</div>'
                  
//                  +'<div class = "row">'
//	              +'<div class="col-sm-1 marginBottom" >'
//	              +'</div>'
//                  +'<div class="col-sm-10 marginBottom" id="steelGradeLabel">'
//                  +' <center><label class="labelstyle " style="margin-left:10px;"></label></center> '
//                  +'</div>'
//                  +'<div class="col-sm-1 marginBottom" >'
//	              +'</div>'
//                  +'</div>'
                  +'<div class = "row">'
//	              +'<div class="col-sm-1 marginBottom" >'
//	              +'</div>'
                  +'<div class="col-sm-11 marginBottom" id="steelGradeLabel">'
                  +' <center><label class="labelstyle " style="margin-left:10px;">yf = 0.15 x<sub>u</sub> + 0.65 d<sub>f</sub></label></center> '
                  +'</div>'
                  +'<div class="col-sm-1 marginBottom" >'
	              +'</div>'
                  +'</div>'
                  
                  
                  
                   +'<div class="row" id="yfCalculate" >'
				   +'<div class="col-sm-5 ">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Calculate yf :  </label>'
				   +'</div>'
				   +'<div class="col-sm-3" id="valueStep1">'
				   +'<input type="number"  value="" id="text6"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-1">'
				   +'<i class="fa fa-info-circle fafaInfoGreen"  title="Refer Values" style="margin-top:15px;" id="yfValues" data-toggle="modal" data-target="#myModal" ></i>'

				   +'</div>'
				   +'<div class="col-sm-3"  id="submitStep1">'
				   +'<button type="submit" class="btn btn-danger"  id="submit_load6" data-toggle="modal" data-target="#myModal" style="width:100%;margin-top: 16px;" >Submit</input>'
				   +'</div>'
				   +'</div>'
                    
                  
                  +'<div class = "row" id = "cuCalculateLabel" style = "margin-top:15px;margin-bottom:-5px;"hidden>'
//	              +'<div class="col-sm-1 marginBottom" >'
//	              +'</div>'
                  +'<div class="col-sm-11 marginBottom" id="steelGradeLabel" >'
                  +' <center><label class="labelstyle " style="margin-left:10px;">C<sub>u</sub> = 0.36 f<sub>ck</sub>x<sub>u</sub>b<sub>w</sub> + 0.45 f<sub>ck</sub> (b<sub>f</sub> - b<sub>w</sub>) &times; yf </label></center> '
                  +'</div>'
                  +'<div class="col-sm-1 marginBottom" >'
	              +'</div>'
                  +'</div>'
                  
                  
                   +'<div class="row" id="cuCalculate" hidden>'
				   +'<div class="col-sm-5 ">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Calculate C<sub>u</sub> (N/mm<sup>2</sup>) :  </label>'
				   +'</div>'
				   +'<div class="col-sm-3" id="valueStep1">'
				   +'<input type="number"  value="" id="text7"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
				   +'</div>'
				   
				    +'<div class="col-sm-1">'
				   +'<i class="fa fa-info-circle fafaInfoGreen"  title="Refer Values" style="margin-top:15px;" id="cuValues" data-toggle="modal" data-target="#myModal" ></i>'

				   +'</div>'
				   
				   +'<div class="col-sm-3"  id="submitStep1">'
				   +'<button type="submit" class="btn btn-danger"  id="submit_load7" data-toggle="modal" data-target="#myModal" style="width:100%;margin-top: 16px;" >Submit</input>'
				   +'</div>'
				   +'</div>'
                  
                  
                   +'<div class="row" id="astCal" hidden>'
				   +'<div class="col-sm-5 ">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Calculate Ast :  </label>'
				   +'</div>'
				   +'<div class="col-sm-3" id="valueStep1">'
				   +'<input type="number"  value="" id="text8"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
				   +'</div>'
				   
				     +'<div class="col-sm-1">'
				   +'<i class="fa fa-info-circle fafaInfoGreen"  title="Refer Values" style="margin-top:15px;" id="astValues" data-toggle="modal" data-target="#myModal" ></i>'

				   +'</div>'
				   
				   
				   +'<div class="col-sm-3"  id="submitStep1">'
				   +'<button type="submit" class="btn btn-danger"  id="submit_load8" data-toggle="modal" data-target="#myModal" style="width:100%;margin-top: 16px;" >Submit</input>'
				   +'</div>'
				   +'</div>'
          
                  +'<div class = "row" id = "tuCal" style = "margin-top:15px;margin-bottom:-5px;"hidden>'
//	              +'<div class="col-sm-1 marginBottom" >'
//	              +'</div>'
                  +'<div class="col-sm-11 marginBottom" id="steelGradeLabel" >'
                  +' <center><label class="labelstyle " style="margin-left:10px;"> T<sub>u</sub> = 0.875 fy &times; Ast</label></center> '
                  +'</div>'
                  +'<div class="col-sm-1 marginBottom" >'
	              +'</div>'
                  +'</div>'
                 
                 
                    +'<div class="row" id="tuValCal" hidden>'
				   +'<div class="col-sm-5 ">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Calculate T<sub>u</sub> :  </label>'
				   +'</div>'
				   +'<div class="col-sm-3" id="valueStep1">'
				   +'<input type="number"  value="" id="text9"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
				   +'</div>'
				   
				     +'<div class="col-sm-1">'
				   +'<i class="fa fa-info-circle fafaInfoGreen"  title="Refer Values" style="margin-top:15px;" id="tuValues" data-toggle="modal" data-target="#myModal" ></i>'

				   +'</div>'
				   
				   
				   +'<div class="col-sm-3"  id="submitStep1">'
				   +'<button type="submit" class="btn btn-danger"  id="submit_load9" data-toggle="modal" data-target="#myModal" style="width:100%;margin-top: 16px;" >Submit</input>'
				   +'</div>'
				   +'</div>'
                 
                  $("#page4Div1").html(htm);
                  
                  var idc21 = 1;
                  
                  $("#yfValues").click(function(){
	$(".modal-header").html("Refer Values");
			$(".modal-header").css("background","rgba(78, 109, 114, 1)");
			$(".modal-header").css("color","#fff");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("<b>x<sub>u</sub> = "+xuVal+" <br> d<sub>f</sub> = "+flangeDepth+"</b>");
	
});
          
             $("#cuValues").click(function(){
	$(".modal-header").html("Refer Values");
			$(".modal-header").css("background","rgba(78, 109, 114, 1)");
			$(".modal-header").css("color","#fff");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("<b> f<sub>ck</sub> = "+conVal+" Mpa<br> x<sub>u</sub> = "+xuVal+" <br> b<sub>w</sub> = "+beamWidthValw+" mm<br> b<sub>f</sub> = "+bfVal+"</b>");
	
});
    
    $("#astValues").click(function(){
	$(".modal-header").html("Refer Values");
	$(".modal-header").css("background","rgba(78, 109, 114, 1)");
	$(".modal-header").css("color","#fff");
	$("#btnModal").removeClass("btn-success").addClass("btn-danger");
	$("#MsgModal").html("<b> f<sub>ck</sub> = "+conVal+" Mpa<br> f<sub>y</sub> = "+steelVal+" Mpa<br> M<sub>u</sub> = "+bendingMom+" kNm <br> b = b<sub>w</sub> = "+beamWidthValw+" mm<br> d = D - d"+"'"+"<br> where, <br> D = "+totDepth+"<br> d"+"'"+" = "+effectCover+"mm </b>");
	
});


//$("#astValues").click(function(){
//	$(".modal-header").html("Refer Values");
//	$(".modal-header").css("background","rgba(78, 109, 114, 1)");
//	$(".modal-header").css("color","#fff");
//	$("#btnModal").removeClass("btn-success").addClass("btn-danger");
//	$("#MsgModal").html("<b> f<sub>ck</sub> = "+conVal+" <br> f<sub>y</sub> = "+steelVal+" <br> M<sub>u</sub> = "+bendingMom+"  <br> b = b<sub>w</sub> = "+beamWidthValw+" <br> d = D - d"+"'"+"<br> where, <br> D = "+totDepth+"<br> d"+"'"+" = "+effectCover+" ");
//	
//});

$("#tuValues").click(function(){
	$(".modal-header").html("Refer Values");
	$(".modal-header").css("background","rgba(78, 109, 114, 1)");
	$(".modal-header").css("color","#fff");
	$("#btnModal").removeClass("btn-success").addClass("btn-danger");
	$("#MsgModal").html("<b> f<sub>y</sub> = "+steelVal+" Mpa");
	
});
                  
                  $("#submit_load6").click(function(){
	               var mul1 = (0.15*xuVal).toFixed(2);
	               mul1 = parseFloat(mul1);
	               var mul2 = (0.65*flangeDepth).toFixed(2);
	               mul2 = parseFloat(mul2);
	               
	               yf = mul1+mul2;
	               
	               var yfEnter = $("#text6").val();
	               
	               if(yfEnter == ""){
			
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the Values");
				
			}else{
	             
	            yfEnter = parseFloat($("#text6").val());
				if (idc21 <= 3) {
				
				if (yfEnter == yf) {
                    
                    $("#cuCalculateLabel").prop("hidden",false);
                    $("#cuCalculate").prop("hidden",false);
                    $("#submit_load6").prop("disabled",true);
                    $("#text6").prop("disabled",true);
 
				} else if (yfEnter != yf) {
				  $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is incorrect.<br>Try again");	

				}
	
	
			} else if (idc21 == 4) {
			$(".modal-header").html("Formula");
			$(".modal-header").css("background","#23435c");
			$(".modal-header").css("color","#fff");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
		    $("#MsgModal").html("<b> yf = 0.15 x<sub>u</sub> + 0.65 d<sub>f</sub></b>");

				
			} else {
	
				if (yfEnter == yf) {
					
                  $("#cuCalculateLabel").prop("hidden",false);
                    $("#cuCalculate").prop("hidden",false);
                    $("#submit_load6").prop("disabled",true);
                    $("#text6").prop("disabled",true);
                    
            } else {
					
			$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + yf);
				 

				}
			}
			idc21++;
	         }      
	              
});
   
   var idc22 = 1;
   $("#submit_load7").click(function(){
	  var firstTerm = (0.36*conVal*xuVal*beamWidthValw).toFixed(2);
	  firstTerm = parseFloat(firstTerm);
	  
	  var sub = parseFloat(bfVal) - parseFloat(beamWidthValw);
	  
	  var secondTerm = (0.45*conVal*sub*yf).toFixed(2);
	  secondTerm = parseFloat(secondTerm);
	  var cu1 = parseFloat(firstTerm)+parseFloat(secondTerm);
//	  cu = Math.pow(10,-6)*cu1;
	  cu = cu1.toFixed(2);
	  cu = parseFloat(cu);
	 
	 
    var cuEnter = $("#text7").val();
    
    if(cuEnter == ""){
			
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the values");
				
			}else{
				cuEnter = parseFloat($("#text7").val());
				
				if (idc22 <= 3) {
				
				if (cuEnter == cu) {
                    
//                    $("#cuCalculateLabel").prop("hidden",false);
//                    $("#cuCalculate").prop("hidden",false);
 					 $("#astCal").prop("hidden",false);
                    $("#submit_load7").prop("disabled",true);
                    $("#text7").prop("disabled",true);
 
				} else if (cuEnter != cu) {
				  $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is incorrect.<br>Try again");	

				}
	
	
			} else if (idc22 == 4) {
			$(".modal-header").html("Formula");
			$(".modal-header").css("background","#23435c");
			$(".modal-header").css("color","#fff");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
		    $("#MsgModal").html("<b> C<sub>u</sub> = 0.36 f<sub>ck</sub>x<sub>u</sub>b<sub>w</sub> + 0.45 f<sub>ck</sub> (b<sub>f</sub> - b<sub>w</sub>) &times; yf </b>");

				
			} else {
	
				if (cuEnter == cu) {
					 
//                  $("#cuCalculateLabel").prop("hidden",false);
//                    $("#cuCalculate").prop("hidden",false);
                    $("#submit_load7").prop("disabled",true);
                    $("#text7").prop("disabled",true);
                    $("#astCal").prop("hidden",false);
                    
            } else {
					
			$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + cu);
				 

				}
			}
			idc22++;
	 	
	      }
	  
});               
      
      
      var idc23 = 1;
      $("#submit_load8").click(function(){
	     
	     var mulConver = bendingMom*Math.pow(10,6);
			var numMul = 4.6*mulConver;			
			var dValCal = parseFloat(totDepth) - parseFloat(effectCover);
			var mulOfTerms1 = conVal*bfVal*dValCal*dValCal;
			var mulOfTerms = mulOfTerms1.toFixed(2);
			var dmul = parseFloat(mulOfTerms);
			
			var divVal1 = (numMul/dmul).toFixed(2);
			var subCal = 1-divVal1;
			var sqrtDiv = Math.sqrt(subCal);
			
			var sqrtVal = sqrtDiv.toFixed(2);
			
			var finalSub1 = parseFloat(1)-parseFloat(sqrtVal);
			var finalSub = finalSub1.toFixed(2);
			
			
			var mulNum1 = (0.5*conVal).toFixed(2);
			var divFirst = (mulNum1/steelVal).toFixed(2);
			
			var mulValues = finalSub*divFirst*bfVal*dValCal;
			ast = mulValues.toFixed(2);
			ast = parseFloat(ast);
			
			var astEnter = $("#text8").val();
			
			 if(astEnter == ""){
			
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the values");
				
			}else{
				
				astEnter = parseFloat($("#text8").val());
				
				if (idc23 <= 3) {
				
				if (astEnter == ast) {
                    
//                    $("#cuCalculateLabel").prop("hidden",false);
//                    $("#cuCalculate").prop("hidden",false);
 					$("#tuCal").prop("hidden",false);
                    $("#submit_load8").prop("disabled",true);
                    $("#text8").prop("disabled",true);
                      $("#tuValCal").prop("hidden",false);
                      autoScroll();
 
				} else if (astEnter != ast) {
				  $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is incorrect.<br>Try again");	

				}
	
	
			} else if (idc23 == 4) {
			$(".modal-header").html("Formula");
			$(".modal-header").css("background","#23435c");
			$(".modal-header").css("color","#fff");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");

	        modelImg2 = '<img src="images/astFormula.png" class="img-responsive" alt="Cinque Terre">'
            $("#MsgModal").html(modelImg2);

				
			} else {
	
				if (astEnter == ast) {
					 
//                  $("#cuCalculateLabel").prop("hidden",false);
//                    $("#cuCalculate").prop("hidden",false);
                    $("#submit_load8").prop("disabled",true);
                    $("#text8").prop("disabled",true);
                   $("#tuCal").prop("hidden",false);
                   $("#tuValCal").prop("hidden",false);
                    autoScroll();
            } else {
					
			$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + ast);
				 

				}
			}
			idc23++;
			
			}
});
     
     
    var idc24 = 1;
   $("#submit_load9").click(function(){  
     tu = (0.875*steelVal*ast).toFixed(2);
     tu = parseFloat(tu);
     
     var tuEnter = $("#text9").val();
     
      if(tuEnter == ""){
			
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the values");
				
			}else{
      
               tuEnter = parseFloat($("#text9").val());
				
				if (idc24 <= 3) {
				
				if (tuEnter == tu) {

                    $("#submit_load9").prop("disabled",true);
                    $("#text9").prop("disabled",true);
             $("#forwardButton").addClass("disabled");
             $('#backwardButton').removeClass("disabled");
			 
			   Swal.fire({
        icon: 'success',
        title: 'Experiment Completed!',
        confirmButtonText: 'Ok',
        customClass: {
          icon: 'custom-icon',
          popup: 'custom-popup',
          title: 'custom-title',
          confirmButton: 'custom-confirm-button',
          cancelButton: 'custom-cancel-button',
        }
      });
			 
 
				} else if (tuEnter != tu) {
				  $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is incorrect.<br>Try again");	

				}
	
	
			} else if (idc24 == 4) {
			$(".modal-header").html("Formula");
			$(".modal-header").css("background","#23435c");
			$(".modal-header").css("color","#fff");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");

           $("#MsgModal").html("<b> T<sub>u</sub> = 0.875 fy &times; Ast </b>");

				
			} else {
	
				if (tuEnter == tu) {
					 
             $("#submit_load9").prop("disabled",true);
                    $("#text9").prop("disabled",true);
             $("#forwardButton").addClass("disabled");
             $('#backwardButton').removeClass("disabled");
			 
			   Swal.fire({
        icon: 'success',
        title: 'Experiment Completed!',
        confirmButtonText: 'Ok',
        customClass: {
          icon: 'custom-icon',
          popup: 'custom-popup',
          title: 'custom-title',
          confirmButton: 'custom-confirm-button',
          cancelButton: 'custom-cancel-button',
        }
      });
            } else {
					
			$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + tu);
				 

				}
			}
			idc24++;
                
      
       }
   });      
            
}


function getValueCase2(){
	secondConfigAnim();
	 bchange();
	$("#text6").val(yf);
	$("#text6").prop("disabled",true);
	$("#submit_load6").prop("disabled",true);
	
	$("#steelGradeLabel").prop("hidden",false);
	$("#cuCalculateLabel").prop("hidden",false);
	$("#cuCalculate").prop("hidden",false);
	$("#text7").val(cu);
	$("#text7").prop("disabled",true);
	$("#submit_load7").prop("disabled",true);
	
	$("#astCal").prop("hidden",false);
	$("#text8").val(ast);
	$("#text8").prop("disabled",true);
	$("#submit_load8").prop("disabled",true);
	
	$("#tuCal").prop("hidden",false);
	$("#tuValCal").prop("hidden",false);
	$("#text9").val(tu);
	$("#text9").prop("disabled",true);
	$("#submit_load9").prop("disabled",true);
}