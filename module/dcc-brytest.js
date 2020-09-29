/* global Actors */

import * as BrytestSheets from './actor-sheets-brytest.js'

/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */
Hooks.once('init', async function () {
  console.log(`DCC | Initializing Dungeon Crawl Classics System -- BRYTEST!`)

  // Register sheet application classes
  Actors.registerSheet('dcc-brytest', BrytestSheets.ActorSheetBrytest)
})

