function parsonizer_handler() {
	let text_area = document.getElementById("comments");
	let code_to_parsonize = String(text_area.value);

	init(code_to_parsonize);

	text_area.value = "";
}

document.getElementById("parsonizer").addEventListener("click", parsonizer_handler);