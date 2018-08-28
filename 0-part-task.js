{ // --- part-task break-down ---
  const or_t_t = true || true; // -> true
  const or_f_t = false || true; // -> true
  const or_t_f = true || false; // -> true 
  const or_f_f = false || false; // -> false

  // no implicit type conversion before comparing
  const deep_str_str = "1" === "1"; // -> true
  const deep_str_num = "1" === 1; // -> false
  const deep_num_str = 1 === "1"; // -> false
  const deep_num_num = 1 === 1; // -> true

  // yes implicit type comparison before comparint
  const shallow_str_str = "1" == "1"; // -> true
  const shallow_str_num = "1" == 1; // -> true
  const shallow_num_str = 1 == "1"; // -> true
  const shallow_num_num = 1 == 1; // -> true
};