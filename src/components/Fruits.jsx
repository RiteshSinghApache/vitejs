import Fruit from "./Fruit";

export default function Fruits(){
    //Rendering array of objects
    //const fruits = ["Apple","mango"];
    const fruits = [
        {
            name:"Apple",
            price: 10,
            soldout: true
        },
        {
            name:"Mango",
            price: 10,
            soldout: false
        },
    ]
    return (
        <div>
            <ul>
                {fruits.map((fruit) => (
                    //Rendering Components Inside A Loop
                    <Fruit key={fruit.name} name={fruit.name} price={fruit.price} soldout={fruit.soldout} />
                    // <li key={fruit.name}>
                    //     {fruit.name} {fruit.price}
                    // </li>
                ))}
            </ul>
        </div>
    );
}