function ShoppingCart({title,price,Add}) {

const clicked = () => {
    Add(price)
}

return(
    <div>
        <h1>{title}</h1>
        <p>{price}euro</p>
        <button onClick={clicked}>Add</button>
    </div>
)
}

export default ShoppingCart;
