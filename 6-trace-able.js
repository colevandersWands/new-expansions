console.log(" --- trace-able --- \n");
{
  const a = 1;
  const b = "1";
  const expected = true;
  const actual = expression_tracer(a, b);

  // console.assert( Object.is(expected, actual), expression_tracer(a, b, true));

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
};