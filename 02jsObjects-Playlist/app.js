

var playlist1 = new Playlist();


//----------------------------------------------------------------------------------------------
var song1=new Song("With Or Without You" , "U2" , "08:56");
var song2=new Song("Let It Rock" , "Chris Rock" , "03:51");
var song3=new Song("My Heart Goes On" , "Celine Dion" , "05:41");
//----------------------------------------------------------------------------------------------

playlist1.add(song1);
playlist1.add(song2);
playlist1.add(song3);

//----------------------------------------------------------------------------------------------

//html var where the string is to be added;
var playlistElement = document.getElementById("playlist");
playlist1.renderTo(playlistElement);

var playB = document.getElementById("playB");
playB.addEventListener("click" , function(){
    playlist1.play();
    playlist1.renderTo(playlistElement);
})

var stopB = document.getElementById("stopB");
stopB.addEventListener("click" , function(){
    playlist1.stop();
    playlist1.renderTo(playlistElement);
})

var nextB = document.getElementById("nextB");
nextB.addEventListener("click" , function(){
    playlist1.next();
    playlist1.renderTo(playlistElement);
})