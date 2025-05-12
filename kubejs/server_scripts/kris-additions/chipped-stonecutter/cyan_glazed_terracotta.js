// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:cyan_glazed_terracotta"
	var block_ids = [
		"chipped:cyan_glazed_terracotta_pillar_sides", "chipped:cyan_glazed_terracotta_pillar_top", "chipped:cyan_glazed_terracotta_smooth_tiles", "chipped:cyan_glazed_terracotta_tiles",
		"chipped:decorated_cyan_glazed_terracotta", "chipped:hexagonical_cyan_glazed_terracotta", "chipped:minimized_cyan_glazed_terracotta", "chipped:paved_cyan_glazed_terracotta",
		"chipped:shrunken_cyan_glazed_terracotta", "chipped:starry_cyan_glazed_terracotta", "chipped:waved_cyan_glazed_terracotta", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
