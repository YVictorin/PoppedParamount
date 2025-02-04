export default function List({ textColor, names }) {
    return (
        <ul className="w-4/5 h-12 flex gap-12">
            {names.map((name, index) => (
                                                //makes second list item have a black background but white text
                <li className={`text-${textColor} whitespace-nowrap cursor-pointer ${index === 1 ? "bg-black h-4/5 text-white flex justify-center items-center pl-1 pr-1 translate-y-[-0.5rem]" : "" }`}
                    key={index}>
                    {name}
                </li>
            ))}
        </ul>
    );
}
