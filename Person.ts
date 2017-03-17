abstract class Person{
    name: string;
    lastname: string;
    age: number;

    public showname(): void {
        console.log(this.name + ' '+ this.lastname);
    }
}

export class PersonExtended extends Person {
    // private name: string;
    // private lastname: string;
    // private age: number;

    constructor(){
        super();
        this.name = "hector";
        this.lastname = "JJJJ";
        this.age = 29;
    }

    public showname(): void {
        console.log(this.name + ' '+ this.lastname);
        let numbers: number[] = [1,2,3,4]
        let newarray = numbers.map( n => n+1);
        // in goes thru keys... but it's an array. 
        // for in prints keys
        for(let n in numbers){
            console.log("in "+n);
        }
        // of iterates thru, not native to js, BUT PERFORMANT
        // for of prints values
        for(let n of numbers){
            console.log("of "+n);
        }
    }

    
}