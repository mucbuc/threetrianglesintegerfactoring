#!/usr/bin/env node

let [, , semiprime] = process.argv;
let assert = require('assert');

if (semiprime) {
    console.log(factor(Number(semiprime)));
}

function factor(semiprime)
{
    function triangle(n)
    {
        assert(n >= 0);

        return n * (n + 1) / 2;
    }

    function sum(a, b)
    {
        assert(a > 1);
        assert(b >= 1);

        return triangle(a) + triangle(a + b) - triangle(b - 1);
    }

    assert(semiprime > 0);

    if (semiprime % 2 == 0) {
        return [ semiprime / 2, 2 ];
    }

    let a = ((Math.floor(Math.sqrt(semiprime)) - 1) & ~1);
    let b = 1;
    let index = 0;
    while (a > 1) {

        let s = sum(a, b);
        ++index;
        console.log( `${index}. a = ${a}, b = ${b}: S(${a}, ${b}) = ${s}  `);

        if (s > semiprime) {
            console.log(`  => a = a - 2, b = b + 2`);

            a -= 2;
            b += 2;
            continue;
        }

        if (s < semiprime) {
            console.log(`  => b = b + max(1, ceil(${semiprime - s} / ${a + 1}))  `);

            let d = Math.max(1, Math.ceil((semiprime - s) / (a + 1)));
            b += d;
            continue;
        }

        if (s == semiprime) {
            console.log(`  => ${semiprime} = ${a + 1} * ${a + b}  `);

            return [ a + 1, a + b ];
        }
    }

    console.log( `${index + 1}. a = ${a}, b = ${b}  `);
    console.log(`  => ${semiprime} = 1 * ${semiprime}`);

    return [ 1, semiprime ];
}
