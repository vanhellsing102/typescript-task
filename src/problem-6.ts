{
 
type Book = {
    title: string;
    author: string;
    publishedYear: number;
}
const book1: Book = {
    title: "typescript",
    author: "Anders Hejlsberg",
    publishedYear: 2015
}
const isRecentBook = (book: Book): boolean =>{
    // const recentPublishedYear: number[] = [2025, 2024, 2023, 2022, 2021];
    // if(recentPublishedYear.includes(book.publishedYear)){
    //     return true;
    // }
    // return false;
    const currentYear = new Date().getFullYear();
    return currentYear - book.publishedYear <= 5;
}
const result = isRecentBook(book1);
console.log(result)










}