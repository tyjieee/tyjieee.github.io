var score=0;
function tips(){
  alert("重要提示！");
  alert("1.用汉语写吧！");
  alert("2.如果你实在感到困惑，可以点击左上角的宝可梦标志按钮前往精灵图鉴网站看看噢！");
}

function check() {
          var x = document.getElementById("image1").getAttribute("src");
          var y = document.getElementById("image2").getAttribute("src");
          var z = document.getElementById("image3").getAttribute("src");
              document.getElementById("image1").src="鬼斯.jpg";
              document.getElementById("image2").src="大钳蟹.jpg";
              document.getElementById("image3").src="穿山鼠.jpg";
    }
function answer(){
  var response=prompt("write down your answer");
  if(response=="鬼斯"){
    alert("omg你是第一个猜到的!");
    score+=33;
  }
  else {
    alert("再看看~");
  }
}
function answer1(){
  var response=prompt("write down your answer");
  if(response=="大钳蟹"){
    alert("你厉害到超出碳基生物的范围了!");
    score+=33;
  }
  else {
    alert("不对哟~");
  }
}
function answer2(){
  var response=prompt("write down your answer");
  if(response=="穿山鼠"){
    alert("你怎么知道？!");
    score+=33;
  }
  else {
    alert("没猜中~");
  }
}
function sayhello(){
  if(score==99){
    alert("你的宝可梦分数是 "+score+" ,你简直厉害得不像话!!!");
  }
  if(score>33&score<=99){
    alert("你的宝可梦分数是 "+score+" ,你已经击败了这世界上90%的人类!");
  }
  if(score==0){
    alert("你的宝可梦分数是"+score+" ,恭喜你！你是正常人啦！");
  }
}
