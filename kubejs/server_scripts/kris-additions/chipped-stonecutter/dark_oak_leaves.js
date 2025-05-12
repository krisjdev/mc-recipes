// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:dark_oak_leaves"
	var block_ids = [
		"chipped:apple_dark_oak_leaves", "chipped:cherry_dark_oak_leaves", "chipped:dead_dark_oak_leaves", "chipped:frosted_dark_oak_leaves",
		"chipped:golden_dark_oak_leaves", "chipped:golden_apple_dark_oak_leaves", "chipped:golden_cherry_dark_oak_leaves", "chipped:magenta_flower_dark_oak_leaves",
		"chipped:orange_dark_oak_leaves", "chipped:red_dark_oak_leaves", "chipped:white_flower_dark_oak_leaves", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
