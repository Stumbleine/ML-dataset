import {
  Container,
  Typography,
  Button,
  Grid,
  IconButton,
  Icon,
  SvgIcon,
} from "@mui/material";
import { Box } from "@mui/system";

import * as React from "react";
import IconsBar from "../components/IconsBar";
export default function Home() {
  /*   React.useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.14.0/css/all.css",
      // Inject before JSS
      document.querySelector("#font-awesome-css") || document.head.firstChild
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []); */
  /*       <Container
      disableGutters
      sx={{
        background: "rgba(34,67,116,0.56)",
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
      maxWidth="xl"
    > */
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="xl" sx={{ height: "92vh", display: "flex" }}>
        <IconsBar></IconsBar>
        <Grid container sx={{ height: "92vh" }}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              p: 1,
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                maxWidth: { lg: 900, md: 750, sm: 650, xs: 650 },
              }}
            >
              <Typography variant="h6" sx={{ color: "primary.main" }}>
                Hola a todos! mi nombre es
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  color: "text.primary",
                  fontWeight: 900,
                  fontSize: { lg: 75, md: 65, sm: 55, xs: 50 },
                }}
              >
                Cristhian M. Cespedes
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: "text.secondary",
                  fontWeight: 900,
                  fontSize: { lg: 60, md: 50, sm: 45, xs: 40 },
                }}
              >
                Diseñador y desarrollador web.
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "text.secondary",
                  mt: 2,
                  fontSize: { lg: 20, md: 18, sm: 17, xs: 16 },
                }}
              >
                Soy un ingeniero de sistemas enfocado en el diseño y
                construccion de aplicaciones web que generan experiencias
                digitales excepcionales, actualmente me encuentro ampliando mis
                conocimientos en el desarrollo para moviles con Flutter.
              </Typography>
              <Button variant="outlined" sx={{ mt: 5, fontWeight: "bold" }}>
                Contacto
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
