import { useVisibleCallback } from "burgos-use-visible-callback"
import { useState } from "react"

export const useInView = () => {
    const [inView, setInView] = useState(false)
    const ref = useVisibleCallback(() => setInView(true), {})

    return { ref, inView }
}
