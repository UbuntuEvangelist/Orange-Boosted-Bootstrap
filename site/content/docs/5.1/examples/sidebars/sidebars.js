/* global boosted: false */
(function () {
  'use strict'
  var tooltipTriggerList = Array.prototype.slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new boosted.Tooltip(tooltipTriggerEl)
  })
})()
