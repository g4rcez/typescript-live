import {Fragment} from "react"

type Props = {
    text: string
    onSubmit?: () => Promise<{ index: number }>
}

export const Componente = (props: Props) => {
    return <Fragment/>
}