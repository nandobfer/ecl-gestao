import React from "react"
import { Typography, TypographyProps } from "@mui/material"

interface InlineTypographyProps extends TypographyProps {
    url?: string
    highlight?: boolean
    secondary?: boolean
}

export const InlineTypography: React.FC<InlineTypographyProps> = (props) => {
    return (
        <Typography
            sx={{
                display: "inline",
                color: props.url ? "success.main" : props.highlight ? props.secondary ? "background.default" : 'primary.main' : 'inherit',
                cursor: props.url ? "pointer" : undefined,
                "&:hover": props.url
                    ? {
                          textDecoration: "underline",
                      }
                    : undefined,
                fontFamily: 'inherit',
                fontSize: 'inherit',
                fontWeight: 'inherit',
                lineHeight: 'inherit',
                ...props.sx,
            }}
            onClick={props.url ? () => window.open(props.url, "_new") : undefined}
            {...props}
        />
    )
}
