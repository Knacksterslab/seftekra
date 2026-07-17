import { ImageResponse } from "next/og";

export const alt = "Seftekra — Powering the Next Grid";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A0A",
          position: "relative",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "900px",
              height: "2px",
              background: "rgba(255, 215, 0, 0.07)",
              transform: `translate(-50%, -50%) rotate(${i * 15}deg)`,
            }}
          />
        ))}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "130px",
            height: "130px",
            borderRadius: "50%",
            border: "3px solid rgba(255, 215, 0, 0.35)",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            background: "#FFD700",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "32%",
            left: "22%",
            right: "22%",
            height: "2px",
            background: "rgba(255, 215, 0, 0.3)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            position: "relative",
            zIndex: 1,
            marginTop: "90px",
          }}
        >
          <div
            style={{
              fontSize: "76px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#FFD700",
            }}
          >
            Seftekra
          </div>
          <div
            style={{
              fontSize: "28px",
              fontWeight: 300,
              letterSpacing: "0.06em",
              color: "#888888",
            }}
          >
            Powering the Next Grid.
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
