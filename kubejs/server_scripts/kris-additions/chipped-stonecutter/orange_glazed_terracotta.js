// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:orange_glazed_terracotta"
	var block_ids = [
		"chipped:orange_glazed_terracotta_pillar_sides", "chipped:orange_glazed_terracotta_pillar_top", "chipped:orange_glazed_terracotta_smooth_tiles", "chipped:orange_glazed_terracotta_tiles",
		"chipped:decorated_orange_glazed_terracotta", "chipped:hexagonical_orange_glazed_terracotta", "chipped:minimized_orange_glazed_terracotta", "chipped:paved_orange_glazed_terracotta",
		"chipped:shrunken_orange_glazed_terracotta", "chipped:starry_orange_glazed_terracotta", "chipped:waved_orange_glazed_terracotta", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
