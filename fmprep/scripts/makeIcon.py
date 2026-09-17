#!/usr/bin/env python3
"""The FM Prep app icon.

The icon that shipped until now was Pocket-Med's: its blue bag and its
wordmark, both read straight off the other project. This draws FM Prep's own,
keeping the artwork it replaces - the bag, the cross, the handles, the
stethoscope, the trace across the middle - and changing the two things that
made it another app's icon: the bag is green rather than blue, and the
wordmark says FM Prep.

Geometry is in a 512 grid measured off the icon it replaces, so the new one
sits where the old one did. Everything is drawn at SS times that and
downsampled, because the strokes are thin at 48dp and PIL does not
anti-alias.

    python3 scripts/makeIcon.py        # writes public/icon-{192,512}.png, logo.png

The SVG favicon next to them is hand-kept to the same geometry.
"""
import math
import os
from PIL import Image, ImageDraw, ImageFilter, ImageFont

G = 512
SS = 4
HERE = os.path.dirname(os.path.abspath(__file__))
PUBLIC = os.path.join(HERE, os.pardir, "public")

PAPER = (253, 251, 247)          # --paper, the page the app itself is on
DOT = (232, 228, 219)
BAG_TOP = (38, 128, 79)          # was #2959B2
BAG_BOT = (14, 58, 38)           # was #16346F
INK = (20, 18, 15)
TRACE = (0, 255, 106)
KEY = (139, 0, 0)                # --key, the wordmark's colour, unchanged

FONT = "/mnt/skills/examples/canvas-design/canvas-fonts/Outfit-Bold.ttf"
FALLBACKS = [
    "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
]


def s(v):
    return round(v * SS)


def box(x0, y0, x1, y1):
    return [s(x0), s(y0), s(x1), s(y1)]


def load_font(size):
    for path in [FONT] + FALLBACKS:
        try:
            return ImageFont.truetype(path, s(size))
        except OSError:
            continue
    raise SystemExit("no bold font found")


def vertical_gradient(w, h, top, bottom):
    strip = Image.new("RGB", (1, h))
    px = strip.load()
    for y in range(h):
        t = y / (h - 1)
        px[0, y] = tuple(round(a + (b - a) * t) for a, b in zip(top, bottom))
    return strip.resize((w, h))


def rounded_mask(w, h, r):
    m = Image.new("L", (w, h), 0)
    ImageDraw.Draw(m).rounded_rectangle([0, 0, w - 1, h - 1], radius=r, fill=255)
    return m


def layer():
    return Image.new("RGBA", (G * SS, G * SS), (0, 0, 0, 0))


def stroke(d, pts, width, fill):
    """A polyline with round joins and caps, which PIL does not do itself."""
    d.line([c for p in pts for c in (s(p[0]), s(p[1]))], fill=fill, width=s(width))
    r = width / 2
    for x, y in pts:
        d.ellipse(box(x - r, y - r, x + r, y + r), fill=fill)


def arc_points(cx, cy, r, a0, a1, n=64):
    return [(cx + r * math.cos(math.radians(a0 + (a1 - a0) * i / n)),
             cy + r * math.sin(math.radians(a0 + (a1 - a0) * i / n))) for i in range(n + 1)]


def build():
    size = G * SS
    im = Image.new("RGBA", (size, size), PAPER + (255,))
    d = ImageDraw.Draw(im)

    # The faint dot grid the old icon sat on, warmed to the app's own paper.
    for gy in range(16, G, 32):
        for gx in range(16, G, 32):
            d.ellipse(box(gx - 1.4, gy - 1.4, gx + 1.4, gy + 1.4), fill=DOT + (255,))

    # --- the bag, green where it was blue -----------------------------------
    bx0, by0, bx1, by1, br = 74, 145, 252, 323, 38
    bw, bh = s(bx1 - bx0), s(by1 - by0)

    shadow = layer()
    ImageDraw.Draw(shadow).rounded_rectangle(
        box(bx0 + 2, by0 + 8, bx1 + 2, by1 + 10), radius=s(br), fill=(14, 58, 38, 90))
    im.alpha_composite(shadow.filter(ImageFilter.GaussianBlur(s(7))))

    bag = vertical_gradient(bw, bh, BAG_TOP, BAG_BOT).convert("RGBA")
    bag.putalpha(rounded_mask(bw, bh, s(br)))
    im.alpha_composite(bag, (s(bx0), s(by0)))

    # the cross, a white wash over the bag rather than an ink of its own
    cross = layer()
    cd = ImageDraw.Draw(cross)
    cd.rounded_rectangle(box(136, 192, 189, 215), radius=s(5), fill=(255, 255, 255, 40))
    cd.rounded_rectangle(box(152, 177, 174, 229), radius=s(5), fill=(255, 255, 255, 40))
    im.alpha_composite(cross)

    # --- handles, stethoscope ------------------------------------------------
    art = layer()
    ad = ImageDraw.Draw(art)
    for hx in (120, 205.5):
        ad.rounded_rectangle(box(hx - 5.5, 109, hx + 5.5, 150), radius=s(5.5), fill=INK + (255,))

    tube = [(165, 318)] + arc_points(221, 327, 56, 180, 0) + [(277, 310)]
    stroke(ad, tube, 9, INK + (255,))
    im.alpha_composite(art)

    # --- the trace, over everything but the wordmark -------------------------
    trace = [(4, 292), (103, 292), (115, 266), (130, 316), (141, 292), (512 - 4, 292)]
    glow = layer()
    stroke(ImageDraw.Draw(glow), trace, 13, TRACE + (120,))
    im.alpha_composite(glow.filter(ImageFilter.GaussianBlur(s(4))))
    line = layer()
    ld = ImageDraw.Draw(line)
    stroke(ld, trace, 7, TRACE + (255,))
    im.alpha_composite(line)

    # The chest piece rides over the trace; drawn under it, the glow washed the
    # ring out and left the green centre floating.
    chest = layer()
    chd = ImageDraw.Draw(chest)
    chd.ellipse(box(271 - 16, 296 - 16, 271 + 16, 296 + 16), outline=INK + (255,), width=s(7))
    chd.ellipse(box(271 - 6.5, 296 - 6.5, 271 + 6.5, 296 + 6.5), fill=TRACE + (255,))
    im.alpha_composite(chest)

    # --- the wordmark --------------------------------------------------------
    # Sized to the width the old one filled, so the icon keeps its balance
    # however many letters the name has.
    # Matched on cap height rather than width: a seven-letter name set to the
    # width a ten-letter one filled would tower over the bag behind it.
    text, cap = "FM Prep", 38
    pt = 44
    for _ in range(40):
        f = load_font(pt)
        top, bot = d.textbbox((0, 0), "FMP", font=f)[1::2]
        h = (bot - top) / SS
        if abs(h - cap) < 0.5:
            break
        pt *= cap / h
    d.text((s(256), s(251)), text, font=load_font(pt), fill=KEY + (255,),
           anchor="mm", stroke_width=s(3.5), stroke_fill=(255, 255, 255, 255))
    return im


# The artwork is measured in the grid it replaces, which left a quarter of the
# square empty above the handles and below the tube. An app icon is looked at
# at 48dp, so the margin is dead space the letters can least afford; the drawn
# square is cropped to the content's own centre and scaled back to 512, which
# enlarges every element without moving any of them relative to each other.
ZOOM, FOCUS_Y = 1.3, 244


def main():
    im = build()
    side = round(G * SS / ZOOM)
    im = im.crop((round(G * SS / 2 - side / 2), round(FOCUS_Y * SS - side / 2),
                  round(G * SS / 2 + side / 2), round(FOCUS_Y * SS + side / 2)))
    for px, name in ((512, "icon-512.png"), (192, "icon-192.png")):
        im.resize((px, px), Image.LANCZOS).convert("RGB").save(
            os.path.join(PUBLIC, name), optimize=True)
    im.resize((512, 512), Image.LANCZOS).convert("RGB").save(
        os.path.join(PUBLIC, "logo.png"), optimize=True)
    print("wrote icon-512.png, icon-192.png, logo.png")


if __name__ == "__main__":
    main()
