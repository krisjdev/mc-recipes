// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:oak_trapdoor"
	var block_ids = [
		"chipped:airy_oak_trapdoor", "chipped:barred_oak_trapdoor", "chipped:checkered_oak_trapdoor", "chipped:classic_windowed_oak_trapdoor",
		"chipped:cobweb_oak_trapdoor", "chipped:distorted_oak_trapdoor", "chipped:fancy_oak_trapdoor", "chipped:golden_barred_oak_trapdoor",
		"chipped:heavy_oak_trapdoor", "chipped:iron_barred_oak_trapdoor", "chipped:leafy_oak_trapdoor", "chipped:meshed_oak_trapdoor",
		"chipped:overgrown_oak_trapdoor", "chipped:pointless_oak_trapdoor", "chipped:slotted_oak_trapdoor", "chipped:solid_oak_trapdoor",
		"chipped:suspicious_oak_trapdoor", "chipped:twisted_oak_trapdoor", "chipped:vined_oak_trapdoor", "chipped:warted_oak_trapdoor",
		"chipped:windowed_oak_trapdoor", "chipped:woven_oak_trapdoor", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
