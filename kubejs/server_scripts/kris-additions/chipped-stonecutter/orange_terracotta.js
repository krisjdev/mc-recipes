// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:orange_terracotta"
	var block_ids = [
		"chipped:orange_terracotta_bricks", "chipped:orange_terracotta_tile", "chipped:orange_terracotta_tiles", "chipped:chiseled_orange_terracotta",
		"chipped:crossed_orange_terracotta", "chipped:cut_orange_terracotta", "chipped:decorated_orange_terracotta", "chipped:layered_orange_terracotta",
		"chipped:triangular_orange_terracotta", "chipped:orange_terracotta_column", "chipped:orange_terracotta_pillar", "chipped:small_orange_terracotta_tiles",
		"chipped:curled_orange_terracotta", "chipped:hexagonical_orange_terracotta", "chipped:circular_orange_terracotta", "chipped:inscribed_orange_terracotta",
		"chipped:starry_orange_terracotta", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
