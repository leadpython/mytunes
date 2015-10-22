// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  template: _.template('<div></div>'),


  initialize: function() {
    this.collection.on('enqueue', this.render, this);
    this.collection.on('dequeue', this.render, this);
    this.collection.on('add', this.render, this);
  },

  render: function() {
    this.$el.empty();
    this.collection.forEach(function(songModel) {
      var songView = new SongQueueEntryView({model: songModel});
      this.$el.append(songView.render());
    }, this);
  }

});
