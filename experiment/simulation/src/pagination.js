
  var pageno=1; 
  var pagecount=1; 

 var initFlg = 0;
 var initFlg1 = 0;
 var initFlg2 = 0;
 
//  $('#forwardButton').prop("hidden",false);
//  $('#backwardButton').prop("hidden",false);
  
	 $("#page1").prop("hidden",false);            		
            	 $("#page2,#page3,#page4,#page5").prop("hidden",true);
//            	 footingAnim2(pre,conVal,steelVal,colSize,d_val,sbc_val,eCover_val,totalDepthvalue);
			
			console.log("page1 val ="+pageno);
	$('#forwardButton').click(function(){
				if(pageno<5)
       		pageno=pageno+1;
            if(pageno==1){
    	   		
            	$("#page1").prop("hidden",false);
//            		$(".modal-backdrop").hide();
            	 $("#page2,#page3,#page4,#page5").prop("hidden",true);
            }
            else if(pageno==2){
//            	
            	$("#page2").prop("hidden",false); 
           
				 secondConfig();
//            	 secondConfigAnim();
                 colorSet();
            	 if(initFlg==1){
						getValuesConfig2();
					}
			    if(initFlg==0){ 
			     initFlg++;
			   }
            	 
            	      	
//            	nextLevel2();
            	
//            	$(".modal-backdrop").hide();
				$("#page1,#page3,#page4,#page5").prop("hidden",true);
            }
            else if(pageno==3){
            	 $("#page3").prop("hidden",false);
            	calculateLength();
            	SecondPage();
            	
            	 if(initFlg1==1){
						nextGraphLevel();
					}
			    if(initFlg1==0){ 
			     initFlg1++;
			   }
            	
//            	$(".modal-backdrop").hide();
            	 $("#page1,#page2,#page4,#page5").prop("hidden",true);
            	
            } else if(pageno==4){
	             
	             $("#page4").prop("hidden",false);
	             $("#page1,#page2,#page3,#page5").prop("hidden",true);
	             Dcalculate();
			     staticDiag();
	               
	               if(initFlg2==1){
						getGraphVal();
					}
			    if(initFlg2==0){ 
			     initFlg2++;
			   }
	               
//	             reinCalulateBar();
//	             $(".modal-backdrop").hide();
	             
           }else if(pageno==5){
	             
	             $("#page5").prop("hidden",false);
	             $("#page1,#page2,#page3,#page4").prop("hidden",true);
//	             bendingMomentFinalShear();
//	             shearCalculate();
	             
//	             $(".modal-backdrop").hide();
	             
           }
           
//           $(".modal-backdrop").hide(); 
        });


$('#backwardButton').click(function(){
//	  $('.modal-backdrop').removeClass(' fade in');
				if(pageno>1)
				 pageno=pageno-1;
			
			if(pageno==5){
	 $("#page5").prop("hidden",false);
//	   $('.modal-backdrop').removeClass(' fade in');
//                 bendingMomentFinalShear();
	             shearCalculate();
	            
//	             $(".modal-backdrop").hide();
	             $("#page1,#page2,#page3,#page4").prop("hidden",true);
	
            }else	 
            if(pageno==4){
	 $("#page4").prop("hidden",false);
//	   $('.modal-backdrop').removeClass(' fade in');
	             reinCalulateBar();
//	             $(".modal-backdrop").hide();
	             $("#page1,#page2,#page3,#page5").prop("hidden",true);
	
            }
            else if(pageno==3){
 				$("#page3").prop("hidden",false);
// 				 $('.modal-backdrop').removeClass(' fade in');
            	nextGraphLevel();
//            	$(".modal-backdrop").hide();
            	 $("#page1,#page2,#page4,#page5").prop("hidden",true);//            	

            }
            else if(pageno==2){
				
            	$("#page2").prop("hidden",false);  
//            	 $('.modal-backdrop').removeClass(' fade in');	
            	 bendingMomentFinal();
//                 nextLevel2();
                
            	
//            	$(".modal-backdrop").hide();
				$("#page1,#page3,#page4,#page5").prop("hidden",true);
            	
            } else if(pageno==1){
	             $('.modal').removeClass('modal-backdrop');
	             $("#page1").prop("hidden",false);
//            		$(".modal-backdrop").hide();
            	 $("#page2,#page3,#page4,#page5").prop("hidden",true);
	            
           }
           
//            $(".modal-backdrop").hide();
        });
 