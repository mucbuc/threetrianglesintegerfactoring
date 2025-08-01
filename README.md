<h1> Three Triangles Integer Factorization Algorithm </h1>

<blockquote>
    <p>"Discovery consists of seeing what everybody has seen and thinking what nobody has thought."</p>
    <footer>— Albert Szent-Györgyi</footer>
</blockquote>

<h2>Abstract:</h2>
Factor the natural number <em>C=(a+1)(a+b)</em> by finding the solution to <em>C=T(a)+T(a+b)-T(b-1)</em> where <em>T(n)</em> is the nth triangular number.

<h2>Definitions:</h2>
   <ul>
      <li>T(n)</b> := n(n+1)/2</li>
      <li>S(a, b)</b> := T(a)+T(a+b)-T(b-1)</li>
   </ul>

<h2>Theorem:</h2>
For every natural number <em>C=(a+1)(a+b)</em> there exist three triangular numbers such that <em>C=T(a)+T(a+b)-T(b-1)</em>.

<h2>Proof:</h2>
<ol>
<li><em>(a+1)(a+b)=T(a)+T(a+b)-T(b-1)</em></li>
<li><em>a<sup>2</sup>+ab+a+b=a(a+1)/2+(a+b)(a+b+1)/2-(b-1)b/2</em></li>
<li><em>2a<sup>2</sup>+2ab+2a+2b=a(a+1)+(a+b)(a+b+1)-(b-1)b</em></li>
<li><em>2a<sup>2</sup>+2ab+2a+2b=a<sup>2</sup>+a+a(a+b+1)+b(a+b+1)-b<sup>2</sup>+b</em></li>
<li><em>2a<sup>2</sup>+2ab+2a+2b=a<sup>2</sup>+a+a<sup>2</sup>+ab+a+ba+b<sup>2</sup>+b-b<sup>2</sup>+b</em></li>
<li><em>2a<sup>2</sup>+2ab+2a+2b=2a<sup>2</sup>+2ab+2a+2b</em></li>
<li><em>0=0</em></li>
</ol>

<h2>Theorem:</h2>
For all natural numbers <em>a, b</em> it holds that <em>S(a, b) > S(a-1, b+1)</em>.

<h2>Proof:</h2>
<ol>
<li><em>S(a, b) > S(a-1, b+1)</em></li>
<li><em>(a+1)(a+b) > (a+1-1)(a-1+b+1)</em></li>
<li><em>a(a+b)+a+b > a(a+b)</em></li>
<li><em>a+b > 0</em></li>
</ol>

<h2>Theorem:</h2>
For all natural numbers <em>a, b</em> it holds that <em>S(a, b) < S(a, b+max(1, ceil((C-S(a, b))/(a+1))))</em>.

<h2>Proof:</h2>
<ol>
<li><em>S(a, b) < S(a, b+max(1, ceil((C-S(a, b))/(a+1))))</em></li>
<li><em>(a+1)(a+b) < (a+1)(a+b+max(1, ceil((C-S(a, b))/(a+1))))</em></li>
<li><em>a+b < a+b+max(1, ceil((C-S(a, b))/(a+1)))</em></li>
<li><em>0 < max(1, ceil((C - S(a, b))/(a+1)))</em></li>
<li><em>0 < 1</em></li>
</ol>

<h2>Algorithm:</h2>
   <em>input:</em> natural number C 
   <br>
   <em>output:</em> found factors
   <ol>
      <li> let a = floor( sqrt( C ) ) - 1</li>
      <li> let b = 1</li>
      <li> if <em>S(a, b) > C</em> then <em>a=a-1, b=b+1</em></li>
      <li> else if <em>S(a, b) < C</em> then <em>b=b+max(1, ceil((C-S(a, b))/(a+1)))</em></li>
      <li> else if <em>S(a, b) = C</em> then exit: found factors <em>(a+1)</em> and <em>(a+b)</em>
      <li> go to step 3</li>
   </ol>
<h2> Examples </h2>
<h3>51</h3>
<ol> 
<li>S(6, 1) = 49
 => b = b + max(1, ceil(2/7))</li>
<li>S(6, 2) = 56
 => a = a - 1, b = b + 1</li>
<li>S(5, 3) = 48
 => b = b + max(1, ceil(3/6))</li>
<li>S(5, 4) = 54
 => a = a - 1, b = b + 1</li>
<li>S(4, 5) = 45
 => b = b + max(1, ceil(6/5))</li>
<li>S(4, 7) = 55
 => a = a - 1, b = b + 1</li>
<li>S(3, 8) = 44
 => b = b + max(1, ceil(7/4))</li>
<li>S(3, 10) = 52
 => a = a - 1, b = b + 1</li>
<li>S(2, 11) = 39
 => b = b + max(1, ceil(12/3))</li>
<li>S(2, 15) = 51
 => 51 = 3 * 17</li>
</ol>

<h3>23</h3>
<ol>
<li>S(3, 1) = 16
 => b = b + max(1, ceil(7/4))</li>
<li>S(3, 3) = 24
 => a = a - 1, b = b + 1</li>
<li>S(2, 4) = 18
 => b = b + max(1, ceil(5/3))</li>
<li>S(2, 6) = 24
 => a = a - 1, b = b + 1</li>
<li>S(1, 7) = 16
 => b = b + max(1, ceil(7/2))</li>
<li>S(1, 11) = 24
 => a = a - 1, b = b + 1</li>
<li>S(0, 12) = 12
 => b = b + max(1, ceil(11/1))</li>
<li>S(0, 23) = 23
 => 23 = 1 * 23</li>
</ol>

<h3>221</h3>
<ol>
<li>S(13, 1) = 196
 => b = b + max(1, ceil(25/14))</li>
<li>S(13, 3) = 224
 => a = a - 1, b = b + 1</li>
<li>S(12, 4) = 208
 => b = b + max(1, ceil(13/13))</li>
<li>S(12, 5) = 221
 => 221 = 13 * 17</li>
</ol>

<h3>36</h3>
<ol>
<li>S(5, 1) = 36
 => 36 = 6 * 6</li>
</ol>

<h2>Conclusion</h2>
To my knowledge this is not based on any existing solutions. I do not claim it to be efficient or useful, only correct and complete. Some optimizations have been omitted for simplicity. I hope it inspires more discovery.   
