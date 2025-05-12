// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:acacia_leaves"
	var block_ids = [
		"chipped:apple_acacia_leaves", "chipped:cherry_acacia_leaves", "chipped:dead_acacia_leaves", "chipped:frosted_acacia_leaves",
		"chipped:golden_acacia_leaves", "chipped:golden_apple_acacia_leaves", "chipped:golden_cherry_acacia_leaves", "chipped:magenta_flower_acacia_leaves",
		"chipped:orange_acacia_leaves", "chipped:red_acacia_leaves", "chipped:white_flower_acacia_leaves", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
