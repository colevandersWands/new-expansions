# 1 === "1" || 1 == "1";

In this expansion I am focusing on implicit type conversions and deep vs. shallow comparisons.

Turns out that it will be true if _a == b_ is true.  _a === b_ will never be true when _a == b_ is not.
 
### The Steps:
0. [Component Analysis](#component-analysis)
1. [Operator Precedence](#operator-precedence)
2. [Step-Through](#step-through)
3. [Trace Table](#trace-table)
4. [Trace Block](#trace-block)
5. [Encapsulated](#encapsulated)
6. [Trace-able](#trace-able)
7. [Test Cases](#test-cases)
 

---
---

##  Component Analysis

_Operators:_
* ===
* ||
* ==

_Primitives:_
* String
* Number


## Helpful links

* [live exercises](https://colevanderswands.github.io/new-expansions/)  

* [a repl.it](https://repl.it/@lindsay_strasser/Strictly-or-Loosely)
* [operator precedence, js.info](http://javascript.info/operators#operators-precedence)
* [comparisons, js.info](http://javascript.info/comparison)
* [type conversions, js.info](http://javascript.info/type-conversions)


---

## Operator Precedence

[inspect it](https://colevanderswands.github.io/new-expansions/)

__concrete:__
```js
1 === "1" || 1 == "1";

( false ) || 1 == "1";

( false ) || ( true );

(        true       );
```

__abstract:__
```js
const a;
const b;

 a === b  ||  a == b ;

 step_1  ||  a == b ;

 step_1  ||  step_2 ;

       step_3       ;
```


---

## Step-Through

[parsons practice](https://colevanderswands.github.io/new-expansions/)

__concrete:__
```js
// (num, 1), (str, "1") -> (bool, true)
1 === "1" || 1 == "1";
  // (num, 1), (str, "1")
  1 === "1";
  // (num, 1), (str, "1")
  1 == "1"
  // (bool, false), (bool, true)
  false || true;
  // (bool, true)
```

__abstract:__
```js
const a = 1;
const b = "1";

// a, b -> bool
1 === "1" || 1 == "1";
  // a, b
  1 === "1"; // step 1
  // a, b
  1 == "1" // step 2
  // step 1, step 2
  step_1 || step_2;
  // (bool,    )
```



---

## Trace Table

[live quiz table](https://colevanderswands.github.io/new-expansions/)

_concrete_:

| step | state  | operation |
|---|---|---|
| 0 | (num, 1), (str, "1") | |
| | | 1 === "1" |
| 1 | (bool, true) | |
| | | 1 == "1" |
| 2 | (bool, false) | |
| | | true \|\| false |
| 3 | true | | 

_abstract_:

| step | state  | operation |
|---|---|---|
| 0 | a, b | |
| | | a === b |
| 1 | step_1 | |
| | | a == b |
| 2 | step_2 |  |
| | | step_1 \|\| step_2 |
| 3 | final_state | | 



--- 

## Trace Block

[pytut](https://goo.gl/rK3p5R)  
[inspect it](https://colevanderswands.github.io/new-expansions/)

```js
const a = 1;
const b = "1";
const expected = true;

let actual;
{ // 1 === "1" || 1 == "1";
  const step_1 = a === b;
  const step_2 = a == b;
  const step_3 = step_1 || step_2;
  actual = state_3;
};

console.assert(actual === expected, 'nope');
```


---

## Encapuslated

[pytut](https://goo.gl/nZbAQb)
[inspect it](https://colevanderswands.github.io/new-expansions/)

```js
const a = 1;
const b = "1";
const expected = true;

const actual = call_expression(a, b);

function call_expression(a, b) {
  let result;
  const step_1 = a === b;
  const step_2 = a == b;
  const step_3 = step_1 || step_2;
  result = step_3;
  return result;
};
```


---

## Trace-able

[putut](https://goo.gl/i2948Y)
[inspect it](https://colevanderswands.github.io/new-expansions/)


```js
const a = 1;
const b = "1";
const expected = true;
const actual = expression_tracer(a, b);

assert(expected, actual, expression_tracer(a, b, true));

function expression_tracer(a, b, trace) {
  let result;
  if (trace) {
    result = {};
    result.args = {a, b};
  };

  const step_1 = a === b;
  if (trace) {
    result.step_1 = step_1;
  };

  const step_2 = a == b;
  if (trace) {
    result.step_2 = step_2;
  };

  const step_3 = step_1 || step_2;
  if (trace) {
    result.result = step_3;
  } else {
    result = step_3; 
  };

  return result;
};
```

---

## Test Cases

[inspect it](https://colevanderswands.github.io/new-expansions/)

```js

let test_cases = [
  {args: [1, "1"], expected: true},
  {args: [2, "1"], expected: false},
  {args: [0, "0"], expected: true},
  {args: [false, ""], expected: true},
  {args: [undefined, null], expected: true},
  {args: [0, null], expected: false},
  {args: ["", undefined], expected: false},
  {args: [NaN, NaN], expected: false},
  {args: [undefined, null], expected: true}
];

for (let case of test_cases) {
  console.assert(
    expression_tracer(...case.args) === case.expected, 
    expression_tracer(...case.args, true),
    {cond.expected});
};

```

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>




