

$(".openNav").click(function(){
    $("#Menu").animate({ width:'250px'},100)
   $("#content").animate({marginLeft :'250px'},100)
})

$(".closebtn").click(function(){
    $("#Menu").animate({ width:'0px'},50)
   $("#content").animate({marginLeft :'0px'},100)
})




$("#Menu a").click(function(){
    
    let id= $(this).attr("href");
 
    
    let Sectionplace = $(id).offset().top;
    
    $("html , body").animate({scrollTop:Sectionplace},1000);
    
})






$('#slider .heads').click(function(){
    $('.contentss').not($(this).next()).slideUp(1000);
    $(this).next().slideheads(1000);
});



 window.onload = function() {
   
    countDown("28 nov 2023 12:00:00");
  }



  function countDown(countTo) {
                                                                                        
        let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);
    let now = new Date();
    now = (now.getTime()/1000);

    time = (futureDate- now);   
        
   let days = Math.floor( time / (24*60*60));
   let hours = Math.floor((time - (days * (24*60*60))) / 3600);
   let minutes = Math.floor((time - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let sec = Math.floor((time - (days * (24*60*60)) - (hours * 3600) - (minutes * 60)))


    $("#days").html(`${days} D`);
    $("#hours").html(`${hours} h`);
    $("#minutes").html(`${ minutes } m`);
    $('#seconds').html(`${ sec} s`)

  
    setInterval(function() {countDown(countTo); }, 1000);
  
  }

 


var maxLength = 100;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  var Left = maxLength-length;
  if(Left<=0)
            {
                 $("#char").text("your available character finished");
                
            }
        else{
        
        $("#char").text(Left);
        }
});
