import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { RomanNumeralConverter } from "../pages/RomanNumeralConverter"
import { PasswordCreator } from "../pages/PasswordCreator"
import { Elevator } from "../pages/Elevator"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/romannumeral" element={<RomanNumeralConverter/>}/>
            <Route path="/passwordcreator" element={<PasswordCreator/>}/>
            <Route path="/elevator" element={<Elevator/>}/>
        </Routes>
    )
}