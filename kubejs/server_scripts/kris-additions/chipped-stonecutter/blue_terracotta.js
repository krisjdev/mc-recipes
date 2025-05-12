// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:blue_terracotta"
	var block_ids = [
		"chipped:blue_terracotta_bricks", "chipped:blue_terracotta_tile", "chipped:blue_terracotta_tiles", "chipped:chiseled_blue_terracotta",
		"chipped:crossed_blue_terracotta", "chipped:cut_blue_terracotta", "chipped:decorated_blue_terracotta", "chipped:layered_blue_terracotta",
		"chipped:triangular_blue_terracotta", "chipped:blue_terracotta_column", "chipped:blue_terracotta_pillar", "chipped:small_blue_terracotta_tiles",
		"chipped:curled_blue_terracotta", "chipped:hexagonical_blue_terracotta", "chipped:circular_blue_terracotta", "chipped:inscribed_blue_terracotta",
		"chipped:starry_blue_terracotta", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
