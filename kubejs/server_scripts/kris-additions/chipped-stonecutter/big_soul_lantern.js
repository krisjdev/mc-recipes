// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "chipped:big_soul_lantern"
	var block_ids = [
		"chipped:donut_soul_lantern", "chipped:tall_soul_lantern", "chipped:wide_soul_lantern", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
