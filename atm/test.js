import test from 'ava';
import ATM from "./atm.js";

test('withdraw 434', t => {
    const atm = new ATM();
    const output = atm.withdraw(434);
    t.deepEqual(output, [
        { value: 200, type: 'bill', count: 2 },
        { value:  20, type: 'bill', count: 1 },
        { value:  10, type: 'bill', count: 1 },
        { value:   2, type: 'coin', count: 2 },
    ]);
});

test('withdraw 1725', t => {
    const atm = new ATM();
    const output = atm.withdraw(1725);
    t.deepEqual(output, [
        { value: 500, type: 'bill', count: 2 },
        { value: 200, type: 'bill', count: 3 },
        { value: 100, type: 'bill', count: 1 },
        { value:  20, type: 'bill', count: 1 },
        { value:   5, type: 'bill', count: 1 },
    ]);
    t.deepEqual(atm.content, [
        { value: 500, type: 'bill', count:    0 },
        { value: 200, type: 'bill', count:    0 },
        { value: 100, type: 'bill', count:    4 },
        { value:  50, type: 'bill', count:   12 },
        { value:  20, type: 'bill', count:   19 },
        { value:  10, type: 'bill', count:   50 },
        { value:   5, type: 'bill', count:   99 },
        { value:   2, type: 'coin', count:  250 },
        { value:   1, type: 'coin', count:  500 },
    ]);
});

test('withdraw 1725 then 1825', t => {
    const atm = new ATM();
    atm.withdraw(1725);
    const output = atm.withdraw(1825);
    t.deepEqual(output, [
        { value: 100, type: 'bill', count:  4 },
        { value:  50, type: 'bill', count: 12 },
        { value:  20, type: 'bill', count: 19 },
        { value:  10, type: 'bill', count: 44 },
        { value:   5, type: 'bill', count: 1 },
    ]);
    t.deepEqual(atm.content, [
        { value: 500, type: 'bill', count:    0 },
        { value: 200, type: 'bill', count:    0 },
        { value: 100, type: 'bill', count:    0 },
        { value:  50, type: 'bill', count:    0 },
        { value:  20, type: 'bill', count:    0 },
        { value:  10, type: 'bill', count:    6 },
        { value:   5, type: 'bill', count:   98 },
        { value:   2, type: 'coin', count:  250 },
        { value:   1, type: 'coin', count:  500 },
    ]);
});

test('withdrawing too much errors', t => {
    const atm = new ATM()
    t.throws(() => atm.withdraw(99999));
});

test('findBestItemForQuantity(434) == 200', t => {
    const atm = new ATM()
    t.deepEqual(atm.findBestItemForQuantity(434), { value: 200, type: 'bill', count: 3 });
});

test('findBestItemForQuantity(34) == 20', t => {
    const atm = new ATM()
    t.deepEqual(atm.findBestItemForQuantity(34), { value: 20, type: 'bill', count: 20 });
});

test('findBestItemForQuantity(0) == null', t => {
    const atm = new ATM()
    t.is(atm.findBestItemForQuantity(0), null);
});
