# Manifest Studio — New Tab (v1.7.9)

A customizable Chrome new-tab dashboard. This release adds a set of productivity and personalization capabilities after reviewing MYNT Material You New Tab v3.3. The features are independently implemented for Manifest Studio; MYNT's JavaScript modules and translation files are not bundled.

## Features

- Neomorphic dark dashboard with separate Dark, Light and Follow System appearance modes.
- Theme Studio with eight visual presets and fourteen live-editable color tokens per appearance mode.
- Analog, digital, or combined clock; 12/24-hour format; optional seconds hand and digital seconds; independent greeting/date visibility.
- GPS-based local weather with reverse-geocoded place name, Open-Meteo forecasts, and manual city fallback.
- Search across Google, DuckDuckGo, Bing, Brave, YouTube, Images, Reddit, Wikipedia and Quora.
- Google autocomplete suggestions with arrow-key selection and optional browser voice search.
- Editable quick links with favicons, inline rename/URL editing, drag-and-drop ordering, and move up/down controls.
- Optional native Chrome bookmarks panel with search, grid/list view, A–Z/recent sorting, add, edit and delete actions.
- Collapsible AI launcher with editable providers and ordering controls.
- Google Apps launcher.
- To-do list with add, edit, complete, delete and clear-completed actions.
- Persistent notes, daily quote selection, optional personal message.
- Wallpaper upload, random wallpaper, dimming and widget transparency controls.
- Per-module visibility settings.
- JSON backup and restore for Manifest Studio settings, quick links, AI links, notes and tasks.

## Permissions and external services

- `bookmarks` is an optional Chrome permission. Manifest Studio requests it only when the browser-bookmarks panel is opened.
- Device location is requested through the browser Geolocation API. Coordinates are sent to Open-Meteo for weather and to BigDataCloud for reverse geocoding. A manual city fallback is available.
- Search suggestions are requested from Google's autocomplete endpoint when text is entered in the search box.
- Google favicon images, remote AI brand icons, Google Fonts and the random wallpaper source require an internet connection.
- Voice search depends on browser support for the Web Speech API.
- Settings, quick links, AI links, notes and tasks are stored locally in the extension's browser storage origin. Exported backups are JSON files chosen by the user.

## Install

1. Extract the ZIP archive.
2. Open `chrome://extensions` in Chrome or a Chromium-based browser.
3. Enable **Developer mode**.
4. Choose **Load unpacked** and select the extracted `Manifest Studio` folder.
5. Open a new tab. Grant location access when prompted if GPS weather is desired. Grant bookmark access only when using the browser-bookmarks panel.

## Compatibility notes

The interface remains English in this release; dates and times are formatted with the browser's locale. MYNT's full 30-language UI translation pack, its custom proxy option, and its WeatherAPI-key workflow were not ported. Manifest Studio retains its Open-Meteo weather integration and does not route search suggestions through a third-party proxy.


## v1.5.2 visual update

- Reworked the interface from pronounced neumorphic surfaces to a minimal, flat dark visual system with restrained borders and optional subtle shadows.
- Added a homepage plus button beside the quick-link bookmark bar for fast bookmark creation.
- Added fine appearance controls for interface font, corner radius, card spacing, UI scale, border intensity and shadow intensity.
- Added the supplied ChatGPT, Gemini, Claude, Copilot, DeepSeek, Perplexity and Qwen SVG logo files under `Manifest Studio/assets/ai/`. AI logo assets are loaded locally; no remote icon service is needed for these brands.


## v1.5.2 UI refinements
- Replaced the voice-search emoji with the supplied inline microphone SVG.
- Added a visible dropdown chevron to the search-engine selector.
- Moved browser bookmarks and Google Apps actions into a top-right utility area, outside the bookmark bar.
- Moved Notes and To-do into independent, collapsible top-left panels with saved collapsed states.
- Enlarged the daily quote treatment and redesigned the weather card with a location row and clearer metric tiles.

## v1.5.2 dashboard refinements
- Added the supplied SVG microphone icon to voice search.
- Restored a visible chevron in the search-engine selector.
- Moved the browser bookmarks and Google Apps controls to a separate top-right utility area.
- Moved Notes and To-do into separate collapsible top-left panels; each collapsed state is saved locally.
- Increased the size and visual emphasis of the daily quote.
- Reworked the weather card with a larger condition/temperature header, visible location row and clearer metric tiles.


## v1.5.3 UI refinements
- Custom theme-matched search-engine dropdown with keyboard support.
- Google Apps panel is positioned relative to its launcher button and flips above when needed.
- AI provider SVGs render as monochrome accent-colored masks.


## v1.5.4 fixes
- Live time-period greeting refreshes every second without a tab reload.
- Search-engine menu buttons are fully scoped to avoid inheriting circular search-button styles.
- Google Apps panel uses custom monochrome line glyphs with readable accent contrast.
- AI logos use transparent monochrome path-only SVG assets derived from the supplied provider logos.


## v1.5.5 — Chrome profile bookmarks
- Clicking the bookmark utility requests Chrome optional `bookmarks` permission from a direct user gesture.
- When granted, Manifest Studio reads and lists bookmarks from the active Chrome profile, grouped by folder.
- The collapsible bookmarks flyout is anchored to the top-right bookmark utility.
- Permission is not requested automatically; users can decline and continue using Manifest Studio.


## v1.5.6 — Full-size Chrome bookmark workspace
- Bookmark panel is now a large, full-height workspace anchored to the right edge.
- Chrome bookmarks render in folder sections with larger favicon tiles and grid/list modes.
- Search, sorting, add, edit and delete remain available.
- Removed the LOCAL WEATHER badge.
- Notes Clear now clears immediately and reports storage status.
- To-do Clear done removes completed items and reports the count.
- Cleanup controls use the current accent color.
- Weather icon and text are non-selectable.


## v1.5.7 visual refinements
- Compact two-column AI tool dock with normalized 30px logo boxes.
- Smaller right-side Chrome bookmarks flyout, positioned below the bookmark control.
- Monochrome SVG weather icons with daylight-aware sun/moon variants.
- Weather icon tile uses a flat surface rather than an accent gradient.
- Temperatures display °C/°F and an explicit Celsius/Fahrenheit label.


## v1.5.8 — Dropdown and weather polish
- Temperature now shows only the compact °C or °F unit; removed the redundant Celsius/Fahrenheit label.
- Search-engine selector width adapts to the selected label while keeping the chevron inside the pill.
- Standardized dropdown arrow placement and right padding across settings and bookmark controls.
- Refined the monochrome weather SVG icon family for clearer sun, moon, cloud, fog, rain, snow and storm states.


## v1.5.9 — Full search engine labels
- Selected search engine labels now size the trigger to their full text.
- Removed the fixed max-width and ellipsis truncation from the selected engine name.
- Kept the chevron in a fixed flex slot inside the trigger.
- Search input flexes to use remaining bar space.


## v1.6.0 — Light-first and custom menus
- First-run theme is Light; any theme choice already saved by an existing user is preserved.
- All remaining selects (theme, clock, font, temperature units, time format, bookmark sort and view) use custom themed dropdowns with keyboard navigation.
- AI tool launcher now uses a single-column list.
- Smooth menu transitions added, with reduced-motion support.


## v1.6.1 — Horizontal AI pill rail
- AI tools now appear in a single horizontal scrollable row of large rounded pills.
- AI Tools launcher remains on the left, followed by a vertical divider.
- Provider labels and monochrome accent logos are aligned in each pill.
- Rail adapts to tablet and mobile widths while preserving horizontal scrolling.


## v1.6.2 — Compact AI pill rail
- Reduced desktop AI launcher height to 70px and provider pill height to 70px.
- Reduced provider icons to 42px and labels to 19px.
- Reduced pill widths and gaps while keeping the horizontal scroll rail.
- Added smaller tablet and mobile proportions.


## v1.6.3 — Extra-compact AI pill rail
- Reduced desktop AI toolbar and provider pills to 54px high.
- Reduced desktop provider icons to 32px and text to 15px.
- Reduced launcher pill, divider and spacing to match the compact provider row.
- Added further compact tablet and mobile dimensions.


## v1.6.4 — AI rail spacing
- AI Tools divider is hidden while the provider rail is collapsed.
- Divider appears only while the provider list is visibly expanded.
- Divider is centered in the gap between the launcher and first pill.
- Vertical alignment and spacing are tuned for desktop, tablet and mobile.


## v1.6.5 — AI rail hover and Settings fixes
- Removed hover translation that was clipping the AI pill border.
- Added internal vertical breathing room to the horizontally scrollable provider rail.
- Preserved accent border hover/focus states without moving the pill.
- Added wheel-to-horizontal scrolling for mouse users.
- Prevented the full-width AI dock wrapper from intercepting unrelated clicks.
- Raised the Settings gear and settings panel stacking order so Settings remains clickable.


## v1.6.6 — Fixed AI rail without visible scrollbar
- Hides the AI provider rail scrollbar in all supported browsers.
- Horizontal scrolling remains active for wheel, trackpad and touch.
- Reserves a fixed rail height and centers pills to prevent vertical movement.
- Keeps consistent geometry across desktop, tablet and mobile breakpoints.


## v1.6.7 — Short AI rail divider
- Shortened the vertical separator to 26px on desktop, 23px on tablet and 20px on mobile.
- Kept the separator absolutely positioned at the center of the launcher/rail gap.
- Separator remains visible only while the provider rail is expanded.
- Divider dimensions do not participate in flex sizing and cannot change the rail's position.


## v1.6.8 — AI rail vertical alignment
- The expanded AI provider rail now has exactly the same outer height as the AI Tools launcher.
- Desktop rail/launcher height: 54px; tablet: 48px; mobile: 44px.
- Provider pills sit slightly shorter inside the shared rail height for balanced top/bottom breathing room.
- Opening the provider list no longer increases the dock height or shifts the launcher vertically.
- Scrollbar remains invisible and horizontal scrolling remains enabled.


## v1.6.9 — Restore AI tools dropdown
- AI Tools button is fixed at bottom-left.
- Provider list opens as a dropdown panel above the launcher, rather than inline beside it.
- Providers remain in a single horizontal, swipeable/scrollable row inside the dropdown.
- Scrollbar remains hidden.
- The launcher stays anchored in place when the list opens.
- Dropdown panel uses the current theme and accent-colored hover borders.


## v1.7.0 — Custom wallpaper picker and transparent cards
- Replaced the browser-native wallpaper file button with a themed custom upload control and selected-file name.
- Added independent transparent-background switches for the time, weather, notes, to-do/task, quick bookmarks, Chrome bookmarks panel, search bar, daily quote, AI tools menu and Google apps menu.
- Each transparency choice is saved independently and applies immediately.
- Transparent mode removes the card fill and shadow while retaining content, layout and borders.
- Existing installations retain their current appearance until a transparency switch is enabled.


## v1.7.1 — AI menu restored to v1.6.8
- Restored the compact inline horizontal AI rail layout from the v1.6.8 reference build.
- AI Tools launcher stays on the left; provider pills sit beside it in the same horizontal row.
- Provider list remains horizontally scrollable with an invisible scrollbar.
- Divider is visible only while the provider list is expanded.
- Removed the separate popup panel background and dropdown entrance animation.
- Retained v1.7.0 custom wallpaper picker and all ten transparent-card settings.


## v1.7.2 — AI rail width correction
- Removed the stale 520px max-width inherited from the v1.6.9 dropdown dock.
- AI dock now spans the available viewport width between responsive side insets.
- Launcher remains fixed on the left; the AI pills use the remaining horizontal space.
- Overflow is constrained to the provider rail itself, so all providers can be reached by horizontal scrolling.
- Preserved v1.6.8 inline rail appearance and v1.7.0 wallpaper/transparent-card settings.


## v1.7.3 — Outside-click and full transparency fix
- Settings drawer now closes when clicking outside it, excluding its gear trigger.
- Existing outside-click dismissal remains in place for the search-engine dropdown, search suggestions, custom settings dropdowns, Google Apps menu, AI menu and Chrome bookmarks panel.
- Per-card transparency now propagates to independently-filled nested surfaces: weather metrics/icon tile, notes textarea, task input/rows, quick bookmark pills, Chrome bookmark tiles, search capsule/engine trigger, AI provider pills and Google Apps tiles.
- Transparent mode preserves content and card outlines while removing nested fills and shadows.


## v1.7.4 — AI dock arrow and full transparency
- Changed the AI Tools dropdown indicator to a right-pointing chevron; it flips left while expanded.
- The existing “AI tools menu” transparency option now applies to the complete AI dock: launcher pill, icon orb, divider, provider rail and provider pills.
- The transparency setting remains independently saved and is applied through the existing settings control.


## v1.7.5 — Creator credit
- Added a subtle “Designed & developed by” credit at the bottom of the Settings panel.
- Links the creator name to the GitHub profile in a new tab.
- Uses the current theme and accent colors.


## v1.7.6 — AI launcher chevron alignment
- Positions the right/left AI menu chevron absolutely at 50% vertical alignment inside the launcher.
- Keeps the chevron from affecting the label/icon flex spacing.
- Preserves the direction change when the AI rail is expanded.
- Applies responsive sizing for tablet and mobile.


## v1.7.7 — Creator profile and persistent random wallpaper
- Updated the Settings creator credit to https://github.com/ifeelSoumyajit.
- Random Wallpaper now downloads and compresses the selected image into a saved JPEG data URL when the button is clicked.
- The selected random wallpaper is persisted in Manifest Studio settings and stays unchanged across tab refreshes.
- Refreshing the tab no longer triggers a new random wallpaper; only clicking Random wallpaper selects another image.
- User-uploaded wallpapers and Remove wallpaper behavior remain supported.


## v1.7.8 — Monospace default and Openverse wallpaper search
- Monospace is now the default font on fresh installs; existing installations are migrated from the previous default System font once while preserving other explicit font choices.
- Added an in-settings Openverse image search with previews, pagination, creator information, licence links, source links and one-click wallpaper application.
- Wallpaper URLs from secure HTTPS sources are now accepted and persisted, so selected Openverse wallpapers remain after refresh.
- Added the Openverse API host permission. Anonymous API requests are used; no API key is embedded.


## v1.7.9 — Manifest Studio rebrand
- Chrome extension name is now **Manifest Studio**.
- Browser tab title is **Manifest Studio - New Tab**.
- Distribution folder is **MSNT - Manifest Studio New Tab**.
- Existing local settings storage keys are retained so upgrades preserve user preferences.
- Import remains compatible with older DarkTab backup JSON files; new exports use the Manifest Studio backup identifier.


## v1.8.2 — One-time Chrome bookmark permission
- Kept `bookmarks` as an optional permission; it is not requested during installation.
- Clicking the Chrome bookmarks button invokes Chrome's native permission prompt from the user gesture.
- Fixed the pre-permission API check that could block the prompt before `chrome.bookmarks` was exposed.
- After approval, the extension reads and displays the current Chrome profile bookmark tree.
- Chrome remembers the grant for future new tabs. The user can revoke it later in the extension's site access/permissions controls.
- If permission is declined, bookmarks remain inaccessible and the rest of the new-tab extension continues to work.


## v1.8.3 — Bookmark workspace refinements
- Chrome profile bookmark panel now uses a high-opacity frosted-glass background with strong backdrop blur; it is not configured as a transparent panel.
- Added an edit control beside homepage quick links. It opens an inline editor to add apps, edit app names/URLs, and delete quick links without opening Settings.


## v1.8.4 — Bookmark permission and panel sizing
- Chrome bookmark workspace width now matches the 390px Settings drawer (responsive on narrow screens).
- Added a Chrome bookmark access control in Settings. The user sees an in-extension confirmation before Chrome's native optional-permission prompt appears.
- Opening the bookmark panel no longer triggers a permission prompt; it displays guidance to Settings when access has not been granted.
- Removed the homepage quick-link plus button; the Edit control remains the single homepage management entry point.


## v1.8.5 — text-only bookmark list
- Removed favicon/logo tiles from Chrome bookmarks.
- Chrome bookmarks now display as clean, single-column website-name rows grouped under their original folders.
- Removed the Grid/List selector because the bookmark panel now uses the requested list layout consistently.
- Search, sorting, edit and delete actions remain available.


## v1.8.6 — Bookmark panel redesign
- Redesigned only the Chrome bookmark panel with a compact directory-style layout.
- Reduced website row height to 29px, removed inter-item card spacing and tightened folder spacing.
- Added compact folder headers with bookmark counts and collapsible sections.
- Added subtle row hover, keyboard focus, and on-demand edit/delete actions.
- Kept website names text-only: no site favicons, logos, or tiles.
- Refined panel header, search bar, sort control and add-bookmark button; homepage and Settings UI are unchanged.


## v1.8.7 — Settings Control Center redesign
- Redesigned the Settings drawer with a new Control Center header and concise workspace subtitle.
- Added grouped profile and regional-preference cards.
- Converted settings groups into compact themed cards with clearer section hierarchy.
- Refined form fields, selects, checkboxes, range sliders, color pickers, preset swatches, list editors, permission confirmation, wallpaper search and footer credit.
- Added a sticky header and consistent narrow-screen layout.
- Preserved all existing input IDs, setting values, event handlers and functionality.
- Bookmark panel and homepage UI are unchanged.
