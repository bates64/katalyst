export default class ATM {
    constructor() {
        this.content = [
            { value: 500, type: "bill" },
            { value: 200, type: "bill" },
            { value: 100, type: "bill" },
            { value:  50, type: "bill" },
            { value:  20, type: "bill" },
            { value:  10, type: "bill" },
            { value:   5, type: "bill" },
            { value:   2, type: "coin" },
            { value:   1, type: "coin" },
        ];
    }

    withdraw(quantity) {
        let result = []

        while (quantity > 0) {
            const largestItem = this.findBestItemForQuantity(quantity);
            if (!largestItem) throw new Error("no item for quantity");

            // Subtract and output
            const count = Math.floor(quantity / largestItem.value);
            quantity = quantity % largestItem.value;
            result.push({
                count,
                ...largestItem,
            });
        }

        return result;
    }

    /** Find largest value < quantity */
    findBestItemForQuantity(quantity) {
        for (const item of this.content) {
            //console.log(item.value, "<=", quantity)
            if (item.value <= quantity) {
                return item;
            }
        }
        return null;
    }
}
