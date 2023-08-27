function x(a:string, 
           b:number = -1){
    return(a + b);
}
let z = x("b is ",42); //works fine
// let z = x("b is"); // won't compile 
basic.showString(z);