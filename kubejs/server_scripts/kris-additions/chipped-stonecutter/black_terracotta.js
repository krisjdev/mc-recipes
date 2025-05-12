// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:black_terracotta"
	var block_ids = [
		"chipped:black_terracotta_bricks", "chipped:black_terracotta_tile", "chipped:black_terracotta_tiles", "chipped:chiseled_black_terracotta",
		"chipped:crossed_black_terracotta", "chipped:cut_black_terracotta", "chipped:decorated_black_terracotta", "chipped:layered_black_terracotta",
		"chipped:triangular_black_terracotta", "chipped:black_terracotta_column", "chipped:black_terracotta_pillar", "chipped:small_black_terracotta_tiles",
		"chipped:curled_black_terracotta", "chipped:hexagonical_black_terracotta", "chipped:circular_black_terracotta", "chipped:inscribed_black_terracotta",
		"chipped:starry_black_terracotta", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
