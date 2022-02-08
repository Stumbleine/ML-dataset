import {
  Container,
  Typography,
  Grid,
  Paper,
  SvgIcon,
  Tooltip,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import { ReactComponent as Angular } from "../icons/angular-brands.svg";
import { ReactComponent as Figma } from "../icons/figma-brands.svg";
import { ReactComponent as Git } from "../icons/git-alt-brands.svg";
import { ReactComponent as Java } from "../icons/java-brands.svg";
import { ReactComponent as Jira } from "../icons/jira-brands.svg";
import { ReactComponent as Javascript } from "../icons/js-square-brands.svg";
import { ReactComponent as Reactjs } from "../icons/react-brands.svg";
import { ReactComponent as Vue } from "../icons/vuejs-brands.svg";
import { ReactComponent as Csharp } from "../icons/csharp-brands.svg";
import { ReactComponent as Netcore } from "../icons/net-core-brands.svg";
import { ReactComponent as Postgresql } from "../icons/postgresql.svg";
import { ReactComponent as MUI } from "../icons/MUI-brands.svg";
import { ReactComponent as Taiga } from "../icons/taiga-brands.svg";
import { ReactComponent as SpringBoot } from "../icons/spring-boot.svg";
import IconsBar from "../components/IconsBar";
import { ArrowRight } from "@mui/icons-material";
export default function About() {
  const iconsList = {
    line1: [
      "React",
      "Angular",
      "Vue",
      "Javascript",
      "Material UI",
      "Java",
      "Spring Boot",
    ],
    line2: ["C#", "NET core", "Postgresql", "Figma", "Git", "Jira", "Taiga"],
  };
  const icons = {
    rowTech1: [
      { name: "React", icon: <Reactjs></Reactjs> },
      { name: "Angular", icon: <Angular></Angular> },
      { name: "Vue", icon: <Vue></Vue> },
      { name: "Javascript", icon: <Javascript></Javascript> },
      { name: "Material UI", icon: <MUI></MUI> },
    ],
    rowTech2: [
      { name: "Java", icon: <Java></Java> },
      { name: "Spring Boot", icon: <SpringBoot></SpringBoot> },
      { name: "C#", icon: <Csharp></Csharp> },
      { name: "NET core", icon: <Netcore></Netcore> },
      { name: "Postgresql", icon: <Postgresql></Postgresql> },
    ],
    rowTools: [
      { name: "Figma", icon: <Figma></Figma> },
      { name: "Git", icon: <Git></Git> },
      { name: "Jira", icon: <Jira></Jira> },
      { name: "Taiga", icon: <Taiga></Taiga> },
    ],
  };
  const RowIcons = () => {
    return (
      <>
        <Grid
          container
          spacing={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 0.5,
          }}
        >
          {icons.rowTech1.map((tech) => (
            <Grid item>
              <Paper
                item
                sx={{
                  height: 80,
                  width: 80,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Tooltip title={tech.name}>
                  <SvgIcon
                    sx={{
                      fontSize: 40,
                      color: "text.icon",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    {tech.icon}
                  </SvgIcon>
                </Tooltip>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </>
    );
  };

  const RowIcons2 = () => {
    return (
      <>
        <Grid
          container
          spacing={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 0.5,
          }}
        >
          {icons.rowTech2.map((tech) => (
            <Grid item>
              <Paper
                item
                sx={{
                  height: 80,
                  width: 80,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Tooltip title={tech.name}>
                  <SvgIcon
                    sx={{
                      fontSize: 40,
                      color: "text.icon",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    {tech.icon}
                  </SvgIcon>
                </Tooltip>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </>
    );
  };
  const RowToolIcons = () => {
    return (
      <>
        <Grid
          container
          spacing={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 0.5,
          }}
        >
          {icons.rowTools.map((tool) => (
            <Grid item>
              <Paper
                item
                sx={{
                  height: 80,
                  width: 80,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Tooltip title={tool.name}>
                  <SvgIcon
                    sx={{
                      fontSize: 40,
                      color: "text.icon",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    {tool.icon}
                  </SvgIcon>
                </Tooltip>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </>
    );
  };

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
        <Grid container>
          <Grid
            item
            md={8}
            lg={7}
            sx={{
              display: "flex",
              alignItems: "center",
              p: { xs: 0, sm: 1, md: 2 },
            }}
          >
            <Box
              sx={{
                maxWidth: { lg: 900, md: 600, sm: 700, xs: 550 },
                background: "grey",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Perfil
                </Typography>

                <Box
                  sx={{
                    bgcolor: "divider",
                    width: { lg: 500, md: 400, sm: 300, xs: 250, xl: 600 },
                    height: "0.5px",
                    ml: 2,
                  }}
                ></Box>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: { xs: "flex", sm: "flex", md: "none" },
                  justifyContent: "start",
                  mt: 2,
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    height: { xs: 160, sm: 200, md: 270, lg: 300 },
                    width: { xs: 160, sm: 200, md: 270, lg: 300 },
                  }}
                >
                  <img
                    src={require("../imgs/waves.jpg")}
                    alt="perfil"
                    loading="lazy"
                    style={{
                      height: "auto",
                      width: "100%",
                      borderRadius: "5px",
                    }}
                  />
                </Box>
                <Button variant="outlined" sx={{ ml: 3 }}>
                  Descargar CV
                </Button>
              </Box>
              <Typography
                sx={{
                  fontSize: { lg: 20, md: 18, sm: 17, xs: 15 },
                  color: "text.secondary",
                  mt: 1,
                }}
              >
                Hola, soy cristhian mercado cespedes un ingeniero de sistemas
                con residencia en Bolivia, especializado en el desarrollo web,
                desde 2018 durante mi carrera tuve la suerte de aprender sobre
                tecnologias web y hasta la actualidad me he dedicado a aprender
                y pulir mis habilidades de programacion.
              </Typography>
              <Typography
                sx={{
                  fontSize: { lg: 20, md: 18, sm: 17, xs: 15 },
                  color: "text.secondary",
                  mt: 0.5,
                }}
              >
                Al principio conecte con la animaciones que se podian realizar
                en la web tan simples que son hermosos, asi al principio aprendi
                por cuenta propia sobre tecnolgias Frontend y posteriormente
                Backend.
              </Typography>
              <Typography
                sx={{
                  fontSize: { lg: 20, md: 18, sm: 17, xs: 15 },
                  color: "text.secondary",
                  mt: 0.5,
                }}
              >
                Actualmente me encuentro aprendiendo sobre el desarrollo de
                aplicaciones multiplataforma con Flutter.
              </Typography>
              <Typography
                sx={{
                  fontSize: { lg: 20, md: 18, sm: 17, xs: 15 },
                  color: "text.secondary",
                  mt: 0.5,
                }}
              >
                Aqui las tecnologias que utilizo actualmente:
              </Typography>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <RowIcons></RowIcons>
                <RowIcons2></RowIcons2>
              </Box>
              {/* <Typography sx={{ fontSize: 20, color: "text.secondary", mt: 1 }}>
                Aqui las tecnologias que utilizo actualmente:
              </Typography> */}
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <RowToolIcons></RowToolIcons>
              </Box>
              <Box
                sx={{
                  display: {
                    xs: "flex",
                    sm: "none",
                  },
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <List dense>
                  {iconsList.line1.map((el) => (
                    <ListItem>
                      <ListItemIcon sx={{ color: "primary.main" }}>
                        <ArrowRight></ArrowRight>
                      </ListItemIcon>
                      <ListItemText primary={el} />
                    </ListItem>
                  ))}
                </List>
                <List dense>
                  {iconsList.line2.map((el) => (
                    <ListItem>
                      <ListItemIcon sx={{ color: "primary.main" }}>
                        <ArrowRight></ArrowRight>
                      </ListItemIcon>
                      <ListItemText primary={el} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          </Grid>
          {/* image grid */}
          <Grid
            item
            md={4}
            lg={5}
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
              alignItems: "center",
              background: "pink",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  height: { md: 270, lg: 300 },
                  width: { md: 270, lg: 300 },
                }}
              >
                <img
                  src={require("../imgs/waves.jpg")}
                  alt="perfil"
                  loading="lazy"
                  style={{
                    height: "auto",
                    width: "100%",
                    borderRadius: "5px",
                  }}
                />
              </Box>
              <Button variant="outlined" sx={{ mt: 5 }}>
                Descargar CV
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
