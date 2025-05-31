{
  const numbers: number[] = [1, 3, 5, 8, 9, 4, 6, 3];
  // const findLargestNumber = (numbers: number[]) =>{
  //     let largestNumber: number = numbers[0];
  //     for(let i = 0; i < numbers.length; i++){
  //         if(largestNumber < numbers[i]){
  //             largestNumber = numbers[i];
  //         }
  //     }
  //     return largestNumber;
  // }
  // console.log(findLargestNumber(numbers))

  // sort technic--------------------------
  const bigNumber = Math.max(...numbers);
  console.log(bigNumber);
}
