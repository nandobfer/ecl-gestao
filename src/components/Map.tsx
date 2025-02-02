import React from "react"

interface MapProps {}

export const Map: React.FC<MapProps> = ({}) => {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3637485805743!2d-46.6847374247874!3d-23.591284162691924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57450581cdb1%3A0xf327d87d58a240fd!2sAv.%20Pres.%20Juscelino%20Kubitschek%2C%201327%20-%20Vila%20Nova%20Concei%C3%A7%C3%A3o%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004543-011!5e0!3m2!1spt-BR!2sbr!4v1738522248848!5m2!1spt-BR!2sbr"
            style={{ border: "0;", flex: 1, marginLeft: "5vw", borderRadius: "1vw" }}
            loading="lazy"
        />
    )
}
