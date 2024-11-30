import AnchorLink from "react-anchor-link-smooth-scroll";

type Page = {
    page: string;
    selectedPage: string,
    setSelectedPage(value: string): void
}

function NavLink({ page, selectedPage, setSelectedPage }: Page) {
    const lowerCasePage: string = `#${page.toLowerCase().replace(" ", "")}`;


    return (
        <AnchorLink className={`${selectedPage == lowerCasePage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`} href={lowerCasePage} onClick={() => setSelectedPage(lowerCasePage)} >
            {page}
        </AnchorLink>
    )
}

export default NavLink