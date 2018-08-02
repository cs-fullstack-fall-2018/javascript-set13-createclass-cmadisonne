class Product{
    constructor( quantity, name,price){
        this.price = price;
        this.quantity = quantity;
        this.name = name;
    }

    printAllAttribute()
    {
        alert(this.quantity + this.name + this.price );
        return(this.quantity + this.name + this.price );
    }
}

function main()
{
    var product1 = new Product(7,"Incense",15 );
    var product2 = new Product( 1, "Crystal Necklace", 20);
    console.log(product1.printAllAttribute());
    console.log(product2.printAllAttribute());
}

main();