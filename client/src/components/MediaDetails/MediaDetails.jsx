export const MediaDetails = ({ data }) => {
  const posterUrl = `https://image.tmdb.org/t/p/original/${data?.poster_path}`;
  const mediatitle = data?.title || data?.name || data?.original_title;
  const overview = data?.overview;

  return (
    <div className=" flex flex-col items-center gap-3 max-w-[400px] mx-auto min-[800px]:max-w-none min-[800px]:flex-row min-[800px]:justify-between min-[800px]:items-start min-[800px]:gap-10">
      <div className=" w-full max-w-[350px]">
        <img src={posterUrl} alt={mediatitle} className=" w-full" />
      </div>

      <div className=" text-center space-y-3 min-[800px]:text-start">
        <h2 className=" text-xl font-bold lg:text-2xl">{mediatitle}</h2>
        <p className=" lg:text-lg">{overview}</p>
      </div>
    </div>
  );
};
