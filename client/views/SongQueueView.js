// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('enqueue', this.render, this);
    this.collection.on('dequeue', this.render, this);
    this.collection.on('add', this.render, this);
  },

  render: function() {
    this.$el.empty();
    this.$el.addClass('songQueue');
    this.$el.append('<span>SONG QUEUE</span>');
    this.collection.forEach(function(songModel) {
      var songView = new SongQueueEntryView({model: songModel});
      this.$el.append(songView.render());
    }, this);
  },

  deleteDiv: function() {
    this.$el.find('div').first('div').remove();
  }

});
