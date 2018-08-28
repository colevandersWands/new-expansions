function trace_it() {
	// read, clean & process user input
	var a_type = document.getElementById("a-type").value;
	var a_value = document.getElementById("a-value").value;
	var a = cast(a_type, a_value);

	var b_type = document.getElementById("b-type").value;
	var b_value = document.getElementById("b-value").value;
	var b = cast(b_type, b_value);

	var expected_type = document.getElementById("expected-type").value;
	var expected_value = document.getElementById("expected-value").value;
	var expected = cast(expected_type, expected_value);


	// do the logic (only pure js, no DOM calls)
	var step_through = expression_tracer(a, b, true);
	var final_state = step_through.result;

	// display results to the user
	console.table(step_through);

	console.assert(final_state === expected, [{actual: final_state}, {expected: expected}] );
};

// var trace_it_button = document.getElementById("trace-it-button");
// trace_it_button.addEventListener('click', trace_it);