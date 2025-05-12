// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:light_blue_glazed_terracotta"
	var block_ids = [
		"chipped:light_blue_glazed_terracotta_pillar_sides", "chipped:light_blue_glazed_terracotta_pillar_top", "chipped:light_blue_glazed_terracotta_smooth_tiles", "chipped:light_blue_glazed_terracotta_tiles",
		"chipped:decorated_light_blue_glazed_terracotta", "chipped:hexagonical_light_blue_glazed_terracotta", "chipped:minimized_light_blue_glazed_terracotta", "chipped:paved_light_blue_glazed_terracotta",
		"chipped:shrunken_light_blue_glazed_terracotta", "chipped:starry_light_blue_glazed_terracotta", "chipped:waved_light_blue_glazed_terracotta", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
