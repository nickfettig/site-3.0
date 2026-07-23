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
            <div className="relative spotify-grad w-full h-full rounded-md flex flex-col items-center max-w-sm mx-auto pb-8">
                <Image src="/about_icons/spotify_pfp.svg" alt="" className="w-44 top-0 -translate-y-1/2 absolute left-1/2 -translate-x-1/2" width={48} height={48} />
                <Image src="/about_icons/spotify.svg" alt="" className="w-8 h-8 absolute right-4 top-4" width={12} height={12} />
                <p className={`mt-24 text-white text-lg md:text-2xl ${mono.className} font-light`}>@NickFet</p>
                <div className="mt-4 flex justify-center gap-3 items-center">
                    <Image src="/about_icons/music.svg" alt="" className="w-5 h-5" width={12} height={12} />
                    <p className={`text-[#B9B8B8] text-md md:text-lg ${sans.className} font-light`}>Favorite song right now:</p>
                </div>
                <div className={`text-[#EFEEEE] text-center ${mono.className} mt-2 mb-5 text-lg`}>
                    <p className="font-medium">Don't Stop</p>
                    <p className="font-light">Red Hot Chili Peppers</p>
                </div>
                <Image src="/will_delete/rhcp.png" alt="RHCP" className="w-2/5" width={1000} height={1000} sizes="(max-width: 1280px) 40vw, 160px" />
            </div>
        </ContentDiv>
    );
}
