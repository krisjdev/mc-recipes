// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:green_terracotta"
	var block_ids = [
		"chipped:green_terracotta_bricks", "chipped:green_terracotta_tile", "chipped:green_terracotta_tiles", "chipped:chiseled_green_terracotta",
		"chipped:crossed_green_terracotta", "chipped:cut_green_terracotta", "chipped:decorated_green_terracotta", "chipped:layered_green_terracotta",
		"chipped:triangular_green_terracotta", "chipped:green_terracotta_column", "chipped:green_terracotta_pillar", "chipped:small_green_terracotta_tiles",
		"chipped:curled_green_terracotta", "chipped:hexagonical_green_terracotta", "chipped:circular_green_terracotta", "chipped:inscribed_green_terracotta",
		"chipped:starry_green_terracotta", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
