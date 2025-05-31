{

const logString = (params: unknown) =>{
    if(typeof params === "string"){
        return params;
    }
    throw new Error("Input is not a string");
    
}
const result = logString(90);
console.log(result);




}