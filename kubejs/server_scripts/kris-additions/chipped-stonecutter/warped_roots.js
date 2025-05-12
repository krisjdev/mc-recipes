// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:warped_roots"
	var block_ids = [
		"chipped:bloomed_warped_roots", "chipped:flowering_warped_roots", "chipped:half_grown_warped_roots", "chipped:lily_warped_roots",
		"chipped:mangled_warped_roots", "chipped:overgrown_warped_roots", "chipped:stem_warped_roots", "chipped:wiggly_warped_roots",
		"chipped:young_warped_roots", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
