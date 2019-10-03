function Playlist(){

    this.songs=[];
    this.index=0;
}

Playlist.prototype.add=function(song){
    this.songs.push(song);
}

Playlist.prototype.play=function(){
    var currentSong = this.songs[this.index];
    currentSong.play();
}

Playlist.prototype.stop=function(){
    var currentSong = this.songs[this.index];
    currentSong.stop();
}

Playlist.prototype.next=function(){
    var currentSong = this.songs[this.index];
    currentSong.stop();
    
    this.index++;
    if(this.index===this.songs.length)
    this.index=0;

    currentSong = this.songs[this.index];
    currentSong.play();
}

//list is the element where playlist will be added and displayed;
Playlist.prototype.renderTo=function(list){
    let str="";
    list.innerHTML="";
    for(let i=0;i<this.songs.length;i++)
    {
        str+=this.songs[i].toHTML();
    }
    list.innerHTML=str;
}