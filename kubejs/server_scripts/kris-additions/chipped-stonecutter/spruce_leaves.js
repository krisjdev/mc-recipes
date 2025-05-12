// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:spruce_leaves"
	var block_ids = [
		"chipped:apple_spruce_leaves", "chipped:cherry_spruce_leaves", "chipped:dead_spruce_leaves", "chipped:frosted_spruce_leaves",
		"chipped:golden_spruce_leaves", "chipped:golden_apple_spruce_leaves", "chipped:golden_cherry_spruce_leaves", "chipped:magenta_flower_spruce_leaves",
		"chipped:orange_spruce_leaves", "chipped:red_spruce_leaves", "chipped:white_flower_spruce_leaves", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
