window.onload = function(){
	var arrBg = ["url(img/bg1.jpg)", "url(img/bg2.jpg)","url(img/bg3.jpg)", "url(img/bg4.jpg)","url(img/bg5.jpg)"],
		counterBg = 0,
		OnOfPriceList = true,
		OnOfContacts = true,
		OnOfLanguages = true,
		pointBg = $(".point"),
		counterBg = Math.floor(Math.random()*arrBg.length);
		$("#wrapperForChangeBg").css('background-image', arrBg[counterBg]);
		$(pointBg[counterBg]).css('background-color', "rgba(225, 225, 225, 1)");
	
		
		//Відкриття меню мов
		$("#languageButton").click(function(){		
			if(OnOfLanguages){
				$("#languageMenu").css("display", "block");
				OnOfLanguages = false;
			}else{
				$("#languageMenu").css("display", "none");
				OnOfLanguages = true;
			}
		});
		
		//Для переходу по сиилка при зміні мови 
		$(".lan").click(function(){
			if($(this).text() == "UKR"){
				document.location.href = "indexUA.html";
			}
			if($(this).text() == "EN"){
				document.location.href = "indexEN.html";
			}
			if($(this).text() == "RUS"){
				document.location.href = "indexRU.html";
			}
		});
		
		
		$("#contactsButtonPC").click(function(){
			$("#prices").animate({"opacity": "0"}, 100, function(){
				$("#prices").css("z-index", "0");
			});
			$("#mainPage").animate({"opacity": "0"}, 100, function(){
				$("#contactsButtonPC").css("display", "none");
				$("#contacts").css("display", "block");
				$("#contacts").animate({"opacity":"1"}, 100);//для плавного появлення блоку контактів
				$("#pricesButtonPC").css("display", "none");
				$("#pricesButtonInContactsPC").css("display", "block");
				$("#mainPageButtonPC").css("display", "block");
				$("#mainPageButtonPC").animate({"opacity": "1"})
				$("#contacts").css("z-index", "111");
			});	
		});
	
		$(".pricesButtonPC").click(function(){
			$("#contacts").animate({"opacity": "0"}, 100, function(){
				$("#contacts").css("z-index", "0");
			});
			$("#mainPage").animate({"opacity": "0"}, 100, function(){
				$("#prices").css("display", "block");
				$("#prices").animate({"opacity":"1"}, 100);
				$("#pricesButtonPC").css("display", "none");
				$("#mainPageButtonPC").css("display", "block");
				$("#mainPageButtonPC").animate({"opacity": "1"})
				$("#prices").css("z-index", "110");
				$("#pricesButtonInContactsPC").css("display", "none");
				$("#contactsButtonPC").css("display", "block");
			});	
		});
		
		$("#mainPageButtonPC").click(function(){
			$("#contacts").animate({"opacity": "0"}, 100, function(){
				$("#contacts").css("z-index", "0");
			});
			$("#prices").animate({"opacity": "0"}, 100, function(){
				$("#mainPage").animate({"opacity": "1"}, 100);
				$("#mainPageButtonPC").css("display", "none");
				$("#pricesButtonPC").css("display", "block");
				$("#prices").css("z-index", "0");
				$("#pricesButtonInContactsPC").css("display", "none");
				$("#contactsButtonPC").css("display", "block");
			})
		});
		
		//Перевірка форми на правильність введення даних
		$("#orderButton").click(function(){
			var formGood = true;
			var name = $("#name").val();
			var x = name.length;
			if(x == 0){
				$("#name").css("border", "1px solid red");
				formGood = false;
			}

			var eMail = $("#eMail").val();
			
			
			var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
			var x = pattern.test(eMail);
			if(x == false){
				$("#eMail").css("border", "1px solid red");
				formGood = false;
			}

			var phoneNumber = $("#phoneNumber").val();
			var x = phoneNumber.length;
			var pattern = new RegExp(/^\d+$/);
			var check = pattern.test(phoneNumber);
			console.log(check);
			if(x < 9 || x > 15 || check == false){
				$("#phoneNumber").css("border", "1px solid red");
				formGood = false;
			}
		});
		
		$("input").click(function(){
			$(this).css("border", "1px solid #49d109");
		});
		
		//для навігації по фонах
		pointBg.click(function(){
			for(var i=0; i < pointBg.length; i++){
				$(pointBg[i]).css('background-color', "rgba(225, 225, 225, 0.5)")
			}
			$(this).css('background-color', "rgba(225, 225, 225, 1)");
			var x = $(this).index();
			$("#wrapperForChangeBg").animate({'opacity':'0'},500,function(){ 
	 			$(this).css('background-image', arrBg[x]); 
				$(this).animate({'opacity':'1'},1000); 
			});
			counterBg = x;
		});
		
		//змінна фонів
		function changeBg(){
			counterBg++;
			$("#wrapperForChangeBg").animate({'opacity':'0'},500,function(){ 
	 			$(this).css('background-image', arrBg[counterBg]); 
				$(this).animate({'opacity':'1'},1000); 
			});
			
			if(counterBg == arrBg.length){
				counterBg = 0;
			}
			for(var i=0; i < pointBg.length; i++){
				$(pointBg[i]).css('background-color', "rgba(225, 225, 225, 0.5)")
			}
			$(pointBg[counterBg]).css('background-color', "rgba(225, 225, 225, 1)");
		}

		setInterval(changeBg, 20000);
}
			 
