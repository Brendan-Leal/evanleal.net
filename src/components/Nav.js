export default function Nav() {
    const showNav = () => {

    }

    return (
        // Mobile Nav
        <div onClick={showNav} className="absolute z-10 right-0 pr-4 pt-12 flex flex-col items-end gap-1 md:hidden">
            <div className="w-12 h-1 bg-off-white rounded-lg"></div>
            <div className="w-6 h-1 bg-off-white rounded-lg"></div>
        </div>
    )
}