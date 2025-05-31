{

const logString = (params: unknown): unknown =>{
    if(typeof params === "string"){
        return params;
    }
    throw new Error("Input is not a string");
    
}
const result = logString("adfadfd") as string;
console.log(result);




}