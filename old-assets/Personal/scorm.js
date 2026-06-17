var SCORM = {
  api: null,

  findAPI: function(win) {
    var attempts = 0;
    while (win && !win.API && attempts < 10) {
      if (win.parent && win.parent !== win) { win = win.parent; }
      else if (win.opener) { win = win.opener; }
      else { break; }
      attempts++;
    }
    return win ? win.API || null : null;
  },

  init: function() {
    this.api = this.findAPI(window);
    if (this.api) {
      this.api.LMSInitialize("");
      var status = this.api.LMSGetValue("cmi.core.lesson_status");
      if (status === "" || status === "not attempted") {
        this.api.LMSSetValue("cmi.core.lesson_status", "incomplete");
      }
      this.api.LMSCommit("");
      var bookmark = this.api.LMSGetValue("cmi.core.lesson_location");
      if (bookmark) { return parseInt(bookmark, 10) || 0; }
    }
    return 0;
  },

  setPage: function(page) {
    if (this.api) {
      this.api.LMSSetValue("cmi.core.lesson_location", String(page));
      this.api.LMSCommit("");
    }
  },

  saveSuspendData: function(data) {
    if (this.api) {
      var json = JSON.stringify(data);
      if (json.length <= 4096) {
        this.api.LMSSetValue("cmi.suspend_data", json);
        this.api.LMSCommit("");
      }
    }
  },

  getSuspendData: function() {
    if (this.api) {
      var raw = this.api.LMSGetValue("cmi.suspend_data");
      if (raw) {
        try { return JSON.parse(raw); } catch(e) { return null; }
      }
    }
    return null;
  },

  complete: function(score) {
    if (this.api) {
      this.api.LMSSetValue("cmi.core.lesson_status", "passed");
      this.api.LMSSetValue("cmi.core.score.raw", String(score));
      this.api.LMSSetValue("cmi.core.score.min", "0");
      this.api.LMSSetValue("cmi.core.score.max", "100");
      this.api.LMSCommit("");
    }
  },

  finish: function() {
    if (this.api) {
      var status = this.api.LMSGetValue("cmi.core.lesson_status");
      if (status === "completed" || status === "passed") {
        this.api.LMSSetValue("cmi.core.exit", "");
      } else {
        this.api.LMSSetValue("cmi.core.exit", "suspend");
      }
      this.api.LMSCommit("");
      this.api.LMSFinish("");
    }
  }
};
