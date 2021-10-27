---
layout: docs
title: Quantity selector
description: Form element used to select a number.
group: components
toc: true
---

## Examples

Quantity selector is a form element used to select a number. For proper styling, use one of the two **required** contextual classes (e.g., `.quantity-selector-large`).

{{< example >}}
<div class="quantity-selector quantity-selector-large">
    <label class="input-group-text" for="inputQuantitySelector1">Quantity selector large: </label>
    <div class="input-group">
        <button type="button" class="btn btn-icon btn-secondary" data-bs-step="down">
            <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1">
                <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#remove" />
            </svg>
            <span class="visually-hidden">Step up</span>
        </button>
        <input type="text" inputmode="numeric" pattern="[0-9]*" id="inputQuantitySelector1" class="form-control"
            data-bs-step="counter" name="quantity" title="quantity" min="0" value="0" aria-label="Quantity selector">
        <button type="button" class="btn btn-icon btn-secondary" data-bs-step="up">
            <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1">
                <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#add" />
            </svg>
            <span class="visually-hidden">Step down</span>
        </button>
    </div>
</div>
<div class="quantity-selector quantity-selector-small">
    <label class="input-group-text" for="inputQuantitySelector2">Quantity selector small: </label>
    <div id="quantity-selectors-small" class="input-group">
        <button type="button" class="btn btn-icon btn-sm btn-secondary" data-bs-step="down">
            <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1">
                <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#remove" />
            </svg>
            <span class="visually-hidden">Step up</span>
        </button>
        <input type="text" inputmode="numeric" pattern="[0-9]*" id="inputQuantitySelector2" class="form-control"
            data-bs-step="counter" name="quantity" title="quantity" min="0" value="0" aria-label="Quantity selector">
        <button type="button" class="btn btn-sm btn-icon btn-secondary" data-bs-step="up">
            <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1">
                <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#add" />
            </svg>
            <span class="visually-hidden">Step down</span>
        </button>
    </div>
</div>
{{< /example >}}