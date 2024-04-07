import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
          borderRadius: 5,
        }}
      >
        <img
          alt="~"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAQCAYAAAB3AH1ZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD7SURBVHgBtVVtFcMgDDwJkxAJk1AJk4CD1UFxMAnMQeugEioBCZXQwWt4ZRtfhe3eu19JuCQcDyAPYTgbroab4WKoDDu04WooUwnEwluCivNqYGsnJMR1RtxR8zRnQFwrYgljobjPHuUYuOYSCt4rxB0H5EHY/TTFgqWrT/kiOBlj4bxbKKgaxX1fCLwbtPPENSLTb3/giuMJJ/3y8AokjjVahz9/3BSFGtAc7BAGod0fziNfEByUSINw3GOtNyh08IiIMQK4NDTRx6ayQYFy1DQxxg4TSBgj08RcKB5dPbgzhXrIjPiMzHD2gLOfyScI+1N117KysMgVvgCQ+/NgsUgsdwAAAABJRU5ErkJggg=="
          width={18}
          height={9}
        />
      </div>
    ),
    {
      ...size,
    },
  );
}
