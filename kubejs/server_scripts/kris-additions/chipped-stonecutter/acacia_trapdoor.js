// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:acacia_trapdoor"
	var block_ids = [
		"chipped:barred_acacia_trapdoor", "chipped:checkered_acacia_trapdoor", "chipped:classic_acacia_trapdoor", "chipped:classic_windowed_acacia_trapdoor",
		"chipped:cobweb_acacia_trapdoor", "chipped:distorted_acacia_trapdoor", "chipped:fancy_acacia_trapdoor", "chipped:golden_barred_acacia_trapdoor",
		"chipped:heavy_acacia_trapdoor", "chipped:iron_barred_acacia_trapdoor", "chipped:leafy_acacia_trapdoor", "chipped:meshed_acacia_trapdoor",
		"chipped:overgrown_acacia_trapdoor", "chipped:pointless_acacia_trapdoor", "chipped:slotted_acacia_trapdoor", "chipped:solid_acacia_trapdoor",
		"chipped:suspicious_acacia_trapdoor", "chipped:twisted_acacia_trapdoor", "chipped:vined_acacia_trapdoor", "chipped:warted_acacia_trapdoor",
		"chipped:windowed_acacia_trapdoor", "chipped:woven_acacia_trapdoor", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
