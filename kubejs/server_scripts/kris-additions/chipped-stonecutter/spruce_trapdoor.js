// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:spruce_trapdoor"
	var block_ids = [
		"chipped:airy_spruce_trapdoor", "chipped:barred_spruce_trapdoor", "chipped:checkered_spruce_trapdoor", "chipped:classic_spruce_trapdoor",
		"chipped:classic_windowed_spruce_trapdoor", "chipped:cobweb_spruce_trapdoor", "chipped:distorted_spruce_trapdoor", "chipped:fancy_spruce_trapdoor",
		"chipped:golden_barred_spruce_trapdoor", "chipped:iron_barred_spruce_trapdoor", "chipped:leafy_spruce_trapdoor", "chipped:meshed_spruce_trapdoor",
		"chipped:overgrown_spruce_trapdoor", "chipped:pointless_spruce_trapdoor", "chipped:slotted_spruce_trapdoor", "chipped:solid_spruce_trapdoor",
		"chipped:suspicious_spruce_trapdoor", "chipped:twisted_spruce_trapdoor", "chipped:vined_spruce_trapdoor", "chipped:warted_spruce_trapdoor",
		"chipped:windowed_spruce_trapdoor", "chipped:woven_spruce_trapdoor", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
