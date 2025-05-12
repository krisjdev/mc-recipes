// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:gray_terracotta"
	var block_ids = [
		"chipped:gray_terracotta_bricks", "chipped:gray_terracotta_tile", "chipped:gray_terracotta_tiles", "chipped:chiseled_gray_terracotta",
		"chipped:crossed_gray_terracotta", "chipped:cut_gray_terracotta", "chipped:decorated_gray_terracotta", "chipped:layered_gray_terracotta",
		"chipped:triangular_gray_terracotta", "chipped:gray_terracotta_column", "chipped:gray_terracotta_pillar", "chipped:small_gray_terracotta_tiles",
		"chipped:curled_gray_terracotta", "chipped:hexagonical_gray_terracotta", "chipped:circular_gray_terracotta", "chipped:inscribed_gray_terracotta",
		"chipped:starry_gray_terracotta", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
