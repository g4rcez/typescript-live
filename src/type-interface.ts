// Utility types
type CaixaAlta<T extends string> = Uppercase<T>

type BOOM = CaixaAlta<"boom">

// interfaces
interface Contrato {
    assinar: (nome: string) => void
    recusar: (nome: string) => void
}

// exemplo de declaration merge
interface FormData {
    ok: string;
}

const formData = new FormData();
formData.get
formData.ok

// implementando uma interface
class Cartorio implements Contrato {
    assinar(nome: string): void {
    }

    recusar(nome: string): void {
    }
}