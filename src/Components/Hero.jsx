import { Margin } from "@mui/icons-material";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

const HeroContainer = styled(Box)(({ theme, backgroundImage }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw", // Ancho completo de la ventana
  height: "100vh", // Alto completo de la ventana
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  textAlign: "center",
  padding: theme.spacing(2),
  color: "#fff",

  [theme.breakpoints.up("md")]: {
    height: "80vh",
    padding: theme.spacing(4),
  },

  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "90vh",
  },
}));

// Contenedor de texto con fondo difuminado
const TextContainer = styled(Box)(({ theme }) => ({
  marginLeft: "480px",
  backdropFilter: "blur(2px)", // Aplica el desenfoque
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo negro semitransparente
  borderRadius: "8px", // Bordes redondeados para un efecto elegante
  padding: theme.spacing(2),
  maxWidth: "80vw", // Ajusta el tamaño del contenedor
  [theme.breakpoints.up("md")]: {
    maxWidth: "50vw",
    padding: theme.spacing(4),
  },
}));

const HeroButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1, 4),
  fontSize: "1rem",
  color: "#fff",
  backgroundColor: "#ff5733",
  "&:hover": {
    backgroundColor: "#ff3319",
  },

  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(1.5, 5),
    fontSize: "1.1rem",
  },

  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(2, 6),
    fontSize: "1.2rem",
  },
}));

const Hero = ({
  title,
  subtitle,
  backgroundImage,
  buttonLabel,
  onButtonClick,
}) => {
  const theme = useTheme();
  // const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <HeroContainer backgroundImage={backgroundImage}>
      <TextContainer>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" } }}
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          sx={{ fontSize: { xs: "1rem", md: "1.2rem", lg: "1.4rem" } }}
        >
          {subtitle}
        </Typography>
        <HeroButton onClick={onButtonClick}>{buttonLabel}</HeroButton>
      </TextContainer>
    </HeroContainer>
  );
};

export default Hero;
