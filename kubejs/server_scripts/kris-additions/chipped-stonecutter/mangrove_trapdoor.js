// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:mangrove_trapdoor"
	var block_ids = [
		"chipped:airy_mangrove_trapdoor", "chipped:barred_mangrove_trapdoor", "chipped:checkered_mangrove_trapdoor", "chipped:classic_mangrove_trapdoor",
		"chipped:classic_windowed_mangrove_trapdoor", "chipped:cobweb_mangrove_trapdoor", "chipped:golden_barred_mangrove_trapdoor", "chipped:heavy_mangrove_trapdoor",
		"chipped:iron_barred_mangrove_trapdoor", "chipped:leafy_mangrove_trapdoor", "chipped:meshed_mangrove_trapdoor", "chipped:overgrown_mangrove_trapdoor",
		"chipped:pointless_mangrove_trapdoor", "chipped:slotted_mangrove_trapdoor", "chipped:solid_mangrove_trapdoor", "chipped:suspicious_mangrove_trapdoor",
		"chipped:twisted_mangrove_trapdoor", "chipped:vined_mangrove_trapdoor", "chipped:warted_mangrove_trapdoor", "chipped:windowed_mangrove_trapdoor",
		"chipped:woven_mangrove_trapdoor", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
