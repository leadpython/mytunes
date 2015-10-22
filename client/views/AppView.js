// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params) {
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    var poop = this;

    this.playerView.$el.on('ended', function() {
      poop.model.get('songQueue').ended();
      poop.songQueueView.deleteDiv();
    });

    this.model.on('change:currentSong', function(model) {
      this.libraryView.render();
      this.playerView.setSong(model.get('currentSong'));
    }, this);
  },

  render: function() {
    this.$el.html([
      this.libraryView.$el,
      this.songQueueView.$el,
      this.playerView.$el
    ]);
    this.$el.prepend('<div class="title">SPOTIFYSH <img src="spotifysh.png"></img></div>');
    this.$el.addClass('appView');
    return this.$el;
  }

});
