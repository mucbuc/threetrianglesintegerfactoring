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
        assert(a >= 0);
        assert(b >= 1);

        return triangle(a) + triangle(a + b) - triangle(b - 1);
    }

    assert(semiprime > 0);

    let a = Math.floor(Math.sqrt(semiprime)) - 1;
    let b = 1;
    while (true) {
        let s = sum(a, b);
        if (s > semiprime) {
            ++b;
            --a;
            continue;
        }

        if (s < semiprime) {
            let diff = semiprime - s;
            let d = Math.max(1, Math.ceil(diff / (a + 1)));
            b += d;
            continue;
        }

        if (s == semiprime) {
            return [ a + 1, a + b ];
        }
    }

    return [ 1, semiprime ];
}
