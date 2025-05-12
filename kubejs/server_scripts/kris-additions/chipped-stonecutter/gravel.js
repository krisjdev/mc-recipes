// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:gravel"
	var block_ids = [
		"chipped:andesite_gravel", "chipped:dirty_gravel", "chipped:dusty_gravel", "chipped:orange_gravel",
		"chipped:rought_gravel", "chipped:sandy_gravel", "chipped:sifted_gravel", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
