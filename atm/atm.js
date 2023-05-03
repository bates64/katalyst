export default class ATM {
    constructor() {
        this.content = [
            { value: 500, type: "bill", count:   2 },
            { value: 200, type: "bill", count:   3 },
            { value: 100, type: "bill", count:   5 },
            { value:  50, type: "bill", count:  12 },
            { value:  20, type: "bill", count:  20 },
            { value:  10, type: "bill", count:  50 },
            { value:   5, type: "bill", count: 100 },
            { value:   2, type: "coin", count: 250 },
            { value:   1, type: "coin", count: 500 },
        ];
    }

    withdraw(quantity) {
        let result = []

        while (quantity > 0) {
            const largestItem = this.findBestItemForQuantity(quantity);
            if (!largestItem)
                throw new Error("The ATM machine has not enough money, please go to the nearest atm machine");

            // Calculate how many units we need
            let count = Math.floor(quantity / largestItem.value);

            // Limit count to however many units we have
            if (count > largestItem.count) count = largestItem.count;

            // Update
            largestItem.count -= count; 
            quantity -= largestItem.value * count;
            result.push({
                ...largestItem,
                count,
            });
        }

        return result;
    }

    /** Find largest value < quantity */
    findBestItemForQuantity(quantity) {
        for (const item of this.content) {
            if (item.value <= quantity && item.count > 0) {
                return item;
            }
        }
        return null;
    }
}
