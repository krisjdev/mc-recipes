// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:purple_terracotta"
	var block_ids = [
		"chipped:purple_terracotta_bricks", "chipped:purple_terracotta_tile", "chipped:purple_terracotta_tiles", "chipped:chiseled_purple_terracotta",
		"chipped:crossed_purple_terracotta", "chipped:cut_purple_terracotta", "chipped:decorated_purple_terracotta", "chipped:layered_purple_terracotta",
		"chipped:triangular_purple_terracotta", "chipped:purple_terracotta_column", "chipped:purple_terracotta_pillar", "chipped:small_purple_terracotta_tiles",
		"chipped:curled_purple_terracotta", "chipped:hexagonical_purple_terracotta", "chipped:circular_purple_terracotta", "chipped:inscribed_purple_terracotta",
		"chipped:starry_purple_terracotta", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
