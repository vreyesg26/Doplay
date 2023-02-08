import Songbar from "./SongBar";

const RelatedSongs = ({
  data,
  artistId,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold md:text-2xl text-3xl md:mt-5 text-white">
        Related Songs
      </h1>
      <div className="mt-6 w-full flex flex-col">
        {data?.map((song, i) => (
          <Songbar
            key={`${artistId}-${song.key}-${i}`}
            song={song}
            i={i}
            artistId={artistId}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedSongs;
