// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:red_terracotta"
	var block_ids = [
		"chipped:red_terracotta_bricks", "chipped:red_terracotta_tile", "chipped:red_terracotta_tiles", "chipped:chiseled_red_terracotta",
		"chipped:crossed_red_terracotta", "chipped:cut_red_terracotta", "chipped:decorated_red_terracotta", "chipped:layered_red_terracotta",
		"chipped:triangular_red_terracotta", "chipped:red_terracotta_column", "chipped:red_terracotta_pillar", "chipped:small_red_terracotta_tiles",
		"chipped:curled_red_terracotta", "chipped:hexagonical_red_terracotta", "chipped:circular_red_terracotta", "chipped:inscribed_red_terracotta",
		"chipped:starry_red_terracotta", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
