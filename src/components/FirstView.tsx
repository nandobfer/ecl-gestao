import React from 'react'
import {Box, Button, Typography} from '@mui/material'
import { colors } from '../style/colors'
import first_view_image from '/first_view.png'

interface FirstViewProps {
    
}

export const FirstView:React.FC<FirstViewProps> = ({  }) => {
    
    return (
        <Box sx={{ padding: '6vw', alignItems: 'center', position: 'relative' }}>
            
            
            <Box id='first-view' sx={{flexDirection: 'column', flex: 1, gap: '2vw'}}>
                <Typography sx={{fontSize: '1.835rem', color: colors.dark_pink, fontWeight: 700}}>Modelagem de Negócios</Typography>
                <Typography sx={{
                    color: colors.blue,
                    fontWeight: 700,
                    fontSize: '3.6rem',
                    lineHeight: '3.8rem',
                    fontFamily: 'Yaldevi'
                }}>Transformamos processos em resultados através da tríade: pessoas, processos & tecnologia</Typography>

                <Button variant='contained' color='secondary' sx={{
                    borderRadius: '5vw',
                    fontSize: '2rem',
                    alignSelf: 'center',
                    padding: '1vw 5vw',
                    marginTop: 'auto',
                    marginRight: '13vw'
                }}>otimize sua empresa</Button>
            </Box>

            <img src={first_view_image} style={{
                width: '38vw', height: 'auto', aspectRatio: 1.32, marginLeft: '2vw'
            }} />

            <Box sx={{
                right: 0, bottom: '-10vh', width: '90vw', height: '30vh', bgcolor: colors.dark_pink,
                position: 'absolute',
                zIndex: -1,
                borderTopRightRadius: '3vw'
            }} />
        </Box>
    )
}