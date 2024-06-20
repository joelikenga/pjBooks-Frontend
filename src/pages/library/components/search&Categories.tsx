export const   SearchAndCategories = () => {
    return(
        <div className={"w-3/12 h-full max-h-full p-4 bg-[red]"}>
            <div className={"h-full"}>
            {/* Search query section */}
            <form className="rounded m-2 relative flex items-center">
                <input
                    className="outline-0 border-0 w-full h-10 rounded p-2 font-semibold"
                    autoFocus
                    placeholder="search..."
                    type="text"
                />

            </form>


        </div>
        </div>
    )
}