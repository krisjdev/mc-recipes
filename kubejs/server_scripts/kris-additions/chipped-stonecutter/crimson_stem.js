// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:crimson_stem"
	var block_ids = [
		"chipped:bundled_crimson_stem", "chipped:center_cut_crimson_stem", "chipped:crying_crimson_stem", "chipped:damaged_crimson_stem",
		"chipped:edge_cut_crimson_stem", "chipped:firewood_crimson_stem", "chipped:glittering_crimson_stem", "chipped:glowing_crimson_stem",
		"chipped:mixed_crimson_stem", "chipped:nailed_crimson_stem", "chipped:planked_crimson_stem", "chipped:rotten_crimson_stem",
		"chipped:shrooming_crimson_stem", "chipped:smooth_crimson_stem", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
