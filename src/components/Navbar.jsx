
const Navbar = () => {
    return (
        <nav className="container mx-auto">
            <div className="flex justify-between items-center py-2">
                <div>
                    FriendZone
                </div>
                <div>
                    <button
                        type="button"
                        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2 dark:bg-red-600 dark:hover:bg-red-700"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar