import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export default function GifGrid({ category }) {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__bounceIn">- {category} -</h3>
      {loading && (
        <p className="animate__animated animate__swing">Loading...</p>
      )}

      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} img={img} {...img} />
        ))}
      </div>
    </>
  );
}
