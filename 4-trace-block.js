console.log(" --- trace block --- \n")
{
  const a = 1;
  const b = "1";

  const guess = true;
  let actual;

  { // 1 === "1" || 1 == "1";
    const step_1 = a === b;
    const step_2 = a == b;
    const step_3 = step_1 || step_2;
    actual = step_3;
  };

  console.assert( Object.is( guess, actual ), `(${typeof a}, ${a}), (${typeof b}, ${b}) -> (${typeof actual}, ${actual})`);
};