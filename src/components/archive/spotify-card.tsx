// ARCHIVED — not rendered anywhere. Kept for reference / possible revival
// (e.g. wiring the "favorite song" to the Spotify API later). Previously lived
// in the About section as the right-hand 1/3 column. Relies on the `spotify-grad`
// class in globals.css and /will_delete/rhcp.png.
import { sans, mono } from "@/app/fonts";
import ContentDiv from "../common/content-div";
import Image from "next/image";

export default function SpotifyCard() {
  return (
    <ContentDiv col={1}>
      <div className="spotify-grad relative mx-auto flex h-full w-full max-w-sm flex-col items-center rounded-md pb-8">
        <Image
          src="/about_icons/spotify_pfp.svg"
          alt=""
          className="absolute top-0 left-1/2 w-44 -translate-x-1/2 -translate-y-1/2"
          width={48}
          height={48}
        />
        <Image
          src="/about_icons/spotify.svg"
          alt=""
          className="absolute top-4 right-4 h-8 w-8"
          width={12}
          height={12}
        />
        <p
          className={`mt-24 text-lg text-white md:text-2xl ${mono.className} font-light`}
        >
          @NickFet
        </p>
        <div className="mt-4 flex items-center justify-center gap-3">
          <Image
            src="/about_icons/music.svg"
            alt=""
            className="h-5 w-5"
            width={12}
            height={12}
          />
          <p
            className={`text-md text-[#B9B8B8] md:text-lg ${sans.className} font-light`}
          >
            Favorite song right now:
          </p>
        </div>
        <div
          className={`text-center text-[#EFEEEE] ${mono.className} mt-2 mb-5 text-lg`}
        >
          <p className="font-medium">Don't Stop</p>
          <p className="font-light">Red Hot Chili Peppers</p>
        </div>
        <Image
          src="/will_delete/rhcp.png"
          alt="RHCP"
          className="w-2/5"
          width={1000}
          height={1000}
          sizes="(max-width: 1280px) 40vw, 160px"
        />
      </div>
    </ContentDiv>
  );
}
