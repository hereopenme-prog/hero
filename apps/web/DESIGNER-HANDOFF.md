# Designer handoff - 17 October 2026

## Audience and message

Here Open now addresses **banks and fintechs together**. Remove competitive framing that treats fintechs as opponents. Use **Connection. Protection.** in the header and footer. The opening is **Go beyond payment confirmation.**, introduced by **FOR BANKS & FINTECHS**. Retain the merchant problems and budget-friendly device copy.

Keep bank-specific services accurate: CASA means bank current and savings account relationships. Banks can offer eligible merchants credit; fintechs can connect merchants with lending partners. Do not imply every fintech accepts bank deposits or directly lends.

## Preserve the page flow

Home > The challenge > Our solution > How it works > Smart device > One device benefits > Our vision > The partnership > FAQ > Contact.

Menu: Home, The challenge, Our solution, How it works, Smart device, Our vision, FAQ, Contact. Home returns to the opening; Contact reveals the form. Use the compact scrollable menu at 1000px and below. Keep the Partnership immediately before the nine FAQs.

## Graphics and mobile clarity

Latest revision, 18 October: the Smart Device overview follows the owner's original circular graphic. Blue represents banks and fintechs, green merchants, and purple customers. Keep the original central device, curved arrow connections, illuminated borders and large audience badges. `app/ecosystem.css` controls this section. The three circles form a compact triangle on desktop and stack on phones with readable live text. Do not replace them with rectangular cards. Motion finishes automatically and respects reduced-motion preferences.

`PartnerGraphics.jsx` uses the owner's original `device-bank-qr.png` in Our Solution, Smart Device and One Device. Do not replace it with a generic CSS device. The original `merchant-problems-hero.png` is restored in the opening; its bank illustration is retained unchanged while the surrounding live text addresses both banks and fintechs.

Our Solution keeps six readable feature cards around the actual device artwork. Phones stack the device and all cards. Smart Device retains the shared partner, merchant and customer overview. The next section retains all 17 detailed benefits.

Latest showroom revision: Our Solution now has a deep emerald backdrop, a 310px product presentation on desktop, an illuminated pedestal, fine connecting paths and six light feature cards. Preserve the original device PNG. Feature icons use restrained green, blue, teal, orange and violet accents on the green overall theme. On phones the product leads and the six cards follow in a single column. The introduction and summary keep their existing wording. The shared circular overview remains unchanged in structure.

The original hero image opens in a native dialog with zoom, fit-to-screen, Close and Escape support. Closing returns focus to the trigger. Preserve readable HTML explanations below the illustration.

`product-motion.css` adds a brief lighting sweep, product entrance, curved signal paths, hover feedback and OPEN/CLOSED status feedback. `VisualEffects.jsx` starts decorative effects once on viewport entry. Keep finite animations and reduced-motion support. The small pointer still shows which opposite shop state to tap. No auto-switching of the shop's state.

## Compact comparisons

The Challenge uses a full-width bank/fintech panel with 8 issues in a 4-by-2 grid. Merchant and customer panels remain side by side below, with 3 merged issues each. Keep DIMENSION smaller than the audience name. Preserve the user-approved merged descriptions.

One Device has 7 partner benefits on the left, device plus 4 customer benefits in the middle, and 6 merchant benefits on the right. All are expanded. On phones use device, partners, merchants, customers in that order. Do not shrink text to force a phone screen or introduce tabs/carousels.

The 1366 x 768 laptop view is the compact overview target. Smaller windows and increased text sizes should scroll naturally without clipping.

## Content retained

Keep merchant and customer problem descriptions, their benefits, OPEN/CLOSED workflows, supported-monitoring qualifications, the nine-question FAQ structure, and the 90+ Crore internet-user / 6.3+ Crore MSME context. The figures are audience context, not adoption numbers.

Our Vision keeps a separate centered label above the navy introduction. The statement now describes a platform where banks and fintechs connect directly with merchants and customers. Do not restore bank-versus-fintech messaging, the Mission/Belief/Promise cards or section numbering.

## Phone demo

The merchant controls OPEN/CLOSED. Show the animated hand on the opposite choice. On OPEN: Business Mode, public shop status and Motion 2 minutes ago. On CLOSED: Security Mode, public CLOSED status, and intrusion/motion/tampering alerts. Keep fire and smoke in the separate 24/7 strip. Maintain keyboard controls, live result announcements and reduced-motion support. It is a demonstration, not connected hardware.

## Visual system

Green #004A00, hover #073A16, navy #010C28, bright green #00E28A, white and pale green/blue panels. The circular H logo stays blue #165AAC in both themes. Use the existing local Inter and Space Grotesk fonts. Keep centered section labels and consistent rounded line icons. Live graphics adapt to dark mode; original images retain their colours on a light photographic stage.

The October 18 visual finishing layer is in `SiteEffects.jsx` and `site-effects.css`, imported after the other styles. It adds soft lighting, translucent header treatment, active menu highlighting, reading progress, gentle section entrances and hover/focus feedback. Keep the animations finite and honor reduced-motion preferences. Content must remain visible before scripts initialize. This layer adds no dependencies and does not alter the original images or copy.

`interactive-depth.css` adds the subsequent device light rings, fine-pointer 3D response, moving panel highlights, audience badge entrances, icon rings and action-button sheen. The original product PNGs remain unchanged. Mouse effects reset on pointer exit and are disabled for touch and reduced-motion preferences. Orbit entrances finish within 4.2 seconds. Keep the circular overview's blend mode and compact dimensions intact.

The showroom styles are grouped at the end of `interactive-depth.css`. `Reveal` supports an optional `repeat` flag used only by the solution showroom, so its short entrance runs again after leaving and re-entering view. Reduced-motion preferences disable the entrance and the controls remain usable without animation. Hero lighting, compact active navigation, the phone-demo frame and safety strip use matching finishes.

## Delivery

Use README.md for preview/build commands. The static output is in `out/`. Submit opens an email draft; do not imply it sent a message. Local legal pages live at `/privacy`, `/terms` and `/security`; keep them in step with product and legal changes. Connect a production form endpoint separately if needed.

This update is local and has not been published. Live-site inspection was blocked during this run. Confirm any more recent production changes before integrating the package.

## Verification for this delivery

Production build and local HTTP check passed. Static checks verify the original artwork references, all 6 features, 17 benefits and 9 FAQs. Merchant/customer problems, benefits and phone workflow copy remain unchanged against the pre-edit backup. The updated two-page PDF guide was rendered and inspected.

For the circular overview revision, in-app browser inspection is complete at 1366 x 768 and 390px / 320px phone widths. The three circles finish within the laptop viewport (last circle bottom approximately 703px). No horizontal overflow was found. Mobile customer benefits use vertical rows at 14px. Light/dark themes were inspected and browser logs contained no warnings or errors. The original finite motion and reduced-motion rules remain. The rest of the website's interactions were not rerun for this focused change. The local preview is the review target; nothing was deployed.

The finishing layer was checked in the local in-app browser at 1366 x 768, 390px and 320px widths. Menu highlighting and progress update when navigating; FAQ expansion and both phone states work. Narrow layouts have no horizontal overflow. Light and dark appearances were reviewed. Build and retained-copy checks passed, and browser logs were clear. Reduced-motion behavior is implemented in CSS; browser emulation of that preference was not performed.

For the subsequent depth revision, pointer lighting and the device's 3D transform were exercised in the browser; leaving the device reset both. All three audience circles retained their desktop positions (bottom of customer panel about 703px). The 320px layout and dark theme were inspected, with no horizontal overflow or console errors. The production build and retained-copy checks passed again. Decorative device rings are hidden from assistive technology and do not intercept input.

The showroom revision was reviewed at 1366px desktop width and at 390px / 320px mobile widths. The device, all six features and original copy are present; mobile cards stack and the document has no horizontal overflow. Both OPEN and CLOSED demo states were exercised after the phone-frame changes. At 1366 x 768, all three audience circles still fit together, ending at about 701px. Build, asset and retained-copy checks passed. Console logs were clear. No production deployment was performed.

## Design references

The official Stripe Terminal (https://stripe.com/terminal), Square hardware (https://squareup.com/us/en/hardware), and Apple iPhone (https://www.apple.com/iphone/) product pages were consulted for product-first presentation. No external artwork, source code or brand elements were copied.
