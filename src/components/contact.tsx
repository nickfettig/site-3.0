import Image from "next/image";
import SectionHeader from "./common/section_header";
import ContentDiv from "./common/content-div";
import { sans } from "@/app/fonts";
import SocialIcon from "./common/social-icon";
import { socials } from "./common/social-icons";
import CopyEmail from "./common/copy-email";
import { blurDataURLs } from "@/data/images";

const EMAIL = "nicholasfettig63@gmail.com";

export default function Contact() {
  return (
    <div id="contact" className="mx-auto max-w-7xl scroll-mt-8">
      <SectionHeader header="CONTACT" />
      <div className="mt-8 grid gap-6 md:mt-10 xl:grid-cols-4">
        <div className="relative hidden overflow-hidden rounded-lg shadow-lg xl:block">
          <Image
            src="/scenery/boat.webp"
            alt="A sailboat on the water"
            fill
            placeholder="blur"
            blurDataURL={blurDataURLs.boat}
            sizes="25vw"
            className="object-cover"
          />
        </div>
        <ContentDiv col={3}>
          <div
            className={`${sans.className} text-ink flex h-full flex-col justify-center gap-6`}
          >
            <p className="text-md leading-relaxed font-light md:text-lg">
              I always love meeting new people and talking about tech. Grab my
              email below, or reach out on any of my socials!
            </p>
            <CopyEmail email={EMAIL} />
            <div className="flex flex-wrap justify-center gap-3">
              {socials.map((s) => (
                <SocialIcon key={s.label} {...s} />
              ))}
            </div>
          </div>
        </ContentDiv>
      </div>
    </div>
  );
}
