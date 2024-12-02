import { PropsWithChildren } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Button = PropsWithChildren<
    {
        setSelectedPage(value: string): void
    }
>

function ActionButton({ children, setSelectedPage }: Button) {
    return (<AnchorLink className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 cursor-pointer hover:text-white" onClick={() => setSelectedPage("#contactus")} href="#contactus">
        {children}
    </AnchorLink>)
}

export default ActionButton