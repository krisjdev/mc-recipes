// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:dark_oak_trapdoor"
	var block_ids = [
		"chipped:airy_dark_oak_trapdoor", "chipped:barred_dark_oak_trapdoor", "chipped:checkered_dark_oak_trapdoor", "chipped:classic_dark_oak_trapdoor",
		"chipped:classic_windowed_dark_oak_trapdoor", "chipped:cobweb_dark_oak_trapdoor", "chipped:distorted_dark_oak_trapdoor", "chipped:fancy_dark_oak_trapdoor",
		"chipped:golden_barred_dark_oak_trapdoor", "chipped:heavy_dark_oak_trapdoor", "chipped:iron_barred_dark_oak_trapdoor", "chipped:leafy_dark_oak_trapdoor",
		"chipped:meshed_dark_oak_trapdoor", "chipped:overgrown_dark_oak_trapdoor", "chipped:pointless_dark_oak_trapdoor", "chipped:slotted_dark_oak_trapdoor",
		"chipped:solid_dark_oak_trapdoor", "chipped:suspicious_dark_oak_trapdoor", "chipped:twisted_dark_oak_trapdoor", "chipped:vined_dark_oak_trapdoor",
		"chipped:warted_dark_oak_trapdoor", "chipped:windowed_dark_oak_trapdoor", "chipped:woven_dark_oak_trapdoor", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
