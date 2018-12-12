// let zrobione = true
// let liczba: number = 123

// enum Systemy {Windows, Linux, MacOS}
// let mojSystem: Systemy = Systemy.MacOS
// console.log(mojSystem)

type psikus = number | 'psikus'
function foo(p1: string, p2: number = 2, p3?:boolean ): psikus {
    if (p2 !== 2){
        return 'psikus'
    }
    return 1
}

console.log(foo('coś', 3, true))

interface NaszTyp {
    name: string
    age: number
    additional?: string
}

interface Animal {
    name: string
    age: number
    numberOfPaws: number
}

type Hybrid = NaszTyp & Animal

function wypiszWartosc(param: Hybrid): void {
    console.log(param.name)
    console.log(param.age)
    console.log(param.additional)
}

let testowyObiekt = {name: 'testowy', age: 1, imie: 'Ala', nazwisko: 'Kowalska', additional: 'coś', numberOfPaws: 0}
wypiszWartosc(testowyObiekt)