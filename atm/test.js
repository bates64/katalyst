import test from 'ava';
import ATM from "./atm.js";

test('1+1=2', t => {
    t.is(1 + 1, 2);
});

test('example', t => {
    const atm = new ATM();
    const output = atm.withdraw(434);
    t.is(output, `2 bills of 200.
1 bills of 20.
1 bill of 10.
2 coins of 2.`);
});
