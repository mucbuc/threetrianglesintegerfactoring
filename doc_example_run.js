#!/usr/bin/env node

let [, , semiprime, html] = process.argv;
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
        if (html) {
            console.log(`<li> S(${a}, ${b}) = ${s}`);
        } 
        else {
            console.log(`${index}. S(${a}, ${b}) = ${s}  `);
        }

        if (s > semiprime) {
            if (html) {
                console.log(`<b>=></b> a = a - 2, b = b + 2</li>`);
            }
            else {
                console.log(`  => a = a - 2, b = b + 2`);
            }

            a -= 2;
            b += 2;
            continue;
        }

        if (s < semiprime) {
            if (html) {
                console.log(`  <b>=></b> b = b + max(1, ceil(${semiprime - s} / ${a + 1}))</li>`);
            }
            else {
                console.log(`  => b = b + max(1, ceil(${semiprime - s} / ${a + 1}))  `);
            }

            let d = Math.max(1, Math.ceil((semiprime - s) / (a + 1)));
            b += d;
            continue;
        }

        if (s == semiprime) {
            if (html) {
                console.log(`  <b>=></b> ${semiprime} = ${a + 1} * ${a + b}</li>`);
            }
            else {
                console.log(`  => ${semiprime} = ${a + 1} * ${a + b}  `);
            }

            return [ a + 1, a + b ];
        }
    }

    if (html) {
        console.log(`<li> a = ${a}, b = ${b}`);
        console.log(`  <b>=></b> ${semiprime} = 1 * ${semiprime}</li>`);
    }
    else {
        console.log(`${index + 1}. a = ${a}, b = ${b}  `);
        console.log(`  => ${semiprime} = 1 * ${semiprime}`);
    }
    

    return [ 1, semiprime ];
}
