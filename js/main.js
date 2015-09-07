requirejs.config({
    "baseUrl": "js",
    "paths": {
        "jquery": "vendors/jquery.min",
        "bootstrap": "vendors/bootstrap.min"
    },
    "shim": {
        "bootstrap": ["jquery"]
    }
});


require(['PlaylistView', 'bootstrap'], function(PlaylistView){
  $(function(){

    var playlist = new PlaylistView();

  });
});
