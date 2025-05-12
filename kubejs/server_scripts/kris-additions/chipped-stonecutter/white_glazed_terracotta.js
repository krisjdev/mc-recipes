// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:white_glazed_terracotta"
	var block_ids = [
		"chipped:white_glazed_terracotta_pillar_sides", "chipped:white_glazed_terracotta_pillar_top", "chipped:white_glazed_terracotta_smooth_tiles", "chipped:white_glazed_terracotta_tiles",
		"chipped:decorated_white_glazed_terracotta", "chipped:hexagonical_white_glazed_terracotta", "chipped:minimized_white_glazed_terracotta", "chipped:paved_white_glazed_terracotta",
		"chipped:shrunken_white_glazed_terracotta", "chipped:starry_white_glazed_terracotta", "chipped:waved_white_glazed_terracotta", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
