// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:brown_glazed_terracotta"
	var block_ids = [
		"chipped:brown_glazed_terracotta_pillar_sides", "chipped:brown_glazed_terracotta_pillar_top", "chipped:brown_glazed_terracotta_smooth_tiles", "chipped:brown_glazed_terracotta_tiles",
		"chipped:decorated_brown_glazed_terracotta", "chipped:hexagonical_brown_glazed_terracotta", "chipped:minimized_brown_glazed_terracotta", "chipped:paved_brown_glazed_terracotta",
		"chipped:shrunken_brown_glazed_terracotta", "chipped:starry_brown_glazed_terracotta", "chipped:waved_brown_glazed_terracotta", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
