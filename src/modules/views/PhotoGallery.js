import Fancybox from "../components/Fancybox";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Masonry from "@mui/lab/Masonry";
import Typography from "../components/Typography";

const settings = {
  baseURL: "https://res.cloudinary.com/dszumgqlp/image/upload/v1675458557/",
  thumbnailURL:
    "https://res.cloudinary.com/dszumgqlp/image/upload/t_thumbnails/v1675458557/",
  group: "a/",
};

function PhotoGallery() {
  return (
    <Box
      className="photo-gallery"
      component="section"
      sx={{ display: "flex", overflow: "hidden" }}
    >
      <Container
        sx={{
          mt: 8,
          mb: 8,
          display: "flex",
          flexWrap: "wrap",
          position: "relative",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h5"
          component="p"
          sx={{
            mb: 1,
            flex: "0 0 100%",
            textAlign: "center",
            fontWeight: "normal",
          }}
        >
          Some cute pictures of me.
        </Typography>
        <Typography
          variant="h5"
          component="p"
          sx={{
            mb: 4,
            flex: "0 0 100%",
            textAlign: "center",
            fontWeight: "normal",
          }}
        >
          Click to Enlarge.
        </Typography>
        <Box
          sx={{
            width: "80%",
            maxWidth: 700,
            minHeight: 829,
          }}
        >
          <Masonry columns={{ xs: 2, sm: 3, md: 4 }} spacing={2}>
            <Fancybox options={{ infinite: false }}>
              {[...Array(40)].map((e, i) => {
                let thumbnailImg = `${settings.thumbnailURL}group-${settings.group}Francis-${i}.jpg`;
                let img = `${settings.baseURL}group-${settings.group}Francis-${i}.jpg`;

                if (i === 0) {
                  return null;
                }

                if (i < 10) {
                  thumbnailImg = `${settings.thumbnailURL}group-${settings.group}/Francis-0${i}.jpg`;
                  img = `${settings.baseURL}group-${settings.group}/Francis-0${i}.jpg`;
                }

                return (
                  <a key={i} data-fancybox="gallery" href={`${img}`}>
                    <img
                      src={`${thumbnailImg}`}
                      srcSet={`${thumbnailImg}`}
                      alt="Sweet Baby Francis"
                      loading="lazy"
                      style={{
                        borderBottomLeftRadius: 4,
                        borderBottomRightRadius: 4,
                        display: "block",
                        width: "100%",
                      }}
                    />
                  </a>
                );
              })}
            </Fancybox>
          </Masonry>
        </Box>
      </Container>
    </Box>
  );
}

export default PhotoGallery;
