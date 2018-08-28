# 1 === "1" || 1 == "1";

In this expansion I am focusing on implicit type conversions and deep vs. shallow comparisons
 
### The Steps:
0. [Component Analysis](#component-analysis)
1. [Operator Precedence](#operator-precedence)
2. [Step-Through](#step-through)
3. [Trace Table](#trace-table)
4. [Trace Block](#trace-block)
5. [Encapsulated](#encapsulated)
6. [Trace-able](#trace-able)

 

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

* [this repl.it](http://javascript.info/type-conversions)
* [operator precedence, js.info](http://javascript.info/operators#operators-precedence)
* [comparisons, js.info](http://javascript.info/comparison)
* [type conversions, js.info](http://javascript.info/type-conversions)


---

## Operator Precedence

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

[repl.it](http://javascript.info/type-conversions)

---

## Step-Through

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

[repl.it](http://javascript.info/type-conversions)

[parsons practice]()

---

## Trace Table

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
| | | | a === b |
| 1 | step_1 | |
| | | a == b |
| 2 | step_2 |  |
| | | step_1 \|\| step_2 |
| 3 | final_state | | 


[live quiz]()

--- 

## Trace Block

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
[pytut]()  
[inspect it]()


---

## Encapuslated

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

  step_3 = step_1 || step_2;
  if (trace) {
    result.result = step_3;
  } else {
    result = step_3; 
  };

  return result;
};
```


___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>




