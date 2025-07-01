import { Link } from "react-router-dom";

export const MediaBackdrop = ({ mediaData, media_type }) => {
  const backdropUrl = `https://image.tmdb.org/t/p/original/${mediaData.backdrop_path}`;
  const id = mediaData.id;
  const title = mediaData.title || mediaData.name || mediaData.original_title;
  const overview = mediaData.overview;
  const mediaType = mediaData.media_type || media_type;

  return (
    <div
      className=" h-[650px] rounded-md bg-top bg-cover relative"
      style={{ backgroundImage: `url(${backdropUrl})` }}
    >
      <div className=" absolute top-0 left-0 right-0 bottom-0 bg-black/60">
        <div className=" max-w-[500px] flex flex-col gap-5 absolute bottom-10 left-10">
          <h2 className=" text-white text-3xl font-bold">{title}</h2>
          <p className=" text-white">{overview}</p>
          <Link
            to={`/details/${mediaType}/${id}`}
            className=" w-fit cursor-pointer bg-[#a695ff] text-sm text-white font-semibold py-3 px-7 rounded-md hover:bg-[#947EE6] duration-150"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
