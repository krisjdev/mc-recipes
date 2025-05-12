// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:black_glazed_terracotta"
	var block_ids = [
		"chipped:black_glazed_terracotta_pillar_sides", "chipped:black_glazed_terracotta_pillar_top", "chipped:black_glazed_terracotta_smooth_tiles", "chipped:black_glazed_terracotta_tiles",
		"chipped:decorated_black_glazed_terracotta", "chipped:hexagonical_black_glazed_terracotta", "chipped:minimized_black_glazed_terracotta", "chipped:paved_black_glazed_terracotta",
		"chipped:shrunken_black_glazed_terracotta", "chipped:starry_black_glazed_terracotta", "chipped:waved_black_glazed_terracotta", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
