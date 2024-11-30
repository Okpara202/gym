import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import logo from "../assets/Logo (5).png";
import NavLink from "./link";
import useMediaQuery from "./mediaQuery";


type Page = {
    selectedPage: string,
    setSelectedPage(value: string): void
}


function Navbar({ selectedPage, setSelectedPage }: Page) {


    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)")

    return (
        <nav>
            <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>

                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        <img src={logo} alt="Gym logo" />

                        <div className={`${flexBetween} w-full`}>
                            <div className={`${flexBetween} gap-8 text-sm`}>
                                <NavLink
                                    page="Home"
                                    selectedPage={selectedPage} setSelectedPage={setSelectedPage}
                                />
                                <NavLink
                                    page="Benefits"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <NavLink
                                    page="Our Classes"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <NavLink
                                    page="Contact us"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                            </div>
                            <div className={`${flexBetween} gap-8`}>
                                <p>Sign in</p>
                                <button>Become a member</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </nav>
    )
}

export default Navbar