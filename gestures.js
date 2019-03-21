var downX= 0;
var downY= 0;

var timeOfClick = 0, firstClick = true;

$( document ).ready(function() {

  $("#gestureArea").click(function(event){

  })

  $("#gestureArea").mousedown(function(event){
    downX= event.pageX;
    downY= event.pageY;
  })

  $("#gestureArea").mouseup(function(event){
    if (event.pageX < downX)
      $("#gestureResult").text( "swipe left" )
    else if (event.pageX > downX)
      $("#gestureResult").text( "swipe right" )
      else
      {
        if( firstClick )
        {
          timeOfClick = (new Date()).getTime();
          $("#gestureResult").text( "mouse up" )
        }
        else
        {
          if( (new Date()).getTime() - timeOfClick < 500 )
            $("#gestureResult").text( "double click" )
          else $("#gestureResult").text( "mouse up" )
        }
        firstClick = !firstClick;
        setTimeout( function(){ firstClick = true; }, 500 )
      }
  })

})
