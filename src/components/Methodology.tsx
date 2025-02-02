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
            title: "Entendemos o presente (AS IS): ",
            description: "Mapeamento de cada detalhe da sua operação atual, identificação de gargalos, ineficiências e oportunidades de melhoria.",
        },
        {
            icon: "edit",
            title: "Desenhamos o futuro (TO BE): ",
            description: "Criação de processos claros, eficientes e alinhados aos objetivos estratégicos da sua empresa.",
        },
        {
            icon: "stats",
            title: "Mão na massa: ",
            description: "Implementação das melhorias com plano de ação personalizado, testes, treinamentos e ajustes em tempo real.",
        },
        {
            icon: "recycle",
            title: "Homologação e acompanhamento de resultados: ",
            description:
                "Validação do mapeamento na prática e dos resultados. Garantia da implantação com documentação detalhada e suporte completo aos steakholders.",
        },
    ]
    const results: ItemData[] = [
        {
            icon: "eye",
            title: "Cadeia de Valor Estratégica: ",
            description: "Uma visão clara de como sua empresa pode agregar mais valor em cada etapa.",
        },
        {
            icon: "list",
            title: "Processos Padronizados e Otimizados: ",
            description: "Tudo mapeado no padrão BPMN e detalhado até o nível de tarefas, eliminando gargalos e inconsistências.",
        },
        {
            icon: "clip",
            title: "Playbooks e Políticas Internas: ",
            description: "Documentação completa para sustentar o crescimento com qualidade e eficiência.",
        },
        {
            icon: "user",
            title: "Equipe Treinada: ",
            description: "Stakeholders preparados para operar com excelência no novo modelo.",
        },
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
                        Nosso Método & Entregáveis
                    </Typography>
                </motion.div>

                <motion.div
                    style={{}}
                    initial="initial"
                    animate={inView ? "animate" : "initial"}
                    variants={animationVariants({ opacityOnly: true, delay: 0.5 })}
                >
                    <Typography variant={isMobile ? "h5" : "h6"} sx={{ color: colors.blue }}>
                        Uma metodologia <span style={{ color: colors.dark_pink }}>exclusiva</span> para resultados sustentáveis
                    </Typography>
                </motion.div>

                <motion.div
                    style={{}}
                    initial="initial"
                    animate={inView ? "animate" : "initial"}
                    variants={animationVariants({ opacityOnly: true, delay: 1 })}
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
                        Nosso método é baseado em <span style={{ fontWeight: "bold" }}>transformar desafios</span> operacionais em{" "}
                        <span style={{ fontWeight: "bold" }}>vantagens competitivas</span>. Com uma abordagem prática e descomplicada, trabalhamos
                        desde o <span style={{ fontWeight: "bold" }}>diagnóstico</span> até a{" "}
                        <span style={{ fontWeight: "bold" }}>implementação</span> e acompanhamento do novo modelo, garantindo resultados reais e
                        duradouros.
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
                        }}
                    >
                        <motion.div style={{}} initial="initial" animate={inView2 ? "animate" : "initial"} variants={animationVariants({})}>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: isMobile ? undefined : "5.2165vw",
                                    color: colors.grey,
                                    lineHeight: isMobile ? undefined : "5.2165vw",
                                }}
                            >
                                Como <span style={{ color: colors.light_pink }}>funciona</span> o nosso processo?
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
                        O que <span style={{ color: colors.dark_pink }}>entregamos</span>?
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
                            gap: isMobile ? "8vw" : "3vw",
                            flex: 1,
                            padding: isMobile ? "0 7vw" : undefined,
                        }}
                    >
                        {results.map((item, index) => (
                            <motion.div
                                key={item.icon}
                                initial="initial"
                                animate={inView3 ? "animate" : "initial"}
                                variants={animationVariants({ delay: 0.5 + index * 0.5, reversed: true })}
                            >
                                <Item item={item} alt />
                            </motion.div>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
