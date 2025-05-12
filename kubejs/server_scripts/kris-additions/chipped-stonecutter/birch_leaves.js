// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:birch_leaves"
	var block_ids = [
		"chipped:apple_birch_leaves", "chipped:cherry_birch_leaves", "chipped:dead_birch_leaves", "chipped:frosted_birch_leaves",
		"chipped:golden_birch_leaves", "chipped:golden_apple_birch_leaves", "chipped:golden_cherry_birch_leaves", "chipped:magenta_flower_birch_leaves",
		"chipped:orange_birch_leaves", "chipped:red_birch_leaves", "chipped:white_flower_birch_leaves", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
