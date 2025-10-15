import { useParams } from "react-router-dom";

export const AlbumPhotosPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Фотографии альбома</h2>
      <p>Album ID: {id}</p>
    </div>
  );
};
