$(document).ready(function(){
  $('#zombie-to-english-btn').click(function(event){
    unzombify();
    return false;
  });

  $('#english-to-zombie-btn').click(function(event){
    zombify();
    return false;
  });

  function zombify(){

    $('#zombie').val( zombifyIt($('#english').val()));


  }

  function unzombify(){


  }

  $('#english').on("keyup", zombify);

});
