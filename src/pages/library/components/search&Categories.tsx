export const   SearchAndCategories = () => {
    return(
        <div className={"w-3/12 h-full max-h-full p-4 bg-[red]"}>
            {/* Search query section */}
            <form className="rounded m-2 relative flex items-center">
                <input
                    className="outline-0 border-0 w-full h-10 rounded p-2 font-semibold"
                    autoFocus
                    placeholder="search..."
                    type="text"
                    // value={searchTerm}
                    // onChange={handleChange}
                />

            </form>

            {/* Categories section */}
            <div className="m-4">
                {/*{categories.map((category, index) => (*/}
                    <div
                        // href={category.link}
                        // key={index}
                        className="flex justify-between border-my_yellow bg-my_dark p-2 my-1.5 rounded text-xl hover:ml-2 hover:border-l-8 hover:duration-200 hover:ease-out"
                    >
                        <div className="inline-flex gap-2 items-center capitalize">
                            {/*<i>{category.icon}</i>*/}
                            {/*<p className="text-sm mt-1 font-bold">{category.name}</p>*/}
                        </div>
                        <i>
                            {/*<ChevronFoward />*/}
                        </i>
                    </div>
                {/*))}*/}
            </div>
        </div>
    )
}