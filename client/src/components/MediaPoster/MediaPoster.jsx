import { Link } from "react-router-dom";
import { IoIosInformationCircleOutline as InfoIcon } from "react-icons/io";

export const MediaPoster = ({ data, media_type }) => {
  const posterUrl = `https://image.tmdb.org/t/p/original/${data.poster_path}`;
  const id = data.id;
  const title = data.title || data.name || data.original_title;
  const mediaType = data.media_type || media_type;

  return (
    <div className=" relative">
      <img src={posterUrl} alt={title} />

      <div className=" absolute top-0 right-0 left-0 bottom-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 duration-150">
        <Link to={`/${mediaType}/details/${id}`}>
          <InfoIcon
            color="white"
            size={50}
            className=" hover:scale-125 duration-150"
          />
        </Link>
      </div>
    </div>
  );
};
