# Reused website assets

The website owner requested the existing first page and website colours. The following files were copied from the rendered https://www.hereopen.me/ homepage on 13 September 2026:

- `public/assets/original-homepage.png`: https://www.hereopen.me/hero-screenshot.png (unchanged, 1593 x 892).
- `public/fonts/inter-latin.woff2`: the site's Inter font, `_next/static/media/e4af272ccee01ff0-s.p.woff2`.
- `public/fonts/space-grotesk-latin.woff2`: the site's Space Grotesk font, `_next/static/media/36966cca54120369-s.p.woff2`.
- `public/fonts/space-grotesk-latin-ext.woff2`: the site's Space Grotesk extended Latin subset, `_next/static/media/b7387a63dd068245-s.woff2`.

The original stylesheet supplied the hero treatment and image edge mask reimplemented in `app/brand.css`. The website now retains its earlier green palette; the supplied circular H logo remains blue. This package does not embed the original compiled application or depend on it at runtime. Preserve the existing project's applicable asset and font licence notices when integrating this handoff.

`public/assets/device-bank-qr.png` is the previously approved illustrative device artwork from this design project.

`public/assets/our-solution.png` began as a copy of the owner's supplied `ChatGPT Image Sep 14, 2026, 01_43_54 AM.png` (1536 x 1024). This latest bank QR graphic replaces the previous Our Solution image. Its six features and two concluding paragraphs are also readable HTML on smaller screens.

`public/assets/merchant-phone-frame.svg` is an original vector phone illustration created for this website. The screen, buttons and status are accessible HTML, so they stay sharp and interactive at different screen sizes.

`public/assets/merchant-value-overview.png` is an unchanged copy of the owner's `ChatGPT Image Sep 14, 2026, 12_49_00 AM.png` (1536 x 1024). The three-circle relationship graphic replaces the previous merchant-value image immediately after How It Works. The next section provides readable HTML benefits for smaller screens.

`public/assets/hereopen-logo.svg` is a clean vector adaptation of the circular blue-and-white H in the owner-supplied `image_925a0e54.jpg`. The primary blue, `#165AAC`, was sampled from that image. The same SVG is used by `public/favicon.svg`; `LogoMark.jsx` shares it across the header, footer, merchant phone and vision diagram. The hero and three-audience graphics keep their supplied colours. The solution graphic has the authorised wording corrections described below.

Latest asset updates:
- `public/assets/merchant-problems-hero.png` is copied unchanged from `ChatGPT Image Sep 14, 2026, 05_42_34 PM.png`, supplied by the owner for the top-right hero image.
- `public/assets/our-solution.png` was edited with the built-in image generation tool to correct merchant spelling and grammar while preserving the device, six cards, icons and layout. The image remains 1536 × 1024.
- Edit prompt: preserve the original layout and colours; render merchant/merchants correctly; use “Instant alerts to the merchant’s mobile”, “Merchant App Control”, “Merchants control the device from the Here Open merchant app”, and “YOUR BANK’S QR CODE”. In the lower paragraph, use “promote their businesses” and “manage safety and security needs”. Keep all other text, graphics and the 3:2 aspect ratio.

## 17 October 2026 - bank and fintech positioning

The current page uses editable HTML/CSS/SVG illustrations from `components/PartnerGraphics.jsx` instead of the four bank-only raster graphics: `merchant-problems-hero.png`, `our-solution.png`, `merchant-value-overview.png`, and `device-bank-qr.png`. Those files remain as historical reference assets; descriptions above record their earlier use, not current rendering. No raster artwork was altered in this update. The new device's QR motif is a nonfunctional illustration.

The blue logo, phone frame and local font assets remain in active use. Merchant/customer descriptions and six device features are retained as live text. The live site was not accessible during this update; the earlier provenance records above have not been independently reverified.

## Latest owner-requested artwork restoration

18 October: the Smart Device overview follows the circular arrangement, blue/green/purple accents and curved arrows of the owner's `merchant-value-overview.png`. The circles and their benefits are live HTML/SVG/CSS, so banks and fintechs can be addressed together and phone text stays readable. The original `device-bank-qr.png` remains unchanged at the centre. No raster pixels were edited.

`device-bank-qr.png` and `merchant-problems-hero.png` are now rendered unchanged. All product sections use the original silver device. The hero uses the original merchant-problems illustration with an enlargement dialog. Its bank-labelled artwork is retained as supplied; adjacent live copy addresses both banks and fintechs. The remaining original infographics are retained as references. CSS lighting, curves, and finite viewport effects surround the artwork without altering its pixels. No new raster images were generated.
