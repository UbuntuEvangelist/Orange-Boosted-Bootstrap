/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): _orange-quantity-selector.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

import { defineJQueryPlugin } from './util/index'
import EventHandler from './dom/event-handler'
import BaseComponent from './base-component'

/**
* ------------------------------------------------------------------------
* Constants
* ------------------------------------------------------------------------
*/

const NAME = 'quantityselector'

const DATA_KEY = 'bs.quantityselector'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'

const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`

// const STEP_UP_BUTTON = document.querySelectorAll('[data-bs-step=\'up\']')
// const STEP_DOWN_BUTTON = document.querySelectorAll('[data-bs-step=\'down\']')

const STEP_UP_BUTTON = '[data-bs-step="up"]'
const STEP_DOWN_BUTTON = '[data-bs-step="down"]'
const INPUT_GROUP = '.input-group'

/**
* ------------------------------------------------------------------------
* Class Definition
* ------------------------------------------------------------------------
*/

class QuantitySelector extends BaseComponent {
  // Getters
  static get NAME() {
    return NAME
  }

  // Public
  static StepUp(event) {
      event.preventDefault()
      const PARENT = event.target.closest(INPUT_GROUP)
      const COUNTER_INPUT = PARENT.querySelector('[data-bs-step=\'counter\']')
      COUNTER_INPUT.value = ++COUNTER_INPUT.value
  }

  static StepDown(event) {
      event.preventDefault()
      const PARENT = event.target.closest(INPUT_GROUP)
      const COUNTER_INPUT = PARENT.querySelector('[data-bs-step=\'counter\']')
      COUNTER_INPUT.value = --COUNTER_INPUT.value
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

EventHandler.on(document, EVENT_CLICK_DATA_API, STEP_UP_BUTTON, QuantitySelector.StepUp)
EventHandler.on(document, EVENT_CLICK_DATA_API, STEP_DOWN_BUTTON, QuantitySelector.StepDown)

/**
* ------------------------------------------------------------------------
* jQuery
* ------------------------------------------------------------------------
*/

defineJQueryPlugin(QuantitySelector)

export default QuantitySelector
