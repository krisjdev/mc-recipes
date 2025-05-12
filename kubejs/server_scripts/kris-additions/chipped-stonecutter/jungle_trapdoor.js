// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:jungle_trapdoor"
	var block_ids = [
		"chipped:airy_jungle_trapdoor", "chipped:barred_jungle_trapdoor", "chipped:checkered_jungle_trapdoor", "chipped:classic_jungle_trapdoor",
		"chipped:classic_windowed_jungle_trapdoor", "chipped:cobweb_jungle_trapdoor", "chipped:distorted_jungle_trapdoor", "chipped:golden_barred_jungle_trapdoor",
		"chipped:heavy_jungle_trapdoor", "chipped:iron_barred_jungle_trapdoor", "chipped:leafy_jungle_trapdoor", "chipped:meshed_jungle_trapdoor",
		"chipped:overgrown_jungle_trapdoor", "chipped:pointless_jungle_trapdoor", "chipped:slotted_jungle_trapdoor", "chipped:solid_jungle_trapdoor",
		"chipped:suspicious_jungle_trapdoor", "chipped:twisted_jungle_trapdoor", "chipped:vined_jungle_trapdoor", "chipped:warted_jungle_trapdoor",
		"chipped:windowed_jungle_trapdoor", "chipped:woven_jungle_trapdoor", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
