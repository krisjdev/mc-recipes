// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:warped_trapdoor"
	var block_ids = [
		"chipped:airy_warped_trapdoor", "chipped:barred_warped_trapdoor", "chipped:checkered_warped_trapdoor", "chipped:classic_warped_trapdoor",
		"chipped:classic_windowed_warped_trapdoor", "chipped:cobweb_warped_trapdoor", "chipped:golden_barred_warped_trapdoor", "chipped:heavy_warped_trapdoor",
		"chipped:iron_barred_warped_trapdoor", "chipped:leafy_warped_trapdoor", "chipped:meshed_warped_trapdoor", "chipped:overgrown_warped_trapdoor",
		"chipped:pointless_warped_trapdoor", "chipped:slotted_warped_trapdoor", "chipped:solid_warped_trapdoor", "chipped:suspicious_warped_trapdoor",
		"chipped:twisted_warped_trapdoor", "chipped:vined_warped_trapdoor", "chipped:warted_warped_trapdoor", "chipped:windowed_warped_trapdoor",
		"chipped:woven_warped_trapdoor", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
