
export class termek{
    constructor(public name:string,public price:number,public product:string)
    {
        if(name.trim()=='')
        {
            throw new Error("A szöveg nem lehet üres.");
        }
        else if(price<1 && price>100 || isNaN(price))
        {
            throw new Error("1 és 100 között adja meg az árát.");
        }
        else if(product.trim()=='' && product.length==11)
        {
            throw new Error("A productCode nem lehet üres és 11 karakternek kell lenie.");
        }
    }
}