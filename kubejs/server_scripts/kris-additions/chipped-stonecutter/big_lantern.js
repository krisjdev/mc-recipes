// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "chipped:big_lantern"
	var block_ids = [
		"chipped:donut_lantern", "chipped:tall_lantern", "chipped:wide_lantern", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
