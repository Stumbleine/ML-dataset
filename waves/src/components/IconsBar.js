import { IconButton, SvgIcon } from "@mui/material";
import { Box } from "@mui/system";
import { ReactComponent as Discord } from "../icons/discord-brands.svg";
import { ReactComponent as Linkedin } from "../icons/linkedin-in-brands.svg";
import { ReactComponent as Gitlab } from "../icons/gitlab-brands.svg";
import { GitHub, MailOutline } from "@mui/icons-material";
export default function IconsBar() {
  return (
    <Box
      sx={{
        display: { xs: "none", sm: "flex" },

        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        mr: "2%",
      }}
    >
      {/* SOCIAL ICONS */}
      <Box
        sx={{
          bgcolor: "divider",
          width: "0.5px",
          height: 200,
          mb: 1,
        }}
      ></Box>
      <IconButton>
        <MailOutline
          sx={{
            color: "text.icon",
            "&:hover": {
              color: "primary.main",
            },
          }}
        ></MailOutline>
      </IconButton>
      <IconButton>
        <SvgIcon
          sx={{
            color: "text.icon",
            "&:hover": {
              color: "primary.main",
            },
          }}
        >
          <Discord></Discord>
        </SvgIcon>
      </IconButton>
      <IconButton>
        <SvgIcon
          sx={{
            color: "text.icon",
            "&:hover": {
              color: "primary.main",
            },
          }}
        >
          <Linkedin></Linkedin>
        </SvgIcon>
      </IconButton>
      <IconButton>
        <GitHub
          sx={{
            color: "text.icon",
            "&:hover": {
              color: "primary.main",
            },
          }}
        ></GitHub>
      </IconButton>
      <IconButton>
        <SvgIcon
          sx={{
            color: "text.icon",
            "&:hover": {
              color: "primary.main",
            },
          }}
        >
          <Gitlab></Gitlab>
        </SvgIcon>
      </IconButton>
      <Box
        sx={{
          bgcolor: "divider",
          width: "0.5px",
          height: 200,
          mt: 2,
        }}
      ></Box>
    </Box>
  );
}
