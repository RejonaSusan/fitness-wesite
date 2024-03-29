import { useState } from "react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import Link from "./Link";


type Props = {
    selectedPage: string,
    setSelectedPage: (value: string) => void
}

const Navbar = (selectedPage, setSelectedPage: Props) => {

    const flexBetween = "flex items-center justify-between"

    return <nav>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    <p>img</p>
                    <div className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <Link 
                                page = "Home" 
                                selectedPage={selectedPage} 
                                setSelectedPage={setSelectedPage}
                            />
                            <Link 
                                page = "Benefits" 
                                selectedPage={selectedPage} 
                                setSelectedPage={setSelectedPage}
                            />
                            <Link 
                                page = "Our classes" 
                                selectedPage={selectedPage} 
                                setSelectedPage={setSelectedPage}
                            />
                            <Link 
                                page = "contact us" 
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
}

export default Navbar;

