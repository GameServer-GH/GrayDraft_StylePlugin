/**
 * GrayDraft script plugin entry (JSC-friendly global pattern).
 * Host will evaluate this file and call activate / deactivate when supported.
 */
function activate() {
  if (typeof GrayDraft !== "undefined" && GrayDraft.UI && GrayDraft.UI.showNotification) {
    GrayDraft.UI.showNotification("GrayDraft Style plugin loaded", "success");
  }
}

function deactivate() {}
