import React from 'react'
import { Box, Typography, useMediaQuery } from "@mui/material"
import { colors } from "../style/colors"
import { Cta } from "./Cta"
import { useInView } from "../hooks/useInView"
import { motion } from "framer-motion"
import { animationVariants } from "../animationVariants"

interface ServicesProps {}

const ServiceItem: React.FC<{ title: string; description: string; number: number }> = (props) => {
    const isMobile = useMediaQuery("(orientation: portrait)")

    return (
        <Box
            sx={{
                flexDirection: "column",
                position: "relative",
                width: isMobile ? "70vw" : "26vw",
            }}
        >
            <Typography
                variant="h1"
                sx={{ position: "absolute", top: isMobile ? 0 : "-3.5vw", left: isMobile ? "3vw" : 0, fontSize: isMobile ? "10vw" : undefined }}
            >
                {props.number}
            </Typography>
            <Box
                sx={{
                    bgcolor: colors.blue,
                    borderRadius: isMobile ? "7vw" : "3vw",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "4vw 3vw",
                }}
            >
                <Typography
                    sx={{
                        color: colors.grey,
                        fontWeight: 700,
                        fontFamily: "Playfair Display",
                        fontSize: isMobile ? "7vw" : "3.1299vw",
                        lineHeight: isMobile ? "7vw" : "2.81691vw",
                    }}
                >
                    <span style={{ color: colors.light_pink }}>{props.title.split(" ")[0]}</span> <br /> {props.title.split(" ").slice(1).join(" ")}
                </Typography>
            </Box>

            <Box
                sx={{
                    padding: isMobile ? "5vw" : "2.5vw",
                    marginTop: "-3vw",
                    left: 0,
                    border: "2px solid black",
                    borderRadius: isMobile ? "7vw" : "3vw",
                    zIndex: -1,
                    paddingTop: isMobile ? "7vw" : "4.5vw",
                    height: isMobile ? "50vw" : "19vw",
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 500,
                        fontSize: isMobile ? "5vw" : "1.56495vw",
                        lineHeight: isMobile ? "5vw" : "2.0866vw",
                    }}
                >
                    {props.description}
                </Typography>
            </Box>
        </Box>
    )
}

export const Services: React.FC<ServicesProps> = ({}) => {
    const { ref, inView } = useInView()
    const { ref: ref2, inView: inView2 } = useInView()
    const { ref: ref3, inView: inView3 } = useInView()
    const isMobile = useMediaQuery("(orientation: portrait)")

    return (
        <Box ref={ref} id="services" sx={{ flexDirection: "column", padding: "7vw", paddingTop: "11vw", gap: "10vw", overflowX: "hidden" }}>
            <motion.div
                style={{ zIndex: -1 }}
                initial="initial"
                animate={inView ? "animate" : "initial"}
                variants={animationVariants({ vertical: true })}
            >
                <Box
                    sx={{
                        justifyContent: "space-between",
                        bgcolor: colors.light_pink,
                        margin: "-4vw",
                        marginTop: isMobile ? "-15vw" : "-12vw",
                        zIndex: -1,
                        padding: isMobile ? "10vw" : "5vw",
                        paddingTop: isMobile ? "20vw" : "9vw",
                        paddingBottom: "5vw",
                        borderRadius: isMobile ? "10vw" : "3vw",
                        borderTopRightRadius: 0,
                        borderTopLeftRadius: 0,
                        position: "relative",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: isMobile ? "10vw" : "4vw",
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            flex: 0.4,
                        }}
                    >
                        Nossos serviços
                    </Typography>

                    <Typography
                        sx={{
                            flex: 0.55,
                            alignSelf: "flex-end",
                            fontWeight: 500,
                            fontSize: isMobile ? "4vw" : "1.9301vw",
                            lineHeight: isMobile ? "5vw" : "2.60825vw",
                        }}
                    >
                        Método focado em <span style={{ fontWeight: "bold" }}>transformar desafios</span> operacionais em{" "}
                        <span style={{ fontWeight: "bold" }}>vantagens competitivas.</span> Abordagem prática e descomplicada desde o{" "}
                        <span style={{ fontWeight: "bold" }}>diagnóstico</span> até a <span style={{ fontWeight: "bold" }}>implementação</span>,
                        garantindo resultados reais e duradouros.
                    </Typography>

                    <Box
                        sx={{
                            position: "absolute",
                            width: isMobile ? "10vw" : "3.5vw",
                            height: isMobile ? "10vw" : "3.5vw",
                            bgcolor: colors.blue,
                            right: "2.5vw",
                            bottom: isMobile ? "3vw" : "-1.5vw",
                            borderRadius: "100%",
                        }}
                    />
                </Box>
            </motion.div>

            <Box
                ref={ref2}
                sx={
                    isMobile
                        ? {
                              margin: "0 -7vw",
                              padding: "0 7vw",
                              width: "100vw",
                              overflowX: "scroll",
                              gap: "10vw",
                          }
                        : {
                              gap: "3vw",
                              padding: "0 1vw",
                              justifyContent: "space-between",
                          }
                }
            >
                <motion.div initial="initial" animate={inView2 ? "animate" : "initial"} variants={animationVariants({ delay: 0 })}>
                    <ServiceItem
                        number={1}
                        title="Cadeia de valor"
                        description="Diagnóstico estratégico e profundo do nível estratégico até o operacional, baseado na proposta de valor da sua empresa"
                    />
                </motion.div>
                <motion.div initial="initial" animate={inView2 ? "animate" : "initial"} variants={animationVariants({ delay: 0.5 })}>
                    <ServiceItem
                        number={2}
                        title="Mapeamento de processos"
                        description='De "como está" para "como deve ser", desenhamos e implementamos fluxos que eliminam desperdícios e aumentam a eficiência'
                    />
                </motion.div>
                <motion.div initial="initial" animate={inView2 ? "animate" : "initial"} variants={animationVariants({ delay: 1 })}>
                    <ServiceItem
                        number={3}
                        title="Implantação na prática"
                        description="Vamos além da teoria, entregando treinamentos, documentação e acompanhamento em tempo real"
                    />
                </motion.div>
            </Box>

            <Cta color="secondary" href="#contact" style={{ margin: "-2vw auto 0" }}>
                otimize sua empresa
            </Cta>

            <Box ref={ref3} sx={{ position: "relative", margin: "-5vw -7vw", flexDirection: isMobile ? "column" : undefined }}>
                <motion.div initial="initial" animate={inView3 ? "animate" : "initial"} variants={animationVariants({ delay: 0.5 })}>
                    <Box
                        sx={{
                            bgcolor: colors.dark_pink,
                            width: isMobile ? 1 : 0.545,
                            borderTopRightRadius: "2vw",
                            borderBottomRightRadius: "2vw",
                            borderRadius: isMobile ? "10vw" : undefined,
                            padding: isMobile ? "10vw" : "6.2vw",
                            whiteSpace: "break-spaces",
                            flexDirection: "column",
                            gap: isMobile ? "5vw" : "3vw",
                            paddingBottom: isMobile ? "20vw" : undefined,
                        }}
                    >
                        <Typography
                            sx={{
                                color: colors.light_pink,
                                fontSize: isMobile ? "4.5vw" : "1.98227vw",
                                lineHeight: isMobile ? "4.5vw" : "1.46062vw",
                                width: 0.3,
                                fontWeight: "bold",
                            }}
                        >
                            Diferente de outras consultorias,
                        </Typography>

                        {isMobile ? (
                            <Box sx={{ flexDirection: "column", marginTop: "-15vw" }}>
                                <Typography variant="h5" sx={{ textAlign: "end" }}>
                                    não
                                </Typography>
                                <Typography variant="h5" sx={{ textAlign: "center" }}>
                                    entregamos
                                </Typography>
                                <Typography variant="h5" sx={{ textAlign: "start" }}>
                                    soluções
                                </Typography>
                                <Typography variant="h5" sx={{ textAlign: "end" }}>
                                    genéricas
                                </Typography>
                            </Box>
                        ) : (
                            <Typography
                                variant="h1"
                                sx={{ fontSize: "6.78145vw", lineHeight: "6.78145vw", textAlign: "end", color: colors.grey, marginTop: "-3vw" }}
                            >
                                não entregamos soluções genéricas
                            </Typography>
                        )}

                        <Typography
                            variant="body2"
                            sx={{
                                color: colors.grey,
                            }}
                        >
                            Nosso foco é criar <span style={{ fontWeight: 700 }}>resultados sustentáveis</span> e{" "}
                            <span style={{ fontWeight: 700 }}>contínuos</span>, colocando ordem no caos e trazendo clareza à sua operação.
                        </Typography>

                        {isMobile && (
                            <>
                                <motion.div
                                    initial="initial"
                                    animate={inView3 ? "animate" : "initial"}
                                    variants={animationVariants({ reversed: true })}
                                >
                                    <video
                                        src="/solutions.mp4"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        style={{
                                            width: "100%",
                                            height: "130vw",
                                            objectFit: "cover",
                                            borderRadius: "7vw",
                                        }}
                                    />
                                </motion.div>
                                <motion.div
                                    initial="initial"
                                    animate={inView3 ? "animate" : "initial"}
                                    variants={animationVariants({ delay: 1, reversed: true })}
                                >
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: colors.grey,
                                        }}
                                    >
                                        O que nos motiva é ver cada cliente <span style={{ fontWeight: 700 }}>atingindo novos patamares</span>.
                                        Afinal, quando você cresce de forma sustentável, <span style={{ fontWeight: 700 }}>nós crescemos juntos</span>
                                        .
                                    </Typography>
                                </motion.div>
                            </>
                        )}
                    </Box>
                </motion.div>

                {!isMobile && (
                    <Box
                        sx={{
                            position: isMobile ? undefined : "absolute",
                            top: 0,
                            right: 0,
                            flexDirection: "column",
                            gap: "3vw",
                        }}
                    >
                        <motion.div
                            style={{ zIndex: 2 }}
                            initial="initial"
                            animate={inView3 ? "animate" : "initial"}
                            variants={animationVariants({ reversed: true })}
                        >
                            {/* <img src="/services.png" style={{ width: "50vw", height: "auto", zIndex: 2 }} /> */}
                            <video
                                src="/solutions.mp4"
                                autoPlay
                                loop
                                style={{
                                    width: "50vw",
                                    height: "35vw",
                                    objectFit: "cover",
                                    zIndex: 2,
                                    borderRadius: "3vw",
                                    borderTopRightRadius: 0,
                                    borderBottomRightRadius: 0,
                                }}
                            />
                        </motion.div>
                        <motion.div
                            initial="initial"
                            animate={inView3 ? "animate" : "initial"}
                            variants={animationVariants({ delay: 1, reversed: true })}
                        >
                            <Typography variant="body2" sx={{ marginLeft: "8vw", width: "40vw" }}>
                                O que nos motiva é ver cada cliente <span style={{ fontWeight: 700 }}>atingindo novos patamares</span>. Afinal, quando
                                você cresce de forma sustentável, <span style={{ fontWeight: 700 }}>nós crescemos juntos</span>.
                            </Typography>
                        </motion.div>
                    </Box>
                )}

                <Box
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        width: 0.455,
                        height: 0.32,
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        padding: "3vw",
                    }}
                ></Box>
            </Box>

            <Box
                sx={{
                    padding: "3vw 0.5vw 8vw",
                    flexDirection: isMobile ? "column-reverse" : undefined,
                    marginTop: isMobile ? "-17vw" : undefined,
                    zIndex: isMobile ? 2 : undefined,
                    alignItems: isMobile ? "center" : undefined,
                    gap: isMobile ? "5vw" : undefined,
                }}
            >
                <Typography
                    variant={isMobile ? "h5" : "h2"}
                    sx={{
                        color: colors.blue,
                    }}
                >
                    Ecl Gestão, <span style={{ color: colors.dark_pink }}>transformando</span> processos, impulsionando resultados.
                </Typography>
                <img src="/services-2.png" style={{ width: isMobile ? "60vw" : "35vw", height: "auto", marginTop: "-2.3vw", marginLeft: "2vw" }} />
            </Box>
        </Box>
    )
}
