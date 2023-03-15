import {Componente} from "./componente"

type Props = Parameters<typeof Componente>[0]

type Resultado = Awaited<ReturnType<
    NonNullable<Props["onSubmit"]>
>>

const resultado: Resultado = {
    index: "1"
}