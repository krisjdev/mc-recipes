ServerEvents.recipes(event => {

    var source = "minecraft:acacia_log"

    var block_ids = [
        "bundled_acacia_log", "carved_stripped_acacia_log", "center_cut_acacia_log", "chipped_stripped_acacia_log",
        "d_sign_stripped_acacia_log", "damaged_acacia_log", "edge_cut_acacia_log", "edged_stripped_acacia_log",
        "f_sign_stripped_acacia_log", "firewood_acacia_log", "flowering_acacia_log", "i_sign_stripped_acacia_log",
        "k_sign_stripped_acacia_log", "knotted_stripped_acacia_log", "l_sign_stripped_acacia_log", "layered_stripped_acacia_log",
        "lumpy_stripped_acacia_log", "m_sign_stripped_acacia_log", "mixed_acacia_log", "nailed_acacia_log",
        "overgrown_acacia_log", "patient_stripped_acacia_log", "planked_acacia_log", "reinforced_acacia_log",
        "reinforced_stripped_acacia_log", "sign_stripped_acacia_log", "stern_stripped_acacia_log", "wise_stripped_acacia_log"
    ]

    block_ids.forEach(block => {
        event.stonecutting("chipped:" + block, source)
    })

})