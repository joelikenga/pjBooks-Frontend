export const SubjectsSection = () => {
    return (
        <div className={"mt-6  pl-1 md:pl-8 lg:pl-0"}>
            {/*-----------------text area ------------------*/}
            <div className={"flex justify-start items-center"}>
                <p className={"text-2xl font-bold leading-tight mb-4"}>Subject section</p>
            </div>
            {/*-------------------card----------------------*/}
            <div className={"grid grid-cols-3 gap-4 h-[16rem]  rounded-lg"}>
                {/*---------------------------science---------------------------------*/}
                <div
                    className={"col-span-1 h-[8rem] gap-2 bg-default_secondary text-default_accent rounded-lg flex justify-between hover:bg-default_accent hover:!text-default_secondary duration-150 cursor-pointer"}>
                    {/*subject title*/}
                    <div className={"w-1/2 h-full  items-center justify-between flex flex-col px-2 pt-4 flex-wrap"}>

                        <p className={"font-semibold text-2xl  "}>Science</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1}
                             stroke="currentColor" className="size-16">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"/>
                        </svg>


                    </div>
                    {/*books amount*/}
                    <div className={"w-1/2 flex items-center justify-center px-2"}>
                        <div className={"w-full flex justify-center items-center flex-col"}>
                            <p className={" font-semibold text-2xl"}>1.2k</p>
                            <p className={"text-default_primary_2 font-medium text-xs"}>Books available</p>
                        </div>
                    </div>

                </div>

                {/*-----------------------Arts-----------------------*/}
                <div
                    className={"col-span-1 h-[8rem] gap-2 bg-default_secondary text-default_accent rounded-lg flex justify-between hover:bg-default_accent hover:!text-default_secondary duration-150 cursor-pointer"}>
                    {/*subject title*/}
                    <div className={"w-1/2 h-full  items-center justify-between flex flex-col px-2 pt-4 flex-wrap"}>

                        <p className={"font-semibold text-2xl  "}>Arts</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1}
                             stroke="currentColor" className="size-16">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"/>
                        </svg>


                    </div>
                    {/*books amount*/}
                    <div className={"w-1/2 flex items-center justify-center px-2"}>
                        <div className={"w-full flex justify-center items-center flex-col"}>
                            <p className={" font-semibold text-2xl"}>1.2k</p>
                            <p className={"text-default_primary_2 font-medium text-xs"}>Books available</p>
                        </div>
                    </div>

                </div>
                {/*---------------commerce----------------------------*/}
                <div
                    className={"col-span-1 h-[8rem] gap-2 bg-default_secondary text-default_accent rounded-lg flex justify-between hover:bg-default_accent hover:!text-default_secondary duration-150 cursor-pointer"}>
                    {/*subject title*/}
                    <div className={"w-1/2 h-full  items-center justify-between flex flex-col px-2 pt-4 flex-wrap"}>

                        <p className={"font-semibold text-2xl  "}>Commerce</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1}
                             stroke="currentColor" className="size-16">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M14.121 7.629A3 3 0 0 0 9.017 9.43c-.023.212-.002.425.028.636l.506 3.541a4.5 4.5 0 0 1-.43 2.65L9 16.5l1.539-.513a2.25 2.25 0 0 1 1.422 0l.655.218a2.25 2.25 0 0 0 1.718-.122L15 15.75M8.25 12H12m9 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>


                    </div>
                    {/*books amount*/}
                    <div className={"w-1/2 flex items-center justify-center px-2"}>
                        <div className={"w-full flex justify-center items-center flex-col"}>
                            <p className={" font-semibold text-2xl"}>1.2k</p>
                            <p className={"text-default_primary_2 font-medium text-xs"}>Books available</p>
                        </div>
                    </div>

                </div>
                {/*-----------------design---------------------------*/}
                <div
                    className={"col-span-1 h-[8rem] gap-2 bg-default_secondary text-default_accent rounded-lg flex justify-between hover:bg-default_accent hover:!text-default_secondary duration-150 cursor-pointer"}>
                    {/*subject title*/}
                    <div className={"w-1/2 h-full  items-center justify-between flex flex-col px-2 pt-4 flex-wrap"}>

                        <p className={"font-semibold text-2xl  "}>Design</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1}
                             stroke="currentColor" className="size-16">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"/>
                        </svg>


                    </div>
                    {/*books amount*/}
                    <div className={"w-1/2 flex items-center justify-center px-2"}>
                        <div className={"w-full flex justify-center items-center flex-col"}>
                            <p className={" font-semibold text-2xl"}>1.2k</p>
                            <p className={"text-default_primary_2 font-medium text-xs"}>Books available</p>
                        </div>
                    </div>

                </div>
                {/*---------------------cook------------------------*/}
                <div
                    className={"col-span-1 h-[8rem] gap-2 bg-default_secondary text-default_accent rounded-lg flex justify-between hover:bg-default_accent hover:!text-default_secondary duration-150 cursor-pointer"}>
                    {/*subject title*/}
                    <div className={"w-1/2 h-full  items-center justify-between flex flex-col px-2 pt-4 flex-wrap"}>

                        <p className={"font-semibold text-2xl  "}>Cooking</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1}
                             stroke="currentColor" className="size-16">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z"/>
                        </svg>


                    </div>
                    {/*books amount*/}
                    <div className={"w-1/2 flex items-center justify-center px-2"}>
                        <div className={"w-full flex justify-center items-center flex-col"}>
                            <p className={" font-semibold text-2xl"}>1.2k</p>
                            <p className={"text-default_primary_2 font-medium text-xs"}>Books available</p>
                        </div>
                    </div>

                </div>
                {/*---------------------others----------------------------*/}
                <div
                    className={"col-span-1 h-[8rem] gap-2 bg-default_secondary text-default_accent rounded-lg flex justify-between hover:bg-default_accent hover:!text-default_secondary duration-150 cursor-pointer"}>
                    {/*subject title*/}
                    <div className={"w-1/2 h-full  items-center justify-between flex flex-col px-2 pt-4 flex-wrap"}>

                        <p className={"font-semibold text-2xl  "}>Others</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1}
                             stroke="currentColor" className="size-16">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"/>
                        </svg>


                    </div>
                    {/*books amount*/}
                    <div className={"w-1/2 flex items-center justify-center px-2"}>
                        <div className={"w-full flex justify-center items-center flex-col"}>
                            <p className={" font-semibold text-2xl"}>1.2k</p>
                            <p className={"text-default_primary_2 font-medium text-xs"}>Books available</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}