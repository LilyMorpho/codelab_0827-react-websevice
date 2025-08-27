import { Typography, Breadcrumbs, Box } from "@mui/material"
import { Routes, Route, Link } from "react-router-dom"

export default function HeaderWrapper() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h4">Booldook</Typography>

      <Breadcrumbs>
        <Typography component={Link} to="/">
          SHOP
        </Typography>
        <Typography component={Link} to="/">
          BOARD
        </Typography>
        <Typography component={Link} to="/">
          CHAT
        </Typography>
      </Breadcrumbs>
    </Box>
  )
}
