// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:red_glazed_terracotta"
	var block_ids = [
		"chipped:red_glazed_terracotta_pillar_sides", "chipped:red_glazed_terracotta_pillar_top", "chipped:red_glazed_terracotta_smooth_tiles", "chipped:red_glazed_terracotta_tiles",
		"chipped:decorated_red_glazed_terracotta", "chipped:hexagonical_red_glazed_terracotta", "chipped:minimized_red_glazed_terracotta", "chipped:paved_red_glazed_terracotta",
		"chipped:shrunken_red_glazed_terracotta", "chipped:starry_red_glazed_terracotta", "chipped:waved_red_glazed_terracotta", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
