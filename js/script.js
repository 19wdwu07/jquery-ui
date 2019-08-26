console.log('my script is working');
$('#bulbOn').hide();
$('#switchOff').hide();

$(document).ready(function(){

  $('body').click(function(){
    $(this).addClass('myClass');
    $('h1').css('opacity','0.5').css('font-size','40px');



    // bulb on and Off

     $('#switchOn').click(function(){
       $('#bulbOn').show();
       $('#bulbOff').hide();
       $('#switchOff').show();
       $('#switchOn').hide();

     });

     $('#switchOff').click(function(){
       $('#bulbOff').show();
       $('#bulbOn').hide();
       $('#switchOn').show();
       $('#switchOff').hide();
     });

// camera cameraOffSwitch
   $('#cameraOffSwitch').click(function(){
    $('#circle').show();
   });

  });

  // draggable and droppable
  $('#heading').draggable();
  $('#subHeading').droppable();
  });

//resizable
$( function() {
    $( "#resizable" ).resizable();
  });

// selectable
  $( function() {
      $( "#selectable" ).selectable();
  });



    $( function() {
      $( "#selectable" ).selectable();
    } );




    $( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  } );
