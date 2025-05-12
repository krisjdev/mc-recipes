// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:green_glazed_terracotta"
	var block_ids = [
		"chipped:green_glazed_terracotta_pillar_sides", "chipped:green_glazed_terracotta_pillar_top", "chipped:green_glazed_terracotta_smooth_tiles", "chipped:green_glazed_terracotta_tiles",
		"chipped:decorated_green_glazed_terracotta", "chipped:hexagonical_green_glazed_terracotta", "chipped:minimized_green_glazed_terracotta", "chipped:paved_green_glazed_terracotta",
		"chipped:shrunken_green_glazed_terracotta", "chipped:starry_green_glazed_terracotta", "chipped:waved_green_glazed_terracotta", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
