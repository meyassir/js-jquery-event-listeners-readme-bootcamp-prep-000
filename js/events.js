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
function submitIt()
{
  $("form").on("submit", function() {
    alert('Your form is going to be submitted now.');
    return;
});
}
function pressIt()
{
  $(document).on("keydown", function(ev) {
    ev.preventDefault();
    if(ev.which == 71) alert("G was pressed");
    return;
  })
}


$(document).ready(function(){
  getIt();
  frameIt();
  submitIt();
});
