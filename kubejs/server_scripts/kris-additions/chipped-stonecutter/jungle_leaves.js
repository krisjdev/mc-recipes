// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:jungle_leaves"
	var block_ids = [
		"chipped:apple_jungle_leaves", "chipped:cherry_jungle_leaves", "chipped:dead_jungle_leaves", "chipped:frosted_jungle_leaves",
		"chipped:golden_jungle_leaves", "chipped:golden_apple_jungle_leaves", "chipped:golden_cherry_jungle_leaves", "chipped:magenta_flower_jungle_leaves",
		"chipped:orange_jungle_leaves", "chipped:red_jungle_leaves", "chipped:white_flower_jungle_leaves", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
