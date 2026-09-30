import { ImageResponse } from "next/og";

export const dynamic = "force-static";
const size = { width: 180, height: 180 };

/** Emitted as /apple-touch-icon.png at build time. */
export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#dcf76e",
          color: "#0c0c0b",
          fontSize: 76,
          fontWeight: 700,
          letterSpacing: -4,
        }}
      >
        BD
      </div>
    ),
    size,
  );
}
