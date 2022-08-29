import React from "react"

type Props = {}

export default function Footer({}: Props) {
    return (
        <footer className="flex text-center justify-end">
            <p>Copyright © {new Date().getFullYear()} Timothy Yang</p>
        </footer>
    )
}
