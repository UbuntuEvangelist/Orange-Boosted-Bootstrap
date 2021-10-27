/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): _orange-quantity-selector.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

import { defineJQueryPlugin } from './util/index'
import BaseComponent from './base-component'

/**
* ------------------------------------------------------------------------
* Constants
* ------------------------------------------------------------------------
*/

const NAME = 'QuantitySelector'

const STEP_UP_BUTTON = document.querySelectorAll('[data-bs-step=\'up\']')
const STEP_DOWN_BUTTON = document.querySelectorAll('[data-bs-step=\'down\']')

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

  step_up() {
    for (const BUTTON of STEP_UP_BUTTON) {
      BUTTON.addEventListener('click', () => {
        console.log('up')
        const PARENT = BUTTON.closest('.input-group')
        const COUNTER_INPUT = PARENT.querySelector('[data-bs-step=\'counter\']')
        COUNTER_INPUT.value = ++COUNTER_INPUT.value
      })
    }
  }

  step_down() {
    for (const BUTTON of STEP_DOWN_BUTTON) {
      BUTTON.addEventListener('click', () => {
        console.log('down')
        const PARENT = BUTTON.closest('.input-group')
        const COUNTER_INPUT = PARENT.querySelector('[data-bs-step=\'counter\']')
        COUNTER_INPUT.value = --COUNTER_INPUT.value
      })
    }
  }
}

/**
* ------------------------------------------------------------------------
* jQuery
* ------------------------------------------------------------------------
*/

defineJQueryPlugin(QuantitySelector)

export default QuantitySelector
