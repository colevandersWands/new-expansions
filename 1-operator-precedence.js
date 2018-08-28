console.log(" --- operator precedence --- \n");
{ // _ code completion exercise _
  // change a & b to practice on different values
  const a = 1;
  const b = "1";

  const expected = a === b  ||  a == b ;
  console.log("\ta === b  ||  a == b \n");

  const step_1 = ( false ) ||  a == b ;
  console.assert(step_1, expected, "step_1 || a === b");

  const step_2 = ( false ) || ( true );
  console.assert(step_2, expected, "step_1 || step_2");

  const step_3 = (        true       );
  console.assert(step_3, expected, "step_3");
};