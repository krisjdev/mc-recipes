// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:light_blue_terracotta"
	var block_ids = [
		"chipped:light_blue_terracotta_bricks", "chipped:light_blue_terracotta_tile", "chipped:light_blue_terracotta_tiles", "chipped:chiseled_light_blue_terracotta",
		"chipped:crossed_light_blue_terracotta", "chipped:cut_light_blue_terracotta", "chipped:decorated_light_blue_terracotta", "chipped:layered_light_blue_terracotta",
		"chipped:triangular_light_blue_terracotta", "chipped:light_blue_terracotta_column", "chipped:light_blue_terracotta_pillar", "chipped:small_light_blue_terracotta_tiles",
		"chipped:curled_light_blue_terracotta", "chipped:hexagonical_light_blue_terracotta", "chipped:circular_light_blue_terracotta", "chipped:inscribed_light_blue_terracotta",
		"chipped:starry_light_blue_terracotta", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
