// const repeatString = (params1: string, params2: number) =>{
//     let repeatText = "";
//     for(let i = 0; i <= params2 - 1; i++){
//         repeatText += params1;
//     }
//     return repeatText;
// }
// console.log(repeatString("murad", 5));


function repeatString(text: string, times: number): any{
    console.log(text.repeat(times));
}
repeatString("repeat", 3);