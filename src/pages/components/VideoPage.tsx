import { Box } from "@mui/material";

interface VideoPageProps {
  slideActive: boolean;
}

const VideoPage: React.FC<VideoPageProps> = ({
  slideActive,
}: VideoPageProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: {
          xs: "100%",
          sm: "70%",
          md: "60%",
        },
        borderRadius: "20px",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
        margin: "0px",
        padding: "0px",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      <video
        autoPlay
        loop
        muted
        className={slideActive ? "csView" : ""}
        style={{
          width: "100vw",
          height: "100%",
          objectFit: "cover",
          zIndex: 2,
        }}
      >
        <source src="entrada.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};

export default VideoPage;
