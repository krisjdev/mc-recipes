// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:torch"
	var block_ids = [
		"chipped:acacia_torch", "chipped:birch_torch", "chipped:crimson_torch", "chipped:dark_oak_torch",
		"chipped:glow_torch", "chipped:iron_torch", "chipped:jungle_torch", "chipped:spruce_torch",
		"chipped:warped_torch", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
