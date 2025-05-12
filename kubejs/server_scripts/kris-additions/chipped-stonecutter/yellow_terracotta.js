// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:yellow_terracotta"
	var block_ids = [
		"chipped:yellow_terracotta_bricks", "chipped:yellow_terracotta_tile", "chipped:yellow_terracotta_tiles", "chipped:chiseled_yellow_terracotta",
		"chipped:crossed_yellow_terracotta", "chipped:cut_yellow_terracotta", "chipped:decorated_yellow_terracotta", "chipped:layered_yellow_terracotta",
		"chipped:triangular_yellow_terracotta", "chipped:yellow_terracotta_column", "chipped:yellow_terracotta_pillar", "chipped:small_yellow_terracotta_tiles",
		"chipped:curled_yellow_terracotta", "chipped:hexagonical_yellow_terracotta", "chipped:circular_yellow_terracotta", "chipped:inscribed_yellow_terracotta",
		"chipped:starry_yellow_terracotta", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
