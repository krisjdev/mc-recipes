// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:birch_trapdoor"
	var block_ids = [
		"chipped:airy_birch_trapdoor", "chipped:barred_birch_trapdoor", "chipped:checkered_birch_trapdoor", "chipped:classic_birch_trapdoor",
		"chipped:classic_windowed_birch_trapdoor", "chipped:cobweb_birch_trapdoor", "chipped:distorted_birch_trapdoor", "chipped:fancy_birch_trapdoor",
		"chipped:golden_barred_birch_trapdoor", "chipped:heavy_birch_trapdoor", "chipped:iron_barred_birch_trapdoor", "chipped:leafy_birch_trapdoor",
		"chipped:meshed_birch_trapdoor", "chipped:overgrown_birch_trapdoor", "chipped:pointless_birch_trapdoor", "chipped:slotted_birch_trapdoor",
		"chipped:solid_birch_trapdoor", "chipped:suspicious_birch_trapdoor", "chipped:twisted_birch_trapdoor", "chipped:vined_birch_trapdoor",
		"chipped:warted_birch_trapdoor", "chipped:windowed_birch_trapdoor", "chipped:woven_birch_trapdoor", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
