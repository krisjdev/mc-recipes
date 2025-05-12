// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:white_terracotta"
	var block_ids = [
		"chipped:white_terracotta_bricks", "chipped:white_terracotta_tile", "chipped:white_terracotta_tiles", "chipped:chiseled_white_terracotta",
		"chipped:crossed_white_terracotta", "chipped:cut_white_terracotta", "chipped:decorated_white_terracotta", "chipped:layered_white_terracotta",
		"chipped:triangular_white_terracotta", "chipped:white_terracotta_column", "chipped:white_terracotta_pillar", "chipped:small_white_terracotta_tiles",
		"chipped:curled_white_terracotta", "chipped:hexagonical_white_terracotta", "chipped:circular_white_terracotta", "chipped:inscribed_white_terracotta",
		"chipped:starry_white_terracotta", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
