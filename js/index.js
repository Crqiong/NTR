		$(".index_nav>li>a").click(function(e){
//			e.preventDefault();
			
			$(this).css({"background-color":"black"},{"color":"white"}).parent().siblings().children("a").css({"background-color":"rgb(36,36,36)"},{"color":"rgba(250,250,250,0.7)"})
			$(this).siblings().show().parent().siblings().children("span").hide();
//			return false;
		})
		$(".hbu>li>a").click(function(e){
//			e.preventDefault();
			$(this).css({"background-color":"#9B0909"}).parent().siblings().children("a").css({"background-color":"#C20C0C"})
		})
		var i = 0;
		var R=["img/lunbo01.jpg","img/lunbo02.jpg","img/lunbo03.jpg","img/lunbo04.jpg"];
		var R1=["img/lunbo011.jpg","img/lunbo022.jpg","img/lunbo033.jpg","img/lunbo044.jpg"];
		var Timer=setInterval(function(){
				increase();
				move();
			},7000)
		$(".s-left").click(function(){
			increase();
			move();
		})
		$(".s-right").click(function(){
			i--;
			if(i==-1){
				i=R.length-1;
			}
			move();
		})
		
		function increase(){
			i++;
			if(i==R.length){
				i=0;
			}
		}
		function move(){
			$(".Rotation").css("background-image","url("+R[i]+")");
			$(".lun").css("background-image","url("+R1[i]+")");
			$(".ch-ul>li").eq(i).css("background-color","red").siblings().css("background-color","white");
		}
		$(".Rotation").mouseover(function(){
			clearInterval(Timer);
		})
		$(".Rotation").mouseleave(function(){
			Timer=setInterval(function(){
				increase();
				move();
			},7000)
		})
		