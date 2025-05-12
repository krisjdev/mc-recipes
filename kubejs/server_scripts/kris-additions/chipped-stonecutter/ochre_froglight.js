// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:ochre_froglight"
	var block_ids = [
		"chipped:ad_astra_ochre_froglight", "chipped:ancient_ochre_froglight", "chipped:barred_ochre_froglight", "chipped:elemental_ochre_froglight",
		"chipped:exposed_ochre_froglight", "chipped:glass_ochre_froglight", "chipped:reinforced_ochre_froglight", "chipped:round_ochre_froglight",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
