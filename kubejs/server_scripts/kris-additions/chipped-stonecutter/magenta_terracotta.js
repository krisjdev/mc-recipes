// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:magenta_terracotta"
	var block_ids = [
		"chipped:magenta_terracotta_bricks", "chipped:magenta_terracotta_tile", "chipped:magenta_terracotta_tiles", "chipped:chiseled_magenta_terracotta",
		"chipped:crossed_magenta_terracotta", "chipped:cut_magenta_terracotta", "chipped:decorated_magenta_terracotta", "chipped:layered_magenta_terracotta",
		"chipped:triangular_magenta_terracotta", "chipped:magenta_terracotta_column", "chipped:magenta_terracotta_pillar", "chipped:small_magenta_terracotta_tiles",
		"chipped:curled_magenta_terracotta", "chipped:hexagonical_magenta_terracotta", "chipped:circular_magenta_terracotta", "chipped:inscribed_magenta_terracotta",
		"chipped:starry_magenta_terracotta", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
