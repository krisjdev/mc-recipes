// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:bamboo_trapdoor"
	var block_ids = [
		"chipped:barred_bamboo_trapdoor", "chipped:checkered_bamboo_trapdoor", "chipped:classic_bamboo_trapdoor", "chipped:classic_windowed_bamboo_trapdoor",
		"chipped:cobweb_bamboo_trapdoor", "chipped:distorted_bamboo_trapdoor", "chipped:fancy_bamboo_trapdoor", "chipped:golden_barred_bamboo_trapdoor",
		"chipped:heavy_bamboo_trapdoor", "chipped:iron_barred_bamboo_trapdoor", "chipped:leafy_bamboo_trapdoor", "chipped:meshed_bamboo_trapdoor",
		"chipped:overgrown_bamboo_trapdoor", "chipped:pointless_bamboo_trapdoor", "chipped:slotted_bamboo_trapdoor", "chipped:solid_bamboo_trapdoor",
		"chipped:suspicious_bamboo_trapdoor", "chipped:twisted_bamboo_trapdoor", "chipped:vined_bamboo_trapdoor", "chipped:warted_bamboo_trapdoor",
		"chipped:windowed_bamboo_trapdoor", "chipped:woven_bamboo_trapdoor", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
