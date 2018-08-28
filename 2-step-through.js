console.log(" --- step through --- \n");
{ // _ code completion exercise _ 
  // change a & b to practice on different values
  const a = 1;
  const b = "1";

  const step_1 = a === b;
  const s1_guess = ( null );
  console.assert( Object.is( s1_guess, step_1 ), "step_1: a === b");

  const step_2 = a == b;
  const s2_guess = ( null );
  console.assert( Object.is( s2_guess, step_2 ), "step_2: a == b");

  const step_3 = step_1 || step_2;
  const s3_guess = ( null );
  console.assert( Object.is( s3_guess, step_3 ), "step_3: step_1 || step_2");
};