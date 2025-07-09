import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ProductItem from "./components/ProductItem.jsx";

function App() {
    const produit= {
        nom: "Pc Portable Gamer HP Victus 15-fa1007nk",
        prix: 25.99,

        imageUrl: "https://via.placeholder.com/150/0000FF/FFFFFF?text=T-Shirt"
    }
    return(
        <>
            <Header/>
            <ProductItem produit={produit}/>
            <Footer/>
        </>
    );
}
export default App
