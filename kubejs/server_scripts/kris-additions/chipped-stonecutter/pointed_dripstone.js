// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:pointed_dripstone"
	var block_ids = [
		"chipped:andesite_pointed_dripstone", "chipped:calcite_pointed_dripstone", "chipped:deepslate_pointed_dripstone", "chipped:diorite_pointed_dripstone",
		"chipped:smooth_basalt_pointed_dripstone", "chipped:granite_pointed_dripstone", "chipped:stone_pointed_dripstone", "chipped:tuff_pointed_dripstone",
		"chipped:basalt_pointed_dripstone", "chipped:blackstone_pointed_dripstone", "chipped:endstone_pointed_dripstone", "chipped:netherrack_pointed_dripstone",
		"chipped:packed_ice_pointed_dripstone", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
