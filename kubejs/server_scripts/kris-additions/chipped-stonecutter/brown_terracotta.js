// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:brown_terracotta"
	var block_ids = [
		"chipped:brown_terracotta_bricks", "chipped:brown_terracotta_tile", "chipped:brown_terracotta_tiles", "chipped:chiseled_brown_terracotta",
		"chipped:crossed_brown_terracotta", "chipped:cut_brown_terracotta", "chipped:decorated_brown_terracotta", "chipped:layered_brown_terracotta",
		"chipped:triangular_brown_terracotta", "chipped:brown_terracotta_column", "chipped:brown_terracotta_pillar", "chipped:small_brown_terracotta_tiles",
		"chipped:curled_brown_terracotta", "chipped:hexagonical_brown_terracotta", "chipped:circular_brown_terracotta", "chipped:inscribed_brown_terracotta",
		"chipped:starry_brown_terracotta", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
