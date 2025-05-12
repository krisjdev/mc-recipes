// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:cobweb"
	var block_ids = [
		"chipped:broken_cobweb", "chipped:hanging_broken_cobweb", "chipped:cobweb_arch", "chipped:cobweb_floor",
		"chipped:dense_cobweb", "chipped:hanging_cobweb", "chipped:scattered_cobweb", "chipped:stretched_cobweb",
		"chipped:stringy_cobweb", "chipped:thick_cobweb_floor", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
