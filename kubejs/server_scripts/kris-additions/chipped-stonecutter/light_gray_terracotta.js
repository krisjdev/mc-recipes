// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:light_gray_terracotta"
	var block_ids = [
		"chipped:light_gray_terracotta_bricks", "chipped:light_gray_terracotta_tile", "chipped:light_gray_terracotta_tiles", "chipped:chiseled_light_gray_terracotta",
		"chipped:crossed_light_gray_terracotta", "chipped:cut_light_gray_terracotta", "chipped:decorated_light_gray_terracotta", "chipped:layered_light_gray_terracotta",
		"chipped:triangular_light_gray_terracotta", "chipped:light_gray_terracotta_column", "chipped:light_gray_terracotta_pillar", "chipped:small_light_gray_terracotta_tiles",
		"chipped:curled_light_gray_terracotta", "chipped:hexagonical_light_gray_terracotta", "chipped:circular_light_gray_terracotta", "chipped:inscribed_light_gray_terracotta",
		"chipped:starry_light_gray_terracotta", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
