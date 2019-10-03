function Song(title,artist,duration){

    Media.call(this,title,duration)
    this.artist=artist;
    //this.isPlaying=false;
}

Song.prototype = Object.create(Media.prototype);
/*
Song.prototype.play=function(){
    this.isPlaying=true;
}

Song.prototype.stop=function(){
    this.isPlaying=false;
}
*/
Song.prototype.toHTML=function(){

    var htmlString = "<li";
    if(this.isPlaying)
    htmlString+=" class='current'";
    htmlString+=">";
    htmlString+=this.title+" - ";
    htmlString+=this.artist+" - ";
    htmlString+=this.duration+" </li>";
    
    return htmlString
}