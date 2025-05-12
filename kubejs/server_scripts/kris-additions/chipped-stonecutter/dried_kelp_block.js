// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:dried_kelp_block"
	var block_ids = [
		"chipped:bamboo_dried_kelp_block", "chipped:blue_dried_kelp_block", "chipped:brown_dried_kelp_block", "chipped:compact_dried_kelp_block",
		"chipped:crimson_dried_kelp_block", "chipped:leafy_dried_kelp_block", "chipped:mossy_dried_kelp_block", "chipped:netherwart_dried_kelp_block",
		"chipped:rough_crimson_dried_kelp_block", "chipped:shroomy_dried_kelp_block", "chipped:sugarcane_dried_kelp_block", "chipped:wart_dried_kelp_block",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
