$(".dropdown").click(function(){
	$(this).toggleClass("show-dropdown");
	// console.log($(this).parent(".col-4"));
	$(this).parent(".col-4").siblings().children(".dropdown").removeClass("show-dropdown");
})