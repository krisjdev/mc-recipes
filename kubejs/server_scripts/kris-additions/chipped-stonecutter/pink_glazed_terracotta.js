// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:pink_glazed_terracotta"
	var block_ids = [
		"chipped:pink_glazed_terracotta_pillar_sides", "chipped:pink_glazed_terracotta_pillar_top", "chipped:pink_glazed_terracotta_smooth_tiles", "chipped:pink_glazed_terracotta_tiles",
		"chipped:decorated_pink_glazed_terracotta", "chipped:hexagonical_pink_glazed_terracotta", "chipped:minimized_pink_glazed_terracotta", "chipped:paved_pink_glazed_terracotta",
		"chipped:shrunken_pink_glazed_terracotta", "chipped:starry_pink_glazed_terracotta", "chipped:waved_pink_glazed_terracotta", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
