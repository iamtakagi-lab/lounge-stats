export default async ({ store }) => {
  if (!store.state.players.length) await store.dispatch('getPlayers')
}