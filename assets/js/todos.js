//check of specific todos by clicking
$("ul").on("click","li",function(){//when li chicked inside the ul tag, then this will work.
	$(this).toggleClass("complete");
});
//click on X to delete todo
$("ul").on("click","span",function(e){//when span clicked inside the ul tag, then this will work.
	$(this).parent().fadeOut(500,function(){/*here "this" keyword indicates "li" tag,
												because we used "parent" method.
												Also after .5 sec the anynomus function will execute.*/ 
		$(this).remove();
	});
	e.stopPropagation();//It stop his all parents movements and "e" indicate the selected "li"."e" could be any thing.
});
//add new todos
$("input[type='text']").keypress(function(e){
	if(e.which === 13)//ENTER key has a value that is 13.Every Key has a own unique value in JS.
	{
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");//after taking the input value,We fill the INPUT field Empty strings.
		//create a new li and to the ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});
//toggling of add new todo input bar
$(".fa-pencil").click(function(){
	$("input[type='text']").fadeToggle(200);//200 indicate .2 sec delay.
});








