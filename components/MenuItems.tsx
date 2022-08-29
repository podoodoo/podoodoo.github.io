import Link from "next/link"
import React from "react"

const links = [
    { name: "About", to: "/about", id: 1 },
    { name: "Projects", to: "/projects", id: 2 },
    { name: "Blog", to: "/blog", id: 3 }
]

const MenuItems = () => {
    return (
        <aside className="">
            {links.map(({ name, to, id }) => (
                <Link href={to} key={id} className="hover:bg-slate-500">
                    {name}
                </Link>
            ))}
        </aside>
    )
}

export default MenuItems
