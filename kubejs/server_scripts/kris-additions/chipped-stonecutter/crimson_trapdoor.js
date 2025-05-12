// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:crimson_trapdoor"
	var block_ids = [
		"chipped:airy_crimson_trapdoor", "chipped:barred_crimson_trapdoor", "chipped:checkered_crimson_trapdoor", "chipped:classic_crimson_trapdoor",
		"chipped:classic_windowed_crimson_trapdoor", "chipped:cobweb_crimson_trapdoor", "chipped:distorted_crimson_trapdoor", "chipped:fancy_crimson_trapdoor",
		"chipped:golden_barred_crimson_trapdoor", "chipped:heavy_crimson_trapdoor", "chipped:iron_barred_crimson_trapdoor", "chipped:leafy_crimson_trapdoor",
		"chipped:meshed_crimson_trapdoor", "chipped:overgrown_crimson_trapdoor", "chipped:pointless_crimson_trapdoor", "chipped:slotted_crimson_trapdoor",
		"chipped:solid_crimson_trapdoor", "chipped:twisted_crimson_trapdoor", "chipped:vined_crimson_trapdoor", "chipped:warted_crimson_trapdoor",
		"chipped:windowed_crimson_trapdoor", "chipped:woven_crimson_trapdoor", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
