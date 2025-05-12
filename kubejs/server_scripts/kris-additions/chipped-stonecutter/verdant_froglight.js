// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:verdant_froglight"
	var block_ids = [
		"chipped:ad_astra_verdant_froglight", "chipped:ancient_verdant_froglight", "chipped:barred_verdant_froglight", "chipped:elemental_verdant_froglight",
		"chipped:exposed_verdant_froglight", "chipped:glass_verdant_froglight", "chipped:reinforced_verdant_froglight", "chipped:round_verdant_froglight",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
