// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:pearlescent_froglight"
	var block_ids = [
		"chipped:ad_astra_pearlescent_froglight", "chipped:ancient_pearlescent_froglight", "chipped:barred_pearlescent_froglight", "chipped:elemental_pearlescent_froglight",
		"chipped:exposed_pearlescent_froglight", "chipped:glass_pearlescent_froglight", "chipped:reinforced_pearlescent_froglight", "chipped:round_pearlescent_froglight",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
