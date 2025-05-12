// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:pink_terracotta"
	var block_ids = [
		"chipped:pink_terracotta_bricks", "chipped:pink_terracotta_tile", "chipped:pink_terracotta_tiles", "chipped:chiseled_pink_terracotta",
		"chipped:crossed_pink_terracotta", "chipped:cut_pink_terracotta", "chipped:decorated_pink_terracotta", "chipped:layered_pink_terracotta",
		"chipped:triangular_pink_terracotta", "chipped:pink_terracotta_column", "chipped:pink_terracotta_pillar", "chipped:small_pink_terracotta_tiles",
		"chipped:curled_pink_terracotta", "chipped:hexagonical_pink_terracotta", "chipped:circular_pink_terracotta", "chipped:inscribed_pink_terracotta",
		"chipped:starry_pink_terracotta", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
