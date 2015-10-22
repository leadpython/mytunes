// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', this.enqueue, this);
    this.on('dequeue', this.dequeue, this);
    this.on('ended', this.ended, this);
  },

  enqueue: function(modelSong) {
    this.add(modelSong);
    if (this.length === 1) {
      this.playFirst();
    }
  },

  playFirst: function(){
    this.at(0).play();
  },

  dequeue: function(){
    //remove model from queue
    this.remove(this.at(0));
  },

  ended: function(){
    //end the model
    this.dequeue();
    if(this.length > 0){
      this.playFirst();
    } 
  },

  

});
