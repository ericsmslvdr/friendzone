import fzIcon from '../assets/friendzone-icon.png'


const Navbar = () => {
    return (
        <nav className="bg-slate-900 fixed start-0 end-0 z-20">
            <div className="container mx-auto flex justify-between items-center py-2">
                <div className='flex items-center gap-2'>
                    <img className='w-12 h-12' src={fzIcon} alt="" />
                    <span className='text-slate-400 text-lg'>FriendZone</span>
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