 // 封装游戏对象
 (function(){
   var that=null;
   function Game(map){
      this.food=new Food();
      this.snake=new Snake();
      this.map=map;
      that=this;
   }
      //初始化游戏
      Game.prototype.init = function(){

         this.food.init(this.map);
         this.snake.init(this.map);
         this.runSnake(this.food,this.map);
         this.bindKey();
      };
//小蛇自动的跑起来
Game.prototype.runSnake=function(food,map){
   var timeId=setInterval(function(){
      this.snake.move(food,map);
      this.snake.init(map);
      var maxX=map.offsetWidth/this.snake.width;
      var maxY=map.offsetHeight/this.snake.height;
      var headX=this.snake.body[0].x;
      var headY=this.snake.body[0].y;
      if(headX<0||headX>=maxX){
         clearInterval(timeId);
         alert("游戏结束");
      }
      if(headY<0||headY>=maxY){
         clearInterval(timeId);
         alert("游戏结束");
      }
   }.bind(that), 150);
};

//键盘改变小蛇移动方向
Game.prototype.bindKey=function(){
   document.addEventListener("keydown",function(e){
      switch (e.keyCode) {
         case 37:this.snake.direction = "left";break;
         case 38:this.snake.direction = "top";break;
         case 39:this.snake.direction = "right";break;
         case 40:this.snake.direction = "bottom";break;

      }
   }.bind(that) ,false)
};
window.Game=Game;
}());