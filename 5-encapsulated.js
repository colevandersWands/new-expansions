console.log(" --- encapsulated --- \n");
{
  const a = 1;
  const b = "1";
  const expected = true;
  const actual = call_expression(a, b);

  // console.assert(Object.is( expected, actual ), `(${typeof a}, ${a}), (${typeof b}, ${b}) -> (${typeof actual}, ${actual})`);

  function call_expression(a, b) {
    let result;
    const step_1 = a === b;
    const step_2 = a == b;
    const step_3 = step_1 || step_2;
    result = step_3;
    return result;
  };
};