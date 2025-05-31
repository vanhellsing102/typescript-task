{

const numbers: number[] = [2, 3, 6, 7, 9, 8, 6];
const filterEvenNumber = (numbers: number[]) =>{
    return numbers.filter((number: number) => number % 2 == 0)
}
console.log(filterEvenNumber(numbers));



}