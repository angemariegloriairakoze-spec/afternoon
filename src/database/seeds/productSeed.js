import Product from "../models/products.js";

export const seedProducts = async () => {
    const products = [
        {
            productName: "pants",
            productPrice: 999.99,
            productSize: "large",
            type: "trousers",
            description: "Comfortable and stylish pants for everyday wear.",
            IMAGE: "pants.jpg",
            status: "available"
        },
        {
            productName: "t-shirt",
            productPrice: 29.99,
            productSize: "medium",
            type: "clothing",
            description: "Comfortable and stylish t-shirt for everyday wear.",
            IMAGE: "tshirt.jpg",
            status: "available"
        },
        {
            productName: "boxer",
            productPrice: 79.99,
            productSize: "small",
            type: "clothing",
            description: "Comfortable and stylish boxer shorts for everyday wear.",
            IMAGE: "boxer.jpg",
            status: "available"
        },
        {
            productName: "jumper",
            productPrice: 299.99,
            productSize: "large",
            type: "clothing",
            description: "Warm and comfortable jumper for cold weather.",
            IMAGE: "jumper.jpg",
            status: "available"
        },
    ];
    await Product.bulkCreate(products, { ignoreDuplicates: true });
    console.log("products seeded successfully");
};