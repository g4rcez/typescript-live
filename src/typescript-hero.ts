import type {N, F, L} from "ts-toolbelt";

const sum = <A extends number, B extends number>(a: A, b: B): N.Add<A, B> => (a + b) as N.Add<A, B>
const tres = sum(1, 2)
if (tres === 1) {
}

type Recursivo<
    T extends readonly number[],
    Fator extends number,
    Acc extends number[] = [],
    Contador extends number = 0
> =
    T["length"] extends Contador ? Acc
        : Recursivo<T, Fator, [...Acc, N.Add<T[Contador], Fator>], N.Add<Contador, 1>>

const recursivo = <T extends readonly number[], Fator extends number>(array: F.Narrow<T>, fator: Fator):
    Recursivo<T, Fator> => [] as never

const lista = recursivo([1, 2, 3], 5)
