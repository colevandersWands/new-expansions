console.log(" --- test cases --- ");
{
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

	for (let test_case of test_cases) {
		console.assert(
			expression_tracer(...test_case.args) === test_case.expected, 
			expression_tracer(...test_case.args, true),
			{expected: test_case.expected});
	};
};