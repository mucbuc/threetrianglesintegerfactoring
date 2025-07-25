# Three triangles integer factoring algorithm

## Overview

Factor the composite number C = (a + 1) * (a + b) by finding the solution to C = T(a) + T(a + b) - T(b - 1) where
T(n) generates the nth triangular number.

## Initialization
1. a = floor( sqrt( C ) ) - 1
2. if a is odd a = a - 1
2. b = 1

## Iteration
S(a, b) = T(a) + T(a + b) - T(b - 1)

### Decrease sum if S(a, b) > C
1. a = a - 2
2. b = b + 2

### Increase sum if S(a, b) < C
1. b = b + max(1, ceil(C - S(a, b)) / (a + 1))

## Exit
1. if C = S(a, b) => C = (a + 1) * (a + b)
2. if a == 2 => C is a prime number

## Example

### 51 
1. a = 6, b = 1: S(6, 1) = 49  
  => b = b + max(1, ceil(2 / 7))  
2. a = 6, b = 2: S(6, 2) = 56  
  => a = a - 2, b = b + 2
3. a = 4, b = 4: S(4, 4) = 40  
  => b = b + max(1, ceil(11 / 5))  
4. a = 4, b = 7: S(4, 7) = 55  
  => a = a - 2, b = b + 2
5. a = 2, b = 9: S(2, 9) = 33  
  => b = b + max(1, ceil(18 / 3))  
6. a = 2, b = 15: S(2, 15) = 51  
  => 51 = 3 * 17

### 23
1. a = 2, b = 1: S(2, 1) = 9  
  => b = b + max(1, ceil(14 / 3))  
2. a = 2, b = 6: S(2, 6) = 24  
  => a = a - 2, b = b + 2
3. a = 0, b = 8  
  => 23 = 1 * 23
