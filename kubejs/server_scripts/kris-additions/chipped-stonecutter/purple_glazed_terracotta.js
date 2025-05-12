// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:purple_glazed_terracotta"
	var block_ids = [
		"chipped:purple_glazed_terracotta_pillar_sides", "chipped:purple_glazed_terracotta_pillar_top", "chipped:purple_glazed_terracotta_smooth_tiles", "chipped:purple_glazed_terracotta_tiles",
		"chipped:decorated_purple_glazed_terracotta", "chipped:hexagonical_purple_glazed_terracotta", "chipped:minimized_purple_glazed_terracotta", "chipped:paved_purple_glazed_terracotta",
		"chipped:shrunken_purple_glazed_terracotta", "chipped:starry_purple_glazed_terracotta", "chipped:waved_purple_glazed_terracotta", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
