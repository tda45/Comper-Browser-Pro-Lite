# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# NSIS branding defines for official release builds.

!define BrandFullNameInternal "Comper Browser Pro Lite"
!define BrandFullName         "Comper Browser Pro Lite"
!define CompanyName           "tda_45"
!define URLInfoAbout          "about:preferences"
!define URLUpdateInfo         "about:preferences"
!define HelpLink              "about:preferences"

!define OFFICIAL
!define URLStubDownloadX86 "about:blank"
!define URLStubDownloadAMD64 "about:blank"
!define URLStubDownloadAArch64 "about:blank"
!define URLManualDownload "about:blank"
!define URLSystemRequirements "about:blank"
!define Channel "release"

# The installer's certificate name and issuer expected by the stub installer
!define CertNameDownload   "tda_45"
!define CertIssuerDownload "tda_45 Internal Code Signing"

# Dialog units are used so the UI displays correctly with the system's DPI Settings.
!define PROFILE_CLEANUP_LABEL_TOP "50u"
!define PROFILE_CLEANUP_LABEL_LEFT "22u"
!define PROFILE_CLEANUP_LABEL_WIDTH "175u"
!define PROFILE_CLEANUP_LABEL_HEIGHT "100u"
!define PROFILE_CLEANUP_LABEL_ALIGN "left"
!define PROFILE_CLEANUP_CHECKBOX_LEFT "22u"
!define PROFILE_CLEANUP_CHECKBOX_WIDTH "175u"
!define PROFILE_CLEANUP_BUTTON_LEFT "22u"
!define INSTALL_HEADER_TOP "70u"
!define INSTALL_HEADER_LEFT "22u"
!define INSTALL_HEADER_WIDTH "180u"
!define INSTALL_HEADER_HEIGHT "100u"
!define INSTALL_BODY_LEFT "22u"
!define INSTALL_BODY_WIDTH "180u"
!define INSTALL_INSTALLING_TOP "115u"
!define INSTALL_INSTALLING_LEFT "270u"
!define INSTALL_INSTALLING_WIDTH "150u"
!define INSTALL_PROGRESS_BAR_TOP "100u"
!define INSTALL_PROGRESS_BAR_LEFT "270u"
!define INSTALL_PROGRESS_BAR_WIDTH "150u"
!define INSTALL_PROGRESS_BAR_HEIGHT "12u"

!define PROFILE_CLEANUP_CHECKBOX_TOP_MARGIN "12u"
!define PROFILE_CLEANUP_BUTTON_TOP_MARGIN "12u"
!define PROFILE_CLEANUP_BUTTON_X_PADDING "80u"
!define PROFILE_CLEANUP_BUTTON_Y_PADDING "8u"
!define INSTALL_BODY_TOP_MARGIN "20u"

# Font settings that can be customized for each channel
!define INSTALL_HEADER_FONT_SIZE 20
!define INSTALL_HEADER_FONT_WEIGHT 600
!define INSTALL_INSTALLING_FONT_SIZE 15
!define INSTALL_INSTALLING_FONT_WEIGHT 600

# UI Colors - Gece Kırmızısı Teması (tda_45 Özel)
!define COMMON_TEXT_COLOR 0xE0E0E0
!define COMMON_BACKGROUND_COLOR 0x121212
!define INSTALL_INSTALLING_TEXT_COLOR 0xFF0000
!define PROGRESS_BAR_BACKGROUND_COLOR 0x0000FF