// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:cyan_terracotta"
	var block_ids = [
		"chipped:cyan_terracotta_bricks", "chipped:cyan_terracotta_tile", "chipped:cyan_terracotta_tiles", "chipped:chiseled_cyan_terracotta",
		"chipped:crossed_cyan_terracotta", "chipped:cut_cyan_terracotta", "chipped:decorated_cyan_terracotta", "chipped:layered_cyan_terracotta",
		"chipped:triangular_cyan_terracotta", "chipped:cyan_terracotta_column", "chipped:cyan_terracotta_pillar", "chipped:small_cyan_terracotta_tiles",
		"chipped:curled_cyan_terracotta", "chipped:hexagonical_cyan_terracotta", "chipped:circular_cyan_terracotta", "chipped:inscribed_cyan_terracotta",
		"chipped:starry_cyan_terracotta", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
