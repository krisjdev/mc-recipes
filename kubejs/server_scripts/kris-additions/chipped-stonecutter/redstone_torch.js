// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:redstone_torch"
	var block_ids = [
		"chipped:blue_redstone_torch", "chipped:crimson_redstone_torch", "chipped:green_redstone_torch", "chipped:lightstick_redstone_torch",
		"chipped:yellow_redstone_torch", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
