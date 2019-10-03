function Movie(title,year,duration){

    Media.call(this,title,duration)
    this.year=year;
    //this.isPlaying=false;
}

Movie.prototype = Object.create(Media.prototype);
/*
Movie.prototype.play=function(){
    this.isPlaying=true;
}

Movie.prototype.stop=function(){
    this.isPlaying=false;
}
*/
Movie.prototype.toHTML=function(){

    var htmlString = "<li";
    if(this.isPlaying)
    htmlString+=" class='current'";
    htmlString+=">";
    htmlString+=this.title+" - ";
    htmlString+=this.year+" - ";
    htmlString+=this.duration+" </li>";
    
    return htmlString
}