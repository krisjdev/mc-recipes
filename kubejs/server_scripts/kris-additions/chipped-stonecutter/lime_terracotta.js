// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:lime_terracotta"
	var block_ids = [
		"chipped:lime_terracotta_bricks", "chipped:lime_terracotta_tile", "chipped:lime_terracotta_tiles", "chipped:chiseled_lime_terracotta",
		"chipped:crossed_lime_terracotta", "chipped:cut_lime_terracotta", "chipped:decorated_lime_terracotta", "chipped:layered_lime_terracotta",
		"chipped:triangular_lime_terracotta", "chipped:lime_terracotta_column", "chipped:lime_terracotta_pillar", "chipped:small_lime_terracotta_tiles",
		"chipped:curled_lime_terracotta", "chipped:hexagonical_lime_terracotta", "chipped:circular_lime_terracotta", "chipped:inscribed_lime_terracotta",
		"chipped:starry_lime_terracotta", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
