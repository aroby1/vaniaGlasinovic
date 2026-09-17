import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background: "#1C0A06",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 36 }}>
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#B84832", display: "flex" }} />
          <div style={{ fontSize: 26, letterSpacing: 6, textTransform: "uppercase", color: "#D4673B", fontWeight: 700, display: "flex" }}>
            Glasinovic Law Office
          </div>
        </div>
        <div style={{ fontSize: 76, fontWeight: 600, lineHeight: 1.1, maxWidth: 950, display: "flex" }}>
          Vannia Glasinovic
        </div>
        <div style={{ fontSize: 34, color: "rgba(255,255,255,0.6)", marginTop: 28, maxWidth: 820, display: "flex" }}>
          Immigration &amp; Environmental Attorney in Eugene, Oregon
        </div>
      </div>
    ),
    { ...size }
  );
}
