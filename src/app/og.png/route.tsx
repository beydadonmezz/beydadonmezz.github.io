import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const dynamic = "force-static";
const size = { width: 1200, height: 630 };

/** Static 1200×630 social card, emitted as /og.png at build time. */
export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "radial-gradient(circle at 85% 0%, #3b4420 0%, #0c0c0b 55%)",
          color: "#eeebe4",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#9a968d" }}>
          <span>{profile.title.toUpperCase()}</span>
          <span>{profile.location.toUpperCase()}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 0.9 }}>
          <span style={{ fontSize: 150, fontWeight: 700, letterSpacing: -7 }}>{profile.firstName}</span>
          <span style={{ fontSize: 150, fontWeight: 700, letterSpacing: -7 }}>
            {profile.lastName}
            <span style={{ color: "#dcf76e" }}>.</span>
          </span>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#dcf76e" }}>beydadonmezz.github.io</div>
      </div>
    ),
    size,
  );
}
