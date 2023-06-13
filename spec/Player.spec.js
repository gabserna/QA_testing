describe("Player", () => {
  let player;
  let song;

  beforeEach(() => {
    player = new Player();
    song = new Song();
  });
  beforeEach(() => {
    jasmine.addMatchers({
      toBePlaying: () => {
        return {
          compare: (actual, expected) => {
            const player = actual;
            return {
              pass:
                player.currentlyPlayingSong === expected && player.isPlaying,
            };
          },
        };
      },
    });
  });

  describe("play", () => {
    it("should play", () => {
      player.play(song);
      expect(player).toBePlaying(song);
    });
  });
  describe("makeFavorite", () => {
    it("should persist", () => {
      spyOn(song, "persistFavoriteStatus");

      player.play(song);
      player.makeFavorite();
      expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
    });
  });
});
