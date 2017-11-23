window.onload = function(){
	var createNoteButton = $("#createNoteButton"),
		createNoteInput = $("#createNoteInput"),
		switches = $("#switches"),
		switchesSound = $("#switchesSound"),
		logo = $("#logo"),
		body = $("#body"),
		wrapper = $("#wrapper"),
		smallPosts = $(".postSmall"),
		bigPost = $("#bigPost"),
		backToAllPosts = $("#backToAllPosts"),
		bool = true,
		bool2 = true;


	smallPosts.click(function(){
			
			backToAllPosts.css("display", "block");
			smallPosts.css("display", "none");	
	 		bigPost.css("display", "block");
	 		
	 		var txt1 = $(this).text(),
	 			txt2 = $(this).children().text();
			
			 txt1 = txt1.replace(txt2, "");
	 		 bigPost.text(txt1);		
	 });


	backToAllPosts.click(function(){
		smallPosts.css("display", "block");	
		bigPost.css("display", "none");
		backToAllPosts.css("display", "none");
	});

	createNoteButton.click(function(){
		if(bool == true){
			createNoteButton.css("background", "url(img/newPostUp.png)");
			createNoteInput.css("height","200px");
			bool = false;
		} else {
			createNoteButton.css("background", "url(img/newPost.png)");
			createNoteInput.css("height", "0px");
			bool = true;
		}
	});
	
	
	switches.click(function(){
		if(bool2 == true){
			switches.css("background", "url(img/switchesOff.png)");
			body.css("background", "url(img/bodyBgNight.jpg)");
			wrapper.css("boxShadow", "0px 0px 5px #fff");
			logo.css("textShadow", "0px 0px 15px #fff");
			switchesSound.attr("src", "sound/switches.mp3");
			bool2 = false;
		}else{
			switches.css("background", "url(img/switchesOn.png)");
			body.css("background", "url(img/bodyBg.jpg)");
			logo.css("color", "#000");
			wrapper.css("boxShadow", "0px 0px 5px #000");
			switchesSound.attr("src", "sound/switches.mp3");
			bool2 = true;
		}
	});

}