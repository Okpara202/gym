import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import logo from "../assets/Logo (5).png";
import NavLink from "./link";
import useMediaQuery from "./mediaQuery";
import { useState } from "react";
import ActionButton from "./ActionButton";


type Page = {
    selectedPage: string,
    setSelectedPage(value: string): void
}


function Navbar({ selectedPage, setSelectedPage }: Page) {

    const [isMenuToggled, setIsmenuToggled] = useState<boolean>(false);


    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreen = useMediaQuery("(min-width: 1020px)")

    function toggleMenu() {
        setIsmenuToggled(prevState => !prevState)
    }

    return (
        <nav>
            <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>

                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        <img src={logo} alt="Gym logo" />

                        {isAboveMediumScreen ? (<div className={`${flexBetween} w-full`}>
                            <div className={`${flexBetween} gap-8 text-sm`}>
                                <NavLink
                                    page="Home"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
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
                                <ActionButton setSelectedPage={setSelectedPage}>Become a member</ActionButton>
                            </div>
                        </div>) : (
                            <button
                                className="rounded-full p-2 bg-secondary-500"
                                onClick={toggleMenu} >
                                <Bars3Icon className="h-6 w-6 text-white" />
                            </button>
                        )}
                    </div>

                </div>

            </div>

            {
                !isAboveMediumScreen && isMenuToggled && <div className="fixed right-0 bottom-0 top-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl" >
                    <div className="flex justify-end p-12">
                        <XMarkIcon />
                    </div>
                </div>
            }

        </nav>
    )
}

export default Navbar