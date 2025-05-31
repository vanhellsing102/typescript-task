{
class Car {
    brand: string;
    model: string;
    year: number;
    constructor(brand: string, model: string, year: number){
        this.brand = brand,
        this.model = model,
        this.year = year
    }
    displayModel(){
        console.log(`Your car model is: ${this.year} ${this.model} ${this.brand}`);
    }
}
const car1 = new Car("toyato", "corolla", 2022);
car1.displayModel();




}