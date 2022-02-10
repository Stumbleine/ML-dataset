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
import { Link } from "react-router-dom";
import * as React from "react";
import IconsBar from "../components/IconsBar";
import { useSelector } from "react-redux";
export default function Home() {
  const data = useSelector((state) => state.setting.data.home);
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
                {data.hello}
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  color: "text.primary",
                  fontWeight: 900,
                  fontSize: { lg: 75, md: 65, sm: 55, xs: 50 },
                }}
              >
                {data.name}
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: "text.secondary",
                  fontWeight: 900,
                  fontSize: { lg: 60, md: 50, sm: 45, xs: 40 },
                }}
              >
                {data.profession}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "text.secondary",
                  mt: 2,
                  fontSize: { lg: 20, md: 18, sm: 17, xs: 16 },
                }}
              >
                {data.presentation}
              </Typography>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <Button variant="contained" sx={{ mt: 5 }}>
                  {data.btnAbout}
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
