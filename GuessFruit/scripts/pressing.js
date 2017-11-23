function any(i, linkToImg, arrDivs, helperArr, backgroundArr, audio){
	if(i>=0 && i<2){
		arrDivs[i].css("background-image", linkToImg);
	}
	if(i>=2 && i<4){
		arrDivs[i].css("background-image", linkToImg);
	}
	if(i>=4 && i<6){
		arrDivs[i].css("background-image", linkToImg);
	}
	if(i>=6 && i<8){
		arrDivs[i].css("background-image", linkToImg);
	}
	if(i>=8 && i<10){
		arrDivs[i].css("background-image", linkToImg);
	}
	if(i>=10 && i<12){
		arrDivs[i].css("background-image", linkToImg);
	}
	if(i>=12 && i<14){
		arrDivs[i].css("background-image", linkToImg);
	}
	if(i>=14 && i<16){
		arrDivs[i].css("background-image", linkToImg);
	}
	
	console.log(boolArr);
	
	if(countBlockClick == 0){
		i1 = i;
		countBlockClick++;
	}else{
		i2 = i;
		countBlockClick = 0;
	}

	function x(){
		counterCheckBackg++;
		helperArr[helperArr.length] = arrDivs[i];
		backgroundArr[backgroundArr.length] = arrDivs[i].css("background-image");
		
		if(counterCheckBackg == 2){
	
			audit(backgroundArr, helperArr, audio, dialogWindowWin, i1, i2);
			counterCheckBackg = 0;                                                                                            
		}		
	}
	
	setTimeout(x, 300);
	
}

function clickOnDivs(arrDivs, helperArr, backgroundArr, audio, dialogWindowWin){
		arrDivs[0].click(function(){
			if(boolArr[0] == true){
				return false;
			}
			boolArr[0] = true;
			any(0, 'url(img/ananas.png)', arrDivs, helperArr, backgroundArr, audio);	   
			
		});

		arrDivs[1].click(function(){
	
			if(boolArr[1] == true){
				return false;
			}
			boolArr[1] = true;
			any(1, 'url(img/ananas.png)', arrDivs, helperArr, backgroundArr, audio);	
		});			
	
		arrDivs[2].click(function(){
			if(boolArr[2] == true){
				return false;
			}
			boolArr[2] = true;
			any(2, "url(img/watermelon.png)", arrDivs, helperArr, backgroundArr, audio);
		});			
		
		arrDivs[3].click(function(){
			if(boolArr[3] == true){
				return false;
			}
			boolArr[3] = true;
			any(3, "url(img/watermelon.png)", arrDivs, helperArr, backgroundArr, audio);
		});			
	    	
	    arrDivs[4].click(function(){
	    	if(boolArr[4] == true){
				return false;
			}
			boolArr[4] = true;
			any(4, "url(img/kiwi.png)", arrDivs, helperArr, backgroundArr, audio);
		});			
		  
		arrDivs[5].click(function(){
			if(boolArr[5] == true){
				return false;
			}
			boolArr[5] = true;			
			any(5, "url(img/kiwi.png)", arrDivs, helperArr, backgroundArr, audio);
		});			

		arrDivs[6].click(function(){
			if(boolArr[6] == true){
				return false;
			}
			boolArr[6] = true;
			any(6, "url(img/apple.png)", arrDivs, helperArr, backgroundArr, audio);
		});			
		
		arrDivs[7].click(function(){
			if(boolArr[7] == true){
				return false;
			}
			boolArr[7] = true;
			any(7, "url(img/apple.png)", arrDivs, helperArr, backgroundArr, audio);
		});			

		arrDivs[8].click(function(){
			if(boolArr[8] == true){
				return false;
			}
			boolArr[8] = true;
			any(8, "url(img/banans.png)", arrDivs, helperArr, backgroundArr, audio);
		});			

		arrDivs[9].click(function(){
			if(boolArr[9] == true){
				return false;
			}
			boolArr[9] = true;
			any(9, "url(img/banans.png)", arrDivs, helperArr, backgroundArr, audio);
		});			

		arrDivs[10].click(function(){
			if(boolArr[10] == true){
				return false;
			}
			boolArr[10] = true;
			any(10, "url(img/grape.png)", arrDivs, helperArr, backgroundArr, audio);
		});			
		
		arrDivs[11].click(function(){
			if(boolArr[11] == true){
				return false;
			}
			boolArr[11] = true;
			any(11, "url(img/grape.png)", arrDivs, helperArr, backgroundArr, audio);
		});			
		
		arrDivs[12].click(function(){
			if(boolArr[12] == true){
				return false;
			}
			boolArr[12] = true;
			any(12, "url(img/pear.png)", arrDivs, helperArr, backgroundArr, audio);
		});			
 
		arrDivs[13].click(function(){
			if(boolArr[13] == true){
				return false;
			}
			boolArr[13] = true;
			any(13, "url(img/pear.png)", arrDivs, helperArr, backgroundArr, audio);
		});			

		arrDivs[14].click(function(){
			if(boolArr[14] == true){
				return false;
			}
			boolArr[14] = true;
			any(14, "url(img/strawberries.png)", arrDivs, helperArr, backgroundArr, audio);
		});			

		arrDivs[15].click(function(){
			if(boolArr[15] == true){
				return false;
			}
			boolArr[15] = true;
			any(15, "url(img/strawberries.png)", arrDivs, helperArr, backgroundArr, audio);
		});			
	}



