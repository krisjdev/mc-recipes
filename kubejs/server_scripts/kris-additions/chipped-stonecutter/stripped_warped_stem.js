// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:stripped_warped_stem"
	var block_ids = [
		"chipped:carved_stripped_warped_stem", "chipped:chipped_stripped_warped_stem", "chipped:d_sign_stripped_warped_stem", "chipped:edged_stripped_warped_stem",
		"chipped:f_sign_stripped_warped_stem", "chipped:i_sign_stripped_warped_stem", "chipped:k_sign_stripped_warped_stem", "chipped:knotted_stripped_warped_stem",
		"chipped:l_sign_stripped_warped_stem", "chipped:layered_stripped_warped_stem", "chipped:lumpy_stripped_warped_stem", "chipped:m_sign_stripped_warped_stem",
		"chipped:patient_stripped_warped_stem", "chipped:reinforced_stripped_warped_stem", "chipped:sign_stripped_warped_stem", "chipped:stern_stripped_warped_stem",
		"chipped:wise_stripped_warped_stem", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
