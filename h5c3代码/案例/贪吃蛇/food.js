// 食物对象
	(function(){
		var elements=[];
		function Food(x,y,width,height,color){
			this.x=x||0;
			this.y=y||0;
			this.width = width||20;
			this.height=height||20;
			this.color=color||"green";
		}
		//食物在地图上显示--
		Food.prototype.init=function(map){
			remove();
			var div=document.createElement("div");
			//div样式
			map.appendChild(div);
            div.style.width = this.width+"px";
            div.style.height=this.height+"px";
            div.style.backgroundColor=this.color;
            div.style.position="absolute";
            this.x=parseInt(Math.random()*(map.offsetWidth/this.width))*this.width;
            this.y=parseInt(Math.random()*(map.offsetHeight/this.width))*this.height;
            div.style.top=this.y+"px";
            div.style.left = this.x+"px";
			elements.push(div);

		}

		function remove(){
			for (var i = 0; i < elements.length; i++) {
				var ele=elements[i];
				ele.parentNode.removeChild(
					ele);
				elements.splice(i, 1);
			}
		}
		window.Food=Food;
	}());