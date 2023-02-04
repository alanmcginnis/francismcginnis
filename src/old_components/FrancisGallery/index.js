import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";
import { images } from "./ImageSources";

const FrancisGallery = () => {
  const S3_BUCKET = "https://francisgallery.s3.us-west-2.amazonaws.com/";
  const smallItemStyles = {
    cursor: "pointer",
    objectFit: "cover",
    width: "150px",
    height: "150px",
  };
  return (
    <Gallery withDownloadButton>
      <div
        style={{
          display: "grid",
          // gridTemplateColumns: "repeat(3, 0fr)",
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          gridGap: 10,
        }}
      >
        {images.map((img, index) => (
          <Item
            cropped
            key={`galleryImg-${index}`}
            original={`${S3_BUCKET + img.original}`}
            thumbnail={`${S3_BUCKET + img.thumbnail}`}
            width={img.width}
            height={img.height}
          >
            {({ ref, open }) => (
              <img
                style={smallItemStyles}
                src={`${S3_BUCKET + img.thumbnail}`}
                ref={ref}
                onClick={open}
                alt=""
              />
            )}
          </Item>
        ))}
      </div>
    </Gallery>
  );
};

export default FrancisGallery;
