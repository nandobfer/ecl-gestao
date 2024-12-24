import React from 'react'
import {Box, Typography} from '@mui/material'
import { colors } from '../style/colors'

interface ServicesProps {
    
}

const ServiceItem: React.FC<{ title: string, description: string, number: number }> = (props) => <Box sx={{
    flexDirection: 'column', position: 'relative',
    flex: 1
}}>
    <Typography variant='h1' sx={{position: 'absolute', top: '-3.5vw', left: 0}}>{props.number}</Typography>
    <Box sx={{ bgcolor: colors.blue, borderRadius: '3vw', flex: 1, justifyContent: 'center',
        alignItems: 'center',
        padding: '4vw 3vw'
    }}>
        <Typography sx={{
            color: colors.grey, fontWeight: 700, fontFamily: 'Yaldevi',
                    fontSize: '3rem',
                    lineHeight: '2.7rem',
         }}><span style={{color: colors.light_pink}}>{props.title.split(' ')[0]}</span> <br/> { props.title.split(' ').slice(1).join(' ') }</Typography>
    </Box>

    <Box sx={{
        padding: '2.5vw',
        marginTop: '-2vw',
        left: 0, border: '2px solid black', borderRadius: '3vw',
        zIndex: -1,
        paddingTop: '4vw',
        height: '19vw',
    }}>
        <Typography sx={{fontWeight: 500,
                    fontSize: '1.5rem',
                    lineHeight: '2rem'}}>
            {props.description}
        </Typography>
    </Box>
</Box>

export const Services:React.FC<ServicesProps> = ({  }) => {
    
    return (
        <Box id='services' sx={{flexDirection: 'column', padding: '7vw', paddingTop: '11vw', gap: '10vw'}}>
            <Box sx={{justifyContent: 'space-between',}}>
                <Typography variant='h1' sx={{
                    flex: 0.4,
                }}>Nossos serviços</Typography>

                <Typography sx={{
                    flex: 0.55,
                    alignSelf: 'flex-end',
                    fontWeight: 500,
                    fontSize: '1.85rem',
                    lineHeight: '2.5rem'
                }}>
                Aqui, <span style={{fontWeight: 700}}>mapeamos</span> e <span style={{fontWeight: 700}}>revolucionamos</span> a operação do seu negócio. Nossa <span style={{fontWeight: 700}}>metodologia exclusiva</span> nos permite atuar com precisão em cada etapa:
                </Typography>
            </Box>

            <Box sx={{flex: 1, gap: '3vw', padding: '0 1vw'}}>
                <ServiceItem number={1} title='Cadeia de valor' description='Diagnóstico estratégico e profundo do nível estratégico até o operacional, baseado na proposta de valor da sua empresa' />
                <ServiceItem number={2} title='Mapeamento de processos' description='De "como está" para "como deve ser", desenhamos e implementamos fluxos que eliminam desperdícios e aumentam a eficiência' />
                <ServiceItem number={3} title='Implantação na prática' description='Vamos além da teoria, entregando treinamentos, documentação e acompanhamento em tempo real' />
            </Box>

            <Box sx={{height: '100vh', position: 'relative', margin: '-7vw'}}>
                <Box sx={{
                    bgcolor: colors.blue, width: 0.588, height: 0.68,
                    position: 'absolute',
                    top: 0, right: 0,
                    borderTopLeftRadius: '2vw',
                    justifyContent: 'center',
                    alignItems: 'center',
                    
                }}>
                    <img src='/services.png' style={{width: '45vw', height: 'auto', zIndex: 2}} />
                </Box>

                <Box sx={{
                    bgcolor: colors.dark_pink, width: 0.545, height: 0.86,
                    position: 'absolute',
                    bottom: 0, left: 0,
                    borderTopRightRadius: '2vw',
                    borderBottomRightRadius: '2vw',
                    padding: '6.2vw',
                    paddingTop: '8.2vw',
                    whiteSpace: 'break-spaces',
                    flexDirection: 'column',
                    gap: '3vw'
                }}>
                    <Typography variant='h1' sx={{
                        color: colors.light_pink,
                        fontSize: '4.2rem',
                        lineHeight: '4rem'
                    }}>
                    Diferente de<br/>
                    outras consultorias, 
                    não entregamos soluções genéricas
                    </Typography>

                    <Typography variant='body2' sx={{
                        color: colors.grey
                    }}>
                    Nosso foco é criar <span style={{fontWeight: 700}}>resultados sustentáveis</span> e <span style={{fontWeight: 700}}>contínuos</span>, colocando ordem no caos e trazendo clareza à sua operação.
                    </Typography>
                </Box>

                <Box sx={{justifyContent: 'center',
                    alignItems: 'center',
                    width: 0.455, height: 0.32,
                    position: 'absolute',
                    bottom: 0, right: 0,
                    padding: '3vw'
                }}>
                    <Typography variant='body2' sx={{}}>
                    O que nos motiva é ver cada cliente <span style={{fontWeight: 700}}>atingindo novos patamares</span>. Afinal, quando você cresce de forma sustentável, <span style={{fontWeight: 700}}>nós crescemos juntos</span>.
                    </Typography>
                </Box>
                
            </Box>

            <Box sx={{padding: '11.5vw 0.5vw'}}>
                <Typography sx={{
                    fontSize: '6.3rem',
                    fontFamily: 'Yaldevi',
                    lineHeight: '6.3rem',
                    fontWeight: 700,
                    color: colors.brown
                }}>
                Ecl Gestão, <span style={{color: colors.dark_pink, fontSize: '6rem'}}>transformando</span> processos, impulsionando resultados. 
                </Typography>
                <img src='/services-2.png' style={{width: '35vw', height: 'auto', marginTop: '-2.3vw', marginLeft: '2vw'}} />
            </Box>
        </Box>
    )
}