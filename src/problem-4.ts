{

const reverseArray = <T>(params: T[]): T[] =>{
    // return [...params].reverse();
    return params.reverse();
}
type GenericArray<T> = Array<T>;
const oldArray: GenericArray<number> = [3, 4, 5, 6, 9];
console.log(reverseArray(oldArray));


}