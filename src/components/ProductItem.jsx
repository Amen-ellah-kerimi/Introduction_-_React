function ProductItem(props) {
    const {nom , prix , imageUrl} = props.produit;

    return (


        <div class="bg-black text-white">
            <h1>{nom}</h1>
            <p>{prix}</p>
            <img src={imageUrl}/>
        </div>
    );

}
export default ProductItem;