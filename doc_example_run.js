#!/usr/bin/env node

let [, , semiprime, html] = process.argv;
let assert = require('assert');

if (semiprime) {
    console.log(factor(Number(semiprime)));
}
else {
    run_tests();
}

function run_tests()
{

    let counter = 1;
    let current_average = 0;

    function add_value(v)
    {
        current_average += (v - current_average) / counter;
        ++counter;
    }

    for (let i = 3; i < 1000000000; ++i) {
        const d = factor(i); 
        assert(d[0] * d[1] == i);
        let ideal = Math.sqrt(i);
        ideal = ideal / Math.log(ideal);
            
        add_value(d[2]/ideal);

        if (!(i % 100000)) {
            console.log(current_average);
        }

        //console.log( `${d[2]/ideal} ${i} = ${d[0]} * ${d[1]} \t${d[3]}`);
    }

    console.log(current_average);
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
        assert(a >= 1);
        assert(b >= 1);

        return triangle(a) + triangle(a + b) - triangle(b - 1);
    }

    assert(semiprime > 0);

    let a = Math.floor(Math.sqrt(semiprime)) & ~1;
    let b = 1;
    let index = 0;
    while (a >= 1) {
        //++index;

        // if (b != 1 && semiprime % b == 0) {
        //     return [ b, semiprime / b, index, 'fifth case' ];
        // }
        // ++index;

        let s = sum(a, b);
        
        console.log( `<li>S(${a}, ${b}) = ${s}` );

        if (s > semiprime) {
            // let diff = s - semiprime;
            // if (diff != 1 && diff % (a + 1) == 0) {
            //     return [ a + 1, semiprime / (a + 1), index, 'first case' ];
            // }

            console.log( ` => a = a - 1, b = b + 1</li>` );

            ++b;
            --a;
            continue;
        }

        if (s < semiprime) {
            let diff = semiprime - s;
            // if (diff != 1 && (a + 1) % diff == 0) {
            //     return [ diff, semiprime / diff, index, 'second case' ];
            // }

            let d = Math.max(1, Math.ceil(diff / (a + 1)));
            
            console.log( ` => b = b + max(1, ceil(${diff}/${a + 1}))</li>` );

            assert(d > 0);
            b += d;
            continue;
        }

        if (s == semiprime) {

            console.log( ` => ${semiprime} = ${a + 1} * ${a + b}</li>` );

            return [ a + 1, a + b, index, 'third case' ];
        }
    }

    console.log( `<li>a = 0 => ${semiprime} = 1 * ${semiprime}</li>` );

    return [ 1, semiprime, index, 'fourth case' ];
}
