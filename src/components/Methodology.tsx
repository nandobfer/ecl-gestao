import React from "react"
import { Box, Typography } from "@mui/material"
import { colors } from "../style/colors"

interface MethodologyProps {}
interface ItemData {
    icon: string
    title: string
    description: string
}

const Item: React.FC<{ item: ItemData; alt?: boolean }> = ({ item, alt }) => (
    <Box sx={{ gap: "2vw", flex: 1 }}>
        <img src={`/icons/${item.icon}.svg`} style={{ width: "3vw", height: "3vw" }} />
        <Typography
            sx={{
                color: alt ? colors.blue : colors.grey,
                fontSize: "1.5rem",
                fontWeight: 500,
                lineHeight: "2.2rem",
            }}
        >
            <span style={{ fontWeight: "bold" }}>{item.title}</span>
            {item.description}
        </Typography>
    </Box>
)

export const Methodology: React.FC<MethodologyProps> = ({}) => {
    const how_works: ItemData[] = [
        {
            icon: "map",
            title: "Entendemos o presente (AS IS): ",
            description: "Mapeamos cada detalhe da sua operação atual, identificando gargalos, ineficiências e oportunidades de melhoria.",
        },
        {
            icon: "edit",
            title: "Desenhamos o futuro (TO BE): ",
            description: "Criamos processos claros, funcionais e alinhados aos objetivos estratégicos da sua empresa.",
        },
        {
            icon: "stats",
            title: "Mão na massa: ",
            description: "Aplicamos melhorias com plano de ação personalizado, testes, treinamentos e ajustes em tempo real.",
        },
        {
            icon: "recycle",
            title: "Homologamos e acompanhamos: ",
            description: "Validamos os resultados e garantimos a continuidade com documentação detalhada e suporte completo.",
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
        <Box id="methodology" sx={{ padding: "10vw", flexDirection: "column", gap: "2vw", position: "relative" }}>
            <Typography
                sx={{
                    color: colors.dark_pink,
                    fontWeight: "bold",
                    fontFamily: "Yaldevi",
                    fontSize: "2.7rem",
                    lineHeight: "2.7rem",
                }}
            >
                Nosso Método & Entregáveis
            </Typography>
            <Typography variant="h6">
                Uma metodologia <span style={{ color: colors.dark_pink }}>exclusiva</span> para resultados sustentáveis
            </Typography>
            <Typography variant="body2" sx={{ color: colors.blue, fontSize: "2rem" }}>
                Nosso método é baseado em <span style={{ fontWeight: "bold" }}>transformar desafios</span> operacionais em{" "}
                <span style={{ fontWeight: "bold" }}>vantagens competitivas</span>. Com uma abordagem prática e descomplicada, trabalhamos desde o{" "}
                <span style={{ fontWeight: "bold" }}>diagnóstico</span> até a <span style={{ fontWeight: "bold" }}>implementação</span> e
                acompanhamento do novo modelo, garantindo resultados reais e duradouros.
            </Typography>
            <Box sx={{ paddingTop: "3vw" }}>
                <Box sx={{ flexDirection: "column", flex: 0.4, position: "relative" }}>
                    <img src="/methodology1.png" style={{ width: "12vw", height: "auto" }} />

                    <Box
                        sx={{
                            position: "absolute",
                            bottom: "-2vw",
                            left: "-10vw",
                            bgcolor: colors.dark_pink,
                            padding: "5vw",
                            paddingLeft: "8vw",
                            borderTopRightRadius: "2vw",
                            borderBottomRightRadius: "2vw",
                        }}
                    >
                        <Typography variant="h2" sx={{ fontSize: "5rem", color: colors.grey, lineHeight: "5rem" }}>
                            Como <span style={{ color: colors.light_pink }}>funciona</span> o nosso processo?
                        </Typography>
                    </Box>

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
                </Box>

                <Box
                    sx={{
                        flex: 1,
                        borderRadius: "2vw",
                        bgcolor: colors.blue,
                        padding: "5vw",
                        marginRight: "-10vw",
                        paddingLeft: "10vw",
                        flexDirection: "column",
                        gap: "4vw",
                    }}
                >
                    {how_works.map((item) => (
                        <Item key={item.icon} item={item} />
                    ))}
                </Box>
            </Box>

            <Box
                sx={{
                    flexDirection: "column",
                    border: `3px solid ${colors.blue}`,
                    borderTopWidth: 0,
                    borderBottomWidth: 0,
                    padding: "5vw",
                    paddingTop: "10vw",
                    margin: "-5vw",
                    gap: "5vw",
                }}
            >
                <Typography variant="h2" sx={{ fontSize: "8.5rem", color: colors.blue }}>
                    O que entregamos?
                </Typography>

                <Box sx={{}}>
                    <Box
                        sx={{
                            flexDirection: "column",
                            gap: "4vw",
                            flex: 1,
                        }}
                    >
                        {results.map((item) => (
                            <Item key={item.icon} item={item} alt />
                        ))}
                    </Box>

                    <img src="/methodology2.png" style={{ width: "50vw", height: "auto", margin: "-7vw", marginRight: "-11vw" }} />
                </Box>
            </Box>
        </Box>
    )
}
