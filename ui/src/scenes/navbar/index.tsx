import React from "react";
import FlexBetween from "@/components/FlexBetween";
import PixIcon from "@mui/icons-material/Pix";
import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { palette } = useTheme();
  const [selected, setSelected] = React.useState("dashboard");
  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      {/* LEFT */}
      <FlexBetween gap="0.75rem">
        <PixIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize="16px">
          Finance
        </Typography>
      </FlexBetween>
      {/* RIGHT */}
      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: palette.primary.main } }}>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color:
                selected === "dashboard"
                  ? palette.primary.main
                  : palette.grey[700],
              textDecoration: "none",
            }}
          >
            Dashboard
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color:
                selected === "predictions"
                  ? palette.primary.main
                  : palette.grey[700],
              textDecoration: "none",
            }}
          >
            Predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
