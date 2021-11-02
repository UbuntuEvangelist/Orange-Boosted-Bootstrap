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

const SELECTOR_STEP_UP_BUTTON = '[data-bs-step="up"]'
const SELECTOR_STEP_DOWN_BUTTON = '[data-bs-step="down"]'
const SELECTOR_COUNTER_INPUT = '[data-bs-step="counter"]'
const SELECTOR_INPUT_GROUP = '.input-group'
const SELECTOR_ALLOW_NEGATIVES_VALUES = 'allow-negatives-values'

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
    const PARENT = event.target.closest(SELECTOR_INPUT_GROUP)
    const COUNTER_INPUT = PARENT.querySelector(SELECTOR_COUNTER_INPUT)

    if (COUNTER_INPUT.value >= 0 || PARENT.classList.contains(SELECTOR_ALLOW_NEGATIVES_VALUES)) {
      COUNTER_INPUT.value = ++COUNTER_INPUT.value
    }
  }

  static StepDown(event) {
    event.preventDefault()
    const PARENT = event.target.closest(SELECTOR_INPUT_GROUP)
    const COUNTER_INPUT = PARENT.querySelector(SELECTOR_COUNTER_INPUT)

    if (COUNTER_INPUT.value > 0 || PARENT.classList.contains(SELECTOR_ALLOW_NEGATIVES_VALUES)) {
      COUNTER_INPUT.value = --COUNTER_INPUT.value
    }
  }
}

// JavaScript starter for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_STEP_UP_BUTTON, QuantitySelector.StepUp)
EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_STEP_DOWN_BUTTON, QuantitySelector.StepDown)

/**
* ------------------------------------------------------------------------
* jQuery
* ------------------------------------------------------------------------
*/

defineJQueryPlugin(QuantitySelector)

export default QuantitySelector
