//Рандомна  перемішка масиву
	function shufle(array){
		for(var i=array.length;--i>0;){
		 	var r = Math.floor(Math.random() * (i+1));
			 var d = array[r];
			 array[r]=array[i];
			 array[i]=d;
		}
		return array;
	}		
		
		
		
		
	//Перевірка на співпадіння фонів
	function audit(backgroundArr, helperArr, audio, dialogWindowWin, i1, i2){
		console.log(i1, i2);
		if(backgroundArr[0] === backgroundArr[1]){
		   counterFinalGame++;
			audio.attr("src", "audio/coin.mp3");
			for(var i=0; i < 2; i++){
				helperArr[i].off();
			}
		}else{
			
			for(var i=0; i < 2; i++){
				$(helperArr[i]).css("background",  "url(img/unkownImg.png)");	
				boolArr[i1] = false;
				boolArr[i2] = false;
			}
		}	
		console.log(boolArr);	
		if(counterFinalGame == 8){
			$(dialogWindowWin).css("display", "block");
			$(windowEclipse).css("display", "block");
			audio.attr("src", "audio/youWin.mp3");
		}
			
		backgroundArr.length = 0;
		helperArr.length = 0;
	}
				
		
	//Присвоєння фонів при старті гри
	function startGameBg(array){
		array[0].css("background-image", "url(img/ananas.png)");
		array[1].css("background-image", "url(img/ananas.png)");
		array[2].css("background-image", "url(img/watermelon.png)");
		array[3].css("background-image", "url(img/watermelon.png)");
		array[4].css("background-image", "url(img/kiwi.png)");
		array[5].css("background-image", "url(img/kiwi.png)");
		array[6].css("background-image", "url(img/apple.png)");
		array[7].css("background-image", "url(img/apple.png)");
		array[8].css("background-image", "url(img/banans.png)");
		array[9].css("background-image", "url(img/banans.png)");
		array[10].css("background-image", "url(img/grape.png)");
		array[11].css("background-image", "url(img/grape.png)");
		array[12].css("background-image", "url(img/pear.png)");
		array[13].css("background-image", "url(img/pear.png)");
		array[14].css("background-image", "url(img/strawberries.png)");
		array[15].css("background-image", "url(img/strawberries.png)");
	}



		
		

		