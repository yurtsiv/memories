window.onload = function(){
		
		$(".mainPageButton").css("color", "#fff");//невеличкий костиль
		
		//ф-я, яка обробляє нажимання на кнопки меню
		function pressOnButtonInHead(activatedElem, elem1, elem2, elem3, appearsElem){
			$(".buttonInHeader").css("color", "#a4a6a7");
			$(elem1).animate({"opacity": "0"}, 100, function(){
				$(elem1).css("display", "none");
			});

			$(elem2).animate({"opacity": "0"}, 100, function(){
				$(elem2).css("display", "none");
			});

			$(elem3).animate({"opacity":"0"}, 100, function(){
				$(elem3).css("display", "none");
				$(appearsElem).css("display", "block");
				$(appearsElem).animate({"opacity": "1"}, 100);
				$(activatedElem).css("color", "#fff");
			});
		}
		
		//обробка нажимання на "контакти"
		$(".contactsButton").click(function(){
			pressOnButtonInHead(".contactsButton", "#mainPage", "#pricesPage", "#thanksForOrder", "#contactsPage");
		});
	
		//обробка нажимання на "ціни"
		$(".pricesButton").click(function(){
			pressOnButtonInHead(".pricesButton", "#mainPage", "#contactsPage", "#thanksForOrder", "#pricesPage");
		});
		
		//обробка нажимання на "головна"
		$(".mainPageButton").click(function(){
			pressOnButtonInHead(".mainPageButton", "#contactsPage", "#pricesPage", "#thanksForOrder", "#mainPage");
		});
		

		$("#eMail, #name").keyup(function(){
			var formGood = true;
			var name = $("#name").val();
			var x = name.length;
			if(x == 0 || x < 2){
				$("#name").css("border", "1px solid red");
				formGood = false;
			}else{
				$("#name").css("border", "");
			}

			var eMail = $("#eMail").val();
			var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
			var x = pattern.test(eMail);
			if(x == false){
				$("#eMail").css("border", "1px solid red");
				formGood = false;
			}else{
				$("#eMail").css("border", "");
			}

			//якщо форма заповнена правильно, то блокування зникає
			if(formGood){
				$("#blockButtonOrder").css("display", "none");
				$("#buttonOrder").css("display", "block");
			}else{
				$("#blockButtonOrder").css("display", "block");
				$("#buttonOrder").css("display", "none");
			}
		});
		$("#buttonOrder").click(function(){
			$("#mainPage").animate({"opacity":"0"}, 100, function(){
				$("#mainPage").css("display", "none");
				$("#thanksForOrder").css("display", "block");
				$("#thanksForOrder").animate({"opacity": "1"}, 100);
			});
		});
}
			 
