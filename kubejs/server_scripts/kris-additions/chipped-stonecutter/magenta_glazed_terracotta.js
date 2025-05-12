// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:magenta_glazed_terracotta"
	var block_ids = [
		"chipped:magenta_glazed_terracotta_pillar_sides", "chipped:magenta_glazed_terracotta_pillar_top", "chipped:magenta_glazed_terracotta_smooth_tiles", "chipped:magenta_glazed_terracotta_tiles",
		"chipped:decorated_magenta_glazed_terracotta", "chipped:hexagonical_magenta_glazed_terracotta", "chipped:minimized_magenta_glazed_terracotta", "chipped:paved_magenta_glazed_terracotta",
		"chipped:shrunken_magenta_glazed_terracotta", "chipped:starry_magenta_glazed_terracotta", "chipped:waved_magenta_glazed_terracotta", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
