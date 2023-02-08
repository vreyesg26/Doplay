import { useNavigate } from "react-router-dom";

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();
  return(
    <div className="flex flex-col md:w-[210px] w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer" onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}>
      <img src={track?.images?.coverart} alt="artist" className="w-full rounded-lg" />
      <p className="mt-4 font-semibold md:text-sm text-base text-white">{track?.subtitle}</p>
    </div>
  )
};

export default ArtistCard;