// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:oak_leaves"
	var block_ids = [
		"chipped:apple_oak_leaves", "chipped:cherry_oak_leaves", "chipped:dead_oak_leaves", "chipped:frosted_oak_leaves",
		"chipped:golden_oak_leaves", "chipped:golden_apple_oak_leaves", "chipped:golden_cherry_oak_leaves", "chipped:magenta_flower_oak_leaves",
		"chipped:orange_oak_leaves", "chipped:red_oak_leaves", "chipped:white_flower_oak_leaves", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
