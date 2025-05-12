// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:mangrove_roots"
	var block_ids = [
		"chipped:blue_mangrove_roots", "chipped:crimson_mangrove_roots", "chipped:flowery_mangrove_roots", "chipped:leafy_mangrove_roots",
		"chipped:lush_mangrove_roots", "chipped:muddy_mangrove_roots", "chipped:thin_mangrove_roots", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
