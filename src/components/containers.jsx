import { Container } from "@mui/material"
import Headwarpper from "../Header/headerWrapper"
import { Routes, Route } from "react-router-dom"

export default function Containers() {
  return (
    <Container>
      <Headwarpper />
      <Routes>
        <Route path="/" element={<home />} />
        <Route path="/shop" element={<shop />} />
        <Route path="/board" element={<board />} />
        <Route path="/chat" element={<chat />} />
      </Routes>
    </Container>
  )
}
