import React from "react"
import { Box, Typography, useMediaQuery } from "@mui/material"
import { colors } from "../style/colors"
import { useInView } from "../hooks/useInView"
import { motion } from "framer-motion"
import { animationVariants } from "../animationVariants"

interface MethodologyProps {}
interface ItemData {
    icon: string
    title: string
    description: string
}

const Item: React.FC<{ item: ItemData; alt?: boolean }> = ({ item, alt }) => {
    const isMobile = useMediaQuery("(orientation: portrait)")

    return (
        <Box sx={{ gap: isMobile ? "4vw" : "2vw", flex: 1 }}>
            <img src={`/icons/${item.icon}.svg`} style={{ width: isMobile ? "10vw" : "3vw", height: "auto" }} />
            <Typography
                sx={{
                    color: alt ? colors.blue : colors.grey,
                    fontSize: isMobile ? "3.05vw" : "1.56495vw",
                    fontWeight: 500,
                    lineHeight: isMobile ? "4.05vw" : "2.29526vw",
                }}
            >
                <span style={{ fontWeight: "bold" }}>{item.title}</span>
                {item.description}
            </Typography>
        </Box>
    )
}

export const Methodology: React.FC<MethodologyProps> = ({}) => {
    const isMobile = useMediaQuery("(orientation: portrait)")
    const { ref, inView } = useInView()
    const { ref: ref2, inView: inView2 } = useInView()
    const { ref: ref3, inView: inView3 } = useInView()

    const how_works: ItemData[] = [
        {
            icon: "map",
            title: "Diagnóstico de precisão operacional:",
            description:
                "Mapeamos sua operação atual (AS IS), identificamos gargalos invisíveis, fluxos quebrados, retrabalhos e perdas ocultas de eficiência.",
        },
        {
            icon: "edit",
            title: "Redesenho inteligente e estratégico (TO BE): ",
            description:
                "Criamos novos fluxos operacionais enxutos e escaláveis, conectando pessoas, sistemas e IA de forma lógica, integrada e prática.",
        },
        {
            icon: "stats",
            title: "Implementação + Automação + Treinamento em Campo: ",
            description:
                "Implantamos a nova rotina com o time, documentamos cada passo, criamos as automações com IA (quando faz sentido), treinamos todo o time e acompanhamos, garantindo que os novos processos rodem com autonomia.",
        },
        {
            icon: "recycle",
            title: "Homologação e Garantia de Resultados: ",
            description:
                "Validamos os fluxos com os stakeholders, ajustamos com base no uso real e acompanhamos o funcionamento até que o sistema rode sozinho — como deve ser.",
        },
    ]
    const results = [
        "Mapeamento operacional completo e estratégico.",
        "Fluxos otimizados e redesenhados com foco em escala.",
        "Playbooks, políticas e treinamentos para toda a operação.",
        "Processos automatizados (no seu sistema atual ou em alguma plataforma sugerida no projeto).",
        "Automações inteligentes com IA, quando aplicável",
        "Acompanhamento ativo até o sistema estar rodando com autonomia",
    ]

    return (
        <Box
            ref={ref}
            id="methodology"
            sx={{
                padding: "10vw",
                paddingTop: isMobile ? undefined : 0,
                flexDirection: "column",
                gap: "2vw",
                position: "relative",
                overflowX: isMobile ? "hidden" : undefined,
            }}
        >
            <Box
                sx={{
                    bgcolor: colors.light_pink,
                    borderRadius: isMobile ? "10vw" : "3vw",
                    flexDirection: "column",
                    margin: "-10vw",
                    padding: "10vw",
                    zIndex: -1,
                    paddingBottom: isMobile ? "90vw" : undefined,
                }}
            >
                <motion.div style={{}} initial="initial" animate={inView ? "animate" : "initial"} variants={animationVariants({ opacityOnly: true })}>
                    <Typography
                        sx={{
                            color: colors.dark_pink,
                            fontWeight: "bold",
                            fontSize: isMobile ? "4vw" : "2.81691vw",
                            lineHeight: isMobile ? "4vw" : "2.81691vw",
                            width: isMobile ? 0.4 : undefined,
                            textAlign: isMobile ? "end" : undefined,
                            marginLeft: isMobile ? "auto" : undefined,
                        }}
                    >
                        Nosso sistema de eficiência escalável
                        <br />
                        <br />
                    </Typography>
                </motion.div>

                <motion.div
                    style={{}}
                    initial="initial"
                    animate={inView ? "animate" : "initial"}
                    variants={animationVariants({ opacityOnly: true, delay: 0.5 })}
                >
                    <Typography
                        variant="body2"
                        sx={{
                            color: colors.blue,
                            fontSize: isMobile ? undefined : "2.0866vw",
                            marginTop: isMobile ? "5vw" : undefined,
                            padding: isMobile ? "0 6.5vw" : undefined,
                        }}
                    >
                        Implantamos um sistema que reorganiza a operação da sua empresa — do caos à automação — com processos claros, tecnologia
                        funcional e rotinas que rodam sozinhas.
                    </Typography>
                </motion.div>
            </Box>

            <Box
                sx={{
                    paddingTop: "3vw",
                    flexDirection: isMobile ? "column" : undefined,
                    marginTop: isMobile ? "-0vw" : undefined,
                }}
                ref={ref2}
            >
                <Box sx={{ flexDirection: "column", flex: isMobile ? undefined : 0.4, position: "relative" }}>
                    <Box
                        sx={{
                            position: "absolute",
                            bottom: "-2vw",
                            left: "-10vw",
                            bgcolor: colors.dark_pink,
                            padding: isMobile ? "10vw" : "5vw",
                            paddingLeft: "8vw",
                            borderTopRightRadius: isMobile ? "10vw" : "2vw",
                            borderBottomRightRadius: isMobile ? "10vw" : "2vw",
                            width: isMobile ? undefined : "35vw",
                        }}
                    >
                        <motion.div style={{}} initial="initial" animate={inView2 ? "animate" : "initial"} variants={animationVariants({})}>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: isMobile ? undefined : "4.5vw",
                                    color: colors.grey,
                                    lineHeight: isMobile ? undefined : "4.5vw",
                                }}
                            >
                                Como <span style={{ color: colors.light_pink }}>funciona</span> o sistema?
                            </Typography>
                        </motion.div>
                    </Box>

                    {!isMobile && (
                        <Box
                            sx={{
                                position: "absolute",
                                borderRadius: "100%",
                                width: "45vw",
                                height: "45vw",
                                border: `7vw solid ${colors.dark_pink}`,
                                top: "1vw",
                                left: "6vw",
                                zIndex: -1,
                            }}
                        />
                    )}
                </Box>

                <Box
                    sx={{
                        flex: 1,
                        borderRadius: isMobile ? "10vw" : "2vw",
                        bgcolor: colors.blue,
                        padding: isMobile ? "10vw" : "5vw",
                        marginRight: "-10vw",
                        paddingLeft: isMobile ? "20vw" : "10vw",
                        flexDirection: "column",
                        gap: isMobile ? "8vw" : "4vw",
                        marginLeft: isMobile ? "-8vw" : undefined,
                        marginTop: isMobile ? "-10vw" : undefined,
                        paddingTop: isMobile ? "20vw" : undefined,
                        paddingBottom: isMobile ? "15vw" : undefined,
                    }}
                >
                    {how_works.map((item, index) => (
                        <motion.div
                            key={item.icon}
                            initial="initial"
                            animate={inView2 ? "animate" : "initial"}
                            variants={animationVariants({ delay: 0.5 + index * 0.5, reversed: true })}
                        >
                            <Item item={item} />
                        </motion.div>
                    ))}
                </Box>
            </Box>

            <Box
                ref={ref3}
                sx={{
                    flexDirection: "column",
                    padding: "5vw 3vw",
                    paddingTop: "10vw",
                    margin: "-5vw",
                    gap: "8vw",
                }}
            >
                {isMobile && (
                    <motion.div style={{ zIndex: 2 }} initial="initial" animate={inView3 ? "animate" : "initial"} variants={animationVariants({})}>
                        <video
                            src="/deliver.mp4"
                            autoPlay
                            loop
                            muted
                            style={{
                                width: "100%",
                                height: "110vw",
                                top: "-3vw",
                                zIndex: 2,
                                objectFit: "cover",
                                borderRadius: "10vw",
                                marginTop: "-15vw",
                            }}
                        />
                    </motion.div>
                )}

                <motion.div initial="initial" animate={inView3 ? "animate" : "initial"} variants={animationVariants({ vertical: true })}>
                    <Typography
                        variant={isMobile ? "h5" : "h2"}
                        sx={{ fontSize: isMobile ? undefined : "8.86805vw", color: colors.blue, padding: isMobile ? "0 7vw" : undefined }}
                    >
                        O que você <span style={{ color: colors.dark_pink }}>recebe</span>?
                    </Typography>
                </motion.div>

                <Box sx={{ gap: "5vw" }}>
                    {!isMobile && (
                        <Box sx={{ flex: 0.8, position: "relative" }}>
                            <motion.div
                                style={{ zIndex: 2 }}
                                initial="initial"
                                animate={inView3 ? "animate" : "initial"}
                                variants={animationVariants({})}
                            >
                                <video
                                    src="/deliver.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    style={{
                                        position: "absolute",
                                        width: "37vw",
                                        height: "50vw",
                                        top: "-3vw",
                                        left: 0,
                                        zIndex: 2,
                                        objectFit: "cover",
                                        borderRadius: "5vw",
                                    }}
                                />
                                {/* <img
                                src="/methodology.png"
                                style={{ position: "absolute", width: "37vw", height: "auto", top: "-3vw", left: 0, zIndex: 2 }}
                            /> */}
                            </motion.div>
                        </Box>
                    )}
                    <Box
                        sx={{
                            flexDirection: "column",
                            gap: isMobile ? "3vw" : "3vw",
                            flex: 1,
                            padding: isMobile ? "0 7vw" : undefined,
                        }}
                    >
                        {results.map((item, index) => (
                            <motion.div
                                key={index}
                                initial="initial"
                                animate={inView3 ? "animate" : "initial"}
                                variants={animationVariants({ delay: 0.5 + index * 0.5, reversed: true })}
                            >
                                <Box sx={{ gap: "1vw" }}>
                                    <Typography variant="subtitle1" sx={{ color: colors.dark_pink, fontSize: "1.56495vw" }}>
                                        ✷
                                    </Typography>
                                    <Typography variant="subtitle1">{item}</Typography>
                                </Box>
                            </motion.div>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
