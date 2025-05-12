// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:cherry_trapdoor"
	var block_ids = [
		"chipped:barred_cherry_trapdoor", "chipped:checkered_cherry_trapdoor", "chipped:classic_cherry_trapdoor", "chipped:classic_windowed_cherry_trapdoor",
		"chipped:cobweb_cherry_trapdoor", "chipped:distorted_cherry_trapdoor", "chipped:fancy_cherry_trapdoor", "chipped:golden_barred_cherry_trapdoor",
		"chipped:heavy_cherry_trapdoor", "chipped:iron_barred_cherry_trapdoor", "chipped:leafy_cherry_trapdoor", "chipped:meshed_cherry_trapdoor",
		"chipped:overgrown_cherry_trapdoor", "chipped:pointless_cherry_trapdoor", "chipped:slotted_cherry_trapdoor", "chipped:solid_cherry_trapdoor",
		"chipped:suspicious_cherry_trapdoor", "chipped:twisted_cherry_trapdoor", "chipped:vined_cherry_trapdoor", "chipped:warted_cherry_trapdoor",
		"chipped:windowed_cherry_trapdoor", "chipped:woven_cherry_trapdoor", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
