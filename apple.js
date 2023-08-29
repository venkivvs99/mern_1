const products = [
    { brand: "Apple", price: 75000 },
    { brand: "Samsung", price: 80000 },
    { brand: "Sony", price: 45000 },
    { brand: "Apple", price: 60000 },
    { brand: "Samsung", price: 90000 }
];

function filterDataByBrand(data, brandName) {
    return data.filter(item => item.brand === brandName);
}

function filterDataByPrice(data, minPrice) {
    return data.filter(item => item.price > minPrice);
}

function filterDataByBrandAndPrice(data, brandName1, brandName2, minPrice) {
    return data.filter(item => (item.brand === brandName1 || item.brand === brandName2) && item.price > minPrice);
}

const appleProducts = filterDataByBrand(products, "Apple");
console.log("Apple Products:", appleProducts);

const expensiveProducts = filterDataByPrice(products, 50000);
console.log("Expensive Products:", expensiveProducts);

const highEndProducts = filterDataByBrandAndPrice(products, "Apple", "Samsung", 70000);
console.log("High-End Apple and Samsung Products:", highEndProducts);
