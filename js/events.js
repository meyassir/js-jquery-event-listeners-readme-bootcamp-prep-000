//define functions here

function getIt()
{
  $("p").on("click", function(e) {
    alert("hi");
  })
}

function frameIt()
{
  window.$("img").on("load", function(){
    $("img")[0].className = "tasty";
  })
}

$(document).ready(function(){
  getIt();
  frameIt();
});
