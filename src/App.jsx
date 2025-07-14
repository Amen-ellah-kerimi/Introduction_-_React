import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import { ALL_PRODUCTS } from "./data/products.js";
import { useState } from "react";
import { CATEGORY, TYPE } from "./utils/enums.js";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("ALL");
  const [search, setSearch] = useState("");

  const filteredProducts = ALL_PRODUCTS.filter(product => {
    const matchCategory = !selectedCategory || selectedCategory === "ALL" || product.category === selectedCategory;
    const matchType = !selectedType || selectedType === "ALL" || product.type === selectedType;
    const matchStatus =
      !selectedStatus || selectedStatus === "ALL" ||
      (selectedStatus === "NEW" && product.isNew) ||
      (selectedStatus === "SALE" && product.isSale);
    const matchBrand = selectedBrand === "ALL" || (product.brand && product.brand === selectedBrand);
    const matchSearch =
      search.trim() === "" ||
      product.name.toLowerCase().includes(search.trim().toLowerCase());
    return matchCategory && matchType && matchStatus && matchBrand && matchSearch;
  });

  return (
    <>
      <Header
        selectedCategory={selectedCategory}
        selectedType={selectedType}
        selectedStatus={selectedStatus}
        selectedBrand={selectedBrand}
        onSelectCategory={setSelectedCategory}
        onSelectType={setSelectedType}
        onSelectStatus={setSelectedStatus}
        onSelectBrand={setSelectedBrand}
        search={search}
        onSearchChange={setSearch}
      />
      <div className="container mx-auto px-4 py-4">
        <ProductGrid products={filteredProducts} />
      </div>
      <Footer />
    </>
  );
}

export default App;
