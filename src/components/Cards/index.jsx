// eslint-disable-next-line no-unused-vars
import React from "react"
import { StyledCard } from "./style"

// eslint-disable-next-line react/prop-types
export const Cards = ({ children }) => {
    return (
        <StyledCard>
            {children}
        </StyledCard>
    )
}