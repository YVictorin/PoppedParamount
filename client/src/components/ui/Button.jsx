import { Link } from "react-router-dom"

export default function Button({ text, href = "#" }) {
    return (
        <button><Link href={href}>{text}</Link></button> 
        )
}