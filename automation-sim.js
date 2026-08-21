class ShoppingCart {
    async scanItem(id) {
        console.log(`scanning item ${id} `);
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log(`scanning complete for item ${id}`);
    }
}
const items = [101, 102, 103];
const cart = new ShoppingCart();
async function processItems() {
    for (const item of items) {
        await cart.scanItem(item);
    }
}
console.time("Total Time");

processItems().then(() => {
    console.timeEnd("Total Time");
});
