ServerEvents.recipes(event => {

    event.custom({
        type: "alchemistry:compactor",
        group: "alchemistry:compactor",
        input: {
            count: 16,
            ingredient: {
                item: "chemlib:plutonium"
            }
        },
        result: {
            item: "mekanism:pellet_plutonium"
        }
    })

    event.custom({
        type: "alchemistry:compactor",
        group: "alchemistry:compactor",
        input: {
            count: 16,
            ingredient: {
                item: "chemlib:polonium"
            }
        },
        result: {
            item: "mekanism:pellet_polonium"
        }
    })

})