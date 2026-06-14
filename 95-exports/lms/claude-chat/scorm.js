var SCORM = {
  api: null,
  initialized: false,

  findAPI: function(win) {
    var attempts = 0;
    while (win && !win.API && attempts < 10) {
      if (win.parent && win.parent !== win) {
        win = win.parent;
      } else if (win.opener) {
        win = win.opener;
      } else {
        break;
      }
      attempts += 1;
    }
    return win ? win.API || null : null;
  },

  init: function() {
    this.api = this.findAPI(window);
    if (!this.api) return 0;

    this.api.LMSInitialize("");
    this.initialized = true;

    var status = this.api.LMSGetValue("cmi.core.lesson_status");
    if (status === "" || status === "not attempted") {
      this.api.LMSSetValue("cmi.core.lesson_status", "incomplete");
    }
    this.api.LMSCommit("");

    var bookmark = this.api.LMSGetValue("cmi.core.lesson_location");
    return bookmark ? parseInt(bookmark, 10) || 0 : 0;
  },

  setPage: function(page) {
    if (!this.api) return;
    this.api.LMSSetValue("cmi.core.lesson_location", String(page));
    this.api.LMSCommit("");
  },

  saveSuspendData: function(data) {
    if (!this.api) return;
    var json = JSON.stringify(data);
    if (json.length <= 4096) {
      this.api.LMSSetValue("cmi.suspend_data", json);
      this.api.LMSCommit("");
    }
  },

  getSuspendData: function() {
    if (!this.api) return null;
    var raw = this.api.LMSGetValue("cmi.suspend_data");
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch (error) {
      return null;
    }
  },

  complete: function(score, passed) {
    if (!this.api) return;
    this.api.LMSSetValue("cmi.core.lesson_status", passed ? "passed" : "failed");
    this.api.LMSSetValue("cmi.core.score.raw", String(score));
    this.api.LMSSetValue("cmi.core.score.min", "0");
    this.api.LMSSetValue("cmi.core.score.max", "100");
    this.api.LMSCommit("");
  },

  finish: function() {
    if (!this.api || !this.initialized) return;
    var status = this.api.LMSGetValue("cmi.core.lesson_status");
    this.api.LMSSetValue("cmi.core.exit", status === "passed" ? "" : "suspend");
    this.api.LMSCommit("");
    this.api.LMSFinish("");
    this.initialized = false;
  }
};
