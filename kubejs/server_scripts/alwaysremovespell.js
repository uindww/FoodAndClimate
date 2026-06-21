PlayerEvents.tick(event => {
  if (event.player.age % 20 === 0) {
    event.server.runCommand(`clear ${event.player.username} dcs_climate:magic/card_red_green`);
  }
})
