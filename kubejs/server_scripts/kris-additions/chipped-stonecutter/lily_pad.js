// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:lily_pad"
	var block_ids = [
		"chipped:big_flower_lily_pad", "chipped:broken_lily_pad", "chipped:dark_broken_lily_pad", "chipped:dark_flowering_lily_pad",
		"chipped:dark_large_lily_pad", "chipped:dark_leaf_lily_pad", "chipped:dark_micro_lily_pads", "chipped:dark_paddle_lily_pad",
		"chipped:dark_rough_lily_pad", "chipped:dark_smol_lily_pad", "chipped:dark_smooth_lily_pad", "chipped:flowering_lily_pad",
		"chipped:large_lily_pad", "chipped:leaf_lily_pad", "chipped:light_leaf_lily_pad", "chipped:light_rough_lily_pad",
		"chipped:micro_lily_pads", "chipped:pacman_lily_pad", "chipped:paddle_lily_pad", "chipped:rough_lily_pad",
		"chipped:smol_lily_pad", "chipped:smooth_lily_pad", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
