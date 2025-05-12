// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:blue_glazed_terracotta"
	var block_ids = [
		"chipped:blue_glazed_terracotta_pillar_sides", "chipped:blue_glazed_terracotta_pillar_top", "chipped:blue_glazed_terracotta_smooth_tiles", "chipped:blue_glazed_terracotta_tiles",
		"chipped:decorated_blue_glazed_terracotta", "chipped:hexagonical_blue_glazed_terracotta", "chipped:minimized_blue_glazed_terracotta", "chipped:paved_blue_glazed_terracotta",
		"chipped:shrunken_blue_glazed_terracotta", "chipped:starry_blue_glazed_terracotta", "chipped:waved_blue_glazed_terracotta", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
