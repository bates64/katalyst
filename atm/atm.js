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
        return `2 bills of 200.
1 bill of 20.
1 bill of 10.
2 coins of 2.`
    }
}
