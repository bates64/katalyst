import test from 'ava';
import ATM from "./atm.js";

test('example', t => {
    const atm = new ATM();
    const output = atm.withdraw(434);
    t.is(output, `2 bills of 200.
1 bill of 20.
1 bill of 10.
2 coins of 2.
`);
});

test('findBestItemForQuantity(434) == 200', t => {
    const atm = new ATM()
    t.deepEqual(atm.findBestItemForQuantity(434), { value: 200, type: 'bill' });
});

test('findBestItemForQuantity(34) == 20', t => {
    const atm = new ATM()
    t.deepEqual(atm.findBestItemForQuantity(34), { value: 20, type: 'bill' });
});

test('findBestItemForQuantity(0) == null', t => {
    const atm = new ATM()
    t.is(atm.findBestItemForQuantity(0), null);
});
