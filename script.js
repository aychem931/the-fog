/* ========================= */
/* FOG LAYER — PHASE 1       */
/* ========================= */

function activateFogLayer() {
  document.body.classList.add("fog-active");
}

// Trigger fog 3 seconds after page loads
setTimeout(activateFogLayer, 3000);
