/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// This file contains branding-specific prefs for Comper Browser Pro Lite.

pref("startup.homepage_override_url", "about:blank");
pref("startup.homepage_welcome_url", "about:blank");
pref("startup.homepage_welcome_url.additional", "");

// Interval: Time between checks for a new version (in seconds)
// Devre dışı bırakmak ve Mozilla sunucularını yormamak adına süreleri maksimuma çekiyoruz
pref("app.update.interval", 999999999); 
pref("app.update.promptWaitTime", 999999999);

#if MOZ_UPDATE_CHANNEL == beta
  pref("app.update.url.manual", "about:blank");
  pref("app.update.url.details", "about:blank");
  pref("app.releaseNotesURL", "about:blank");
  pref("app.releaseNotesURL.aboutDialog", "about:blank");
#elifdef MOZ_ESR
  pref("app.update.url.manual", "about:blank");
  pref("app.update.url.details", "about:blank");
  pref("app.releaseNotesURL", "about:blank");
  pref("app.releaseNotesURL.aboutDialog", "about:blank");
#else
  pref("app.update.url.manual", "about:blank");
  pref("app.update.url.details", "about:blank");
  pref("app.releaseNotesURL", "about:blank");
  pref("app.releaseNotesURL.aboutDialog", "about:blank");
#endif
pref("app.releaseNotesURL.prompt", "about:blank");

// The number of days a binary is permitted to be old
pref("app.update.checkInstallTime.days", 9999);

// Give the user x seconds to reboot before showing a badge on the hamburger button.
pref("app.update.badgeWaitTime", 999999999);

// Number of usages of the web console.
// 5 veya daha yüksek yapılarak konsola doğrudan güvenli şekilde kod yapıştırma (Self-XSS bypass) aktif edilir.
pref("devtools.selfxss.count", 5);