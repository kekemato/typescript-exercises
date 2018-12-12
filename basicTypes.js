// let zrobione = true
// let liczba: number = 123
function foo(p1, p2, p3) {
    if (p2 === void 0) { p2 = 2; }
    if (p2 !== 2) {
        return 'psikus';
    }
    return 1;
}
console.log(foo('coś', 3, true));
function wypiszWartosc(param) {
    console.log(param.name);
    console.log(param.age);
    console.log(param.additional);
}
var testowyObiekt = { name: 'testowy', age: 1, imie: 'Ala', nazwisko: 'Kowalska', additional: 'coś', numberOfPaws: 0 };
wypiszWartosc(testowyObiekt);
//# sourceMappingURL=basicTypes.js.map