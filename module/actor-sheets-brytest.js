/**
 * DCC Kith character sheet overrides
 */

import DCCActorSheet from '/systems/dcc/module/actor-sheet.js'

/**
 * Extend the zero-level/NPC sheet for Brytest 
 * @extends {DCCActorSheet}
 */
class ActorSheetBrytest extends DCCActorSheet {
  /** @override */
  getData () {
    const data = super.getData()
    this.options.template = 'modules/dcc-kith/templates/actor-sheet-brytest.html'
    data.data.class.className = 'Brytest'

    // Add in Kith specific data if missing
    if (!data.data.skills.tracking) {
      this.actor.update({
        'data.skills.tracking': {
          label: 'Brytest.Tracking',
          value: '+1'
        }
      })
    }
    if (!data.data.skills.detectTraps) {
      this.actor.update({
        'data.skills.detectTraps': {
          label: 'Brytest.DetectTraps',
          value: '+1'
        }
      })
    }
    if (!data.data.skills.detectHiddenFoes) {
      this.actor.update({
        'data.skills.detectHiddenFoes': {
          label: 'Brytest.DetectHiddenFoes',
          value: '+1'
        }
      })
    }
    if (!data.data.skills.burnDie) {
      this.actor.update({
        'data.skills.burnDie': {
          label: 'Brytest.BurnDie',
          die: '1d3'
        }
      })
    }

    return data
  }
}

export {
  ActorSheetBrytest
}
