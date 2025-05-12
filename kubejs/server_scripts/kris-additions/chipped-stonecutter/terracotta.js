// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:terracotta"
	var block_ids = [
		"chipped:terracotta_bricks", "chipped:terracotta_tile", "chipped:terracotta_tiles", "chipped:chiseled_terracotta",
		"chipped:crossed_terracotta", "chipped:cut_terracotta", "chipped:decorated_terracotta", "chipped:layered_terracotta",
		"chipped:triangular_terracotta", "chipped:terracotta_column", "chipped:terracotta_pillar", "chipped:small_terracotta_tiles",
		"chipped:curled_terracotta", "chipped:hexagonical_terracotta", "chipped:circular_terracotta", "chipped:inscribed_terracotta",
		"chipped:starry_terracotta", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
