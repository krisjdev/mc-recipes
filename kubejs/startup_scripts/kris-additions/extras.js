BlockEvents.modification(event => {
    event.modify("cataclysm:cursed_tombstone", block => {
        block.destroySpeed = 0.25
    })
})