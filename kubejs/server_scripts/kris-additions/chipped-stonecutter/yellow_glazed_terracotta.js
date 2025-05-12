// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:yellow_glazed_terracotta"
	var block_ids = [
		"chipped:yellow_glazed_terracotta_pillar_sides", "chipped:yellow_glazed_terracotta_pillar_top", "chipped:yellow_glazed_terracotta_smooth_tiles", "chipped:yellow_glazed_terracotta_tiles",
		"chipped:decorated_yellow_glazed_terracotta", "chipped:hexagonical_yellow_glazed_terracotta", "chipped:minimized_yellow_glazed_terracotta", "chipped:paved_yellow_glazed_terracotta",
		"chipped:shrunken_yellow_glazed_terracotta", "chipped:starry_yellow_glazed_terracotta", "chipped:waved_yellow_glazed_terracotta", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
