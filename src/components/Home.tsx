import useMediaQuery from "./mediaQuery";
import ActionButton from "./NavBar/ActionButton";
import HomePageText from "../assets/HomePageText.png";
import HomePageGraphic from "../assets/HomePageGraphic.png";
import SponsorRedBull from "../assets/SponsorRedBull.png";
import SponsorForbes from "../assets/SponsorForbes.png";
import SponsorFortune from "../assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";


type Page = {
    setSelectedPage(value: string): void
}

function Home({ setSelectedPage }: Page) {

    const isAboveMediumScreens = useMediaQuery("(min-width: 1020px)");
    return (
        <section id="home" className="gap-16 py-10 bg-gray-20 md:h-full md:pb-0" >
            <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
                <div className="z-10 mt-32 md:basis-3/5">
                    <div className="md:-mt-20">
                        <div className="relative">
                            <div className="before:absolute before:-top-20 md:before:content-evolvetext before:-left-20 before:z-[-1]">
                                <img src={HomePageText} alt="home-page-text" />
                            </div>
                        </div>
                        <p className="mt-8 text-sm">Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the Body Shapes that you dream of... Get your dream Body Now.</p>
                    </div>

                    <div className="mt-8 flex items-center gap-8">
                        <ActionButton setSelectedPage={setSelectedPage} > Join now </ActionButton>
                        <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500" onClick={() => setSelectedPage("#contactus")} href="#contactus" ><p>Learn More</p></AnchorLink>
                    </div>
                </div>
                <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
                    <img src={HomePageGraphic} alt="home-page-graphic" />
                </div>
            </div>
            {isAboveMediumScreens && <div className="text-9xl">
                <div className="h-[150pd] w-full bg-primary-100 py-10">
                    <div className="mx-auto w-5/6">
                        <div className="flex w-3/5 items-center justify-between gap-8">
                            <img src={SponsorRedBull} alt="redBull-sponsor" />
                            <img src={SponsorForbes} alt="forbes-sponsor" />
                            <img src={SponsorFortune} alt="sortune-sponsor" />
                        </div>
                    </div>
                </div>
            </div>}
        </section>
    )
}

export default Home