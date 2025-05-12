ServerEvents.recipes(event => {

    event.shaped(
        Item.of("forbidden_arcanus:soul", 4),
        [
            "CSC",
            "SES",
            "CSC"
        ],
        {
            C: "forbidden_arcanus:arcane_crystal_dust",
            S: "minecraft:soul_sand",
            E: "minecraft:ender_pearl"
        }
    )

    event.shaped(
        Item.of("forbidden_arcanus:corrupt_soul", 4),
        [
            "CSC",
            "SBS",
            "CSC"
        ],
        {
            C: "forbidden_arcanus:arcane_crystal_dust",
            S: "minecraft:soul_sand",
            B: "quark:soul_bead"
        }
    )

    event.shaped(
        Item.of("forbidden_arcanus:enchanted_soul", 1),
        [
            "CSC",
            "SES",
            "CSC"
        ],
        {
            C: "forbidden_arcanus:arcane_crystal_dust",
            S: "minecraft:soul_sand",
            E: "minecraft:echo_shard"
        }
    )

    event.shaped(
        Item.of("aquaculture:neptunium_ingot", 4),
        [
            " V ",
            "VSV",
            " V "
        ],
        {
            V: "allthemodium:vibranium_ingot",
            S: "minecraft:heart_of_the_sea",
        }
    )

    event.shapeless(
        Item.of("minecraft:obsidian", 64),
        [
            "twilightforest:giant_obsidian"
        ]
    )

})