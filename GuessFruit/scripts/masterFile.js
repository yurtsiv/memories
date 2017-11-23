var counterFinalGame = 0,
	counterCheckBackg = 0,
	countBlockClick = 0,
	boolArr = [],
	i1 = 0,
	i2 = 0;

window.onload = function(){
	var div1_1 = $("#1_1"),
	    div1_2 = $("#1_2"),
		div2_1 = $("#2_1"),
		div2_2 = $("#2_2"),
		div3_1 = $("#3_1"),
		div3_2 = $("#3_2"),
		div4_1 = $("#4_1"),
		div4_2 = $("#4_2"),
		div5_1 = $("#5_1"),
		div5_2 = $("#5_2"),
		div6_1 = $("#6_1"),
		div6_2 = $("#6_2"),
		div7_1 = $("#7_1"),
		div7_2 = $("#7_2"),
		div8_1 = $("#8_1"),
		div8_2 = $("#8_2"),

		div2_1_1 = $("#2_1_1"),
	    div2_1_2 = $("#2_1_2"),
		div2_2_1 = $("#2_2_1"),
		div2_2_2 = $("#2_2_2"),
		div2_3_1 = $("#2_3_1"),
		div2_3_2 = $("#2_3_2"),
		div2_4_1 = $("#2_4_1"),
		div2_4_2 = $("#2_4_2"),
		div2_5_1 = $("#2_5_1"),
		div2_5_2 = $("#2_5_2"),
		div2_6_1 = $("#2_6_1"),
		div2_6_2 = $("#2_6_2"),
		div2_7_1 = $("#2_7_1"),
		div2_7_2 = $("#2_7_2"),
		div2_8_1 = $("#2_8_1"),
		div2_8_2 = $("#2_8_2"),

		start = $("#start"),
		otherSound =$("#otherSound"),
		bgSound = $("#player"),
		timer = $("#timer"),
		reloadButtons = $(".reloadButton, .reloadInDialogWindow"),
		dialogWindowlose = $("#dialogWindowLose"),
		dialogWindowWin = $("#dialogWindowWin"),
		windowEclipse = $("#windowEclipse"),
		settingsWindow = $("#settingsWindow"),
		buttonSaveSettings = $("#buttonSaveSettings"),
		settingsIcon = $("#settingsIcon"),
		
		arrDivs =  [div1_1, div1_2, div2_1, div2_2, div3_1, div3_2, div4_1, div4_2, div5_1, div5_2, div6_1, div6_2, div7_1, div7_2, div8_1, div8_2],
		arrDivs2 =  [div1_1, div1_2, div2_1, div2_2, div3_1, div3_2, div4_1, div4_2, div5_1, div5_2, div6_1, div6_2, div7_1, div7_2, div8_1, div8_2],
		bgarrDivs = [],
		helperArr = [],
		
		blockStart = true,
		boolTmr = true;
				
			for(var i = 0; i < 15; i++){
				boolArr[i] = false;
			}
			
			bgSound.attr("src", "audio/bgSound.mp3"); //фонова музика
			
			buttonSaveSettings.click(function(){
				windowEclipse.css("display", "none");
				settingsWindow.css("opacity", "0");
			});
			settingsIcon.click(function(){
				windowEclipse.css("display", "block");
				settingsWindow.css("opacity", "1");
			});
			
			start.click(function(){
				otherSound.attr("src", "audio/buttonClick.mp3");
				
				//перезагрузка сторінки при кліку на reload
				reloadButtons.click(function(){
					location.reload();
				});
				
				var selectTimerToStart = $("#selectTimerToStart"),
					selectTimerAfterStart = $("#selectTimerAfterStart");
					
				tmrToStartGame = selectTimerToStart.val(), //к-сть секунд початкового показу фонів
				tmrToStartGame2 = selectTimerToStart.val(),
				tmrAfterStartGame = selectTimerAfterStart.val(), //к-сть секунд на проходження
				clearIntervalTmr = (tmrToStartGame + tmrAfterStartGame) * 200; //час показу фонів + час на гру, щоб очистити таймер	
			
				if(blockStart == true){
					blockStart = false;
					arrDivs = shufle(arrDivs); //Перемішуємо масив arrDivs
					startGameBg(arrDivs); //Присвоюємо фони елементам
					
					function tmrGame(){
						if(counterFinalGame == 8){
							return false;
						}

						if(boolTmr === true){
							if(tmrToStartGame < 10){
								$(timer).text("00:0" + tmrToStartGame);
							}else{
								$(timer).text("00:" + tmrToStartGame);
							}
							
							if(tmrToStartGame == 0){
								boolTmr = false;
								for(var i=0; i < arrDivs.length; i++){
									arrDivs[i].css("background",  "url(img/unkownImg.png)");
								}
							}
							tmrToStartGame--;
						}

						if(boolTmr === false){
							if(tmrAfterStartGame < 10){
								$(timer).text("00:0" + tmrAfterStartGame);
							}else{
								$(timer).text("00:" + tmrAfterStartGame);
							}		
							
							if(tmrAfterStartGame == 0){
								windowEclipse.css("display", "block");
								otherSound.attr("src", "audio/youLose.mp3");
								dialogWindowlose.css("display", "block");
							}
							tmrAfterStartGame--;
						}
					}
					
					var timerGame = setInterval(tmrGame, 1000)	//таймер початкового показу фонів і таймер самої гри
					function clearIntTmrGame(){
						clearInterval(timerGame);
					}
					setTimeout(clearIntTmrGame, clearIntervalTmr);//очищуємо таймер
						
					
					//окремий, незалежний таймер для запуску функціїїї обробки нажимань
					function tmrClick(){
						tmrToStartGame2--;
						if(tmrToStartGame2 === 0){
							clickOnDivs(arrDivs, helperArr, bgarrDivs, otherSound, dialogWindowWin);//обробка нажимань
						}
					}
					var startClicking = setInterval(tmrClick, 1000);
					function clearStartClicking(){
						clearInterval(startClicking);
					}
					setTimeout(clearStartClicking, tmrToStartGame * 1200);

				}
			});
}
