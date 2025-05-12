// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:gray_glazed_terracotta"
	var block_ids = [
		"chipped:gray_glazed_terracotta_pillar_sides", "chipped:gray_glazed_terracotta_pillar_top", "chipped:gray_glazed_terracotta_smooth_tiles", "chipped:gray_glazed_terracotta_tiles",
		"chipped:decorated_gray_glazed_terracotta", "chipped:hexagonical_gray_glazed_terracotta", "chipped:minimized_gray_glazed_terracotta", "chipped:paved_gray_glazed_terracotta",
		"chipped:shrunken_gray_glazed_terracotta", "chipped:starry_gray_glazed_terracotta", "chipped:waved_gray_glazed_terracotta", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
