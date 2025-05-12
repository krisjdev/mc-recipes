// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:lime_glazed_terracotta"
	var block_ids = [
		"chipped:lime_glazed_terracotta_pillar_sides", "chipped:lime_glazed_terracotta_pillar_top", "chipped:lime_glazed_terracotta_smooth_tiles", "chipped:lime_glazed_terracotta_tiles",
		"chipped:decorated_lime_glazed_terracotta", "chipped:hexagonical_lime_glazed_terracotta", "chipped:minimized_lime_glazed_terracotta", "chipped:paved_lime_glazed_terracotta",
		"chipped:shrunken_lime_glazed_terracotta", "chipped:starry_lime_glazed_terracotta", "chipped:waved_lime_glazed_terracotta", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
