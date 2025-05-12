// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:crimson_roots"
	var block_ids = [
		"chipped:budding_crimson_roots_bulb", "chipped:budding_crimson_roots", "chipped:crimson_roots_bloom", "chipped:crimson_roots_bramble",
		"chipped:crimson_roots_bud", "chipped:crimson_roots_bulb", "chipped:crimson_roots_floret", "chipped:flowered_crimson_roots_bulb",
		"chipped:flowered_crimson_roots", "chipped:small_crimson_roots_bud", "chipped:sprouting_crimson_roots_bulb", "chipped:sprouting_crimson_roots",
		"chipped:wilted_crimson_roots_bud", "chipped:wilted_crimson_roots_bulb", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
