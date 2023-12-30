
function Overview() {
    return (
        <div className="flex justify-center items-center pt-8">
            <div className="flex flex-col w-[80rem] bg-cover bg-[url('https://cdn.dak.gg/lol/images/bg-profile-header.jpg')]">
                <div className="flex flex-row">
                    <img 
                        src="https://ddragon.leagueoflegends.com/cdn/11.14.1/img/profileicon/29.png"
                        className="w-[110px] h-[110px] ml-[30px] mt-[30px] mb-[30px] rounded-full"
                    ></img>

                        <div className="flex flex-col mt-[30px] ml-[30px] space-y-4">
                            <div className="flex flex-row space-x-3">
                                <p className="text-2xl font-bold">TYRONES BBC</p>
                                <button className="bg-indigo-500 h-[25px] w-[40px] mt-[3px] rounded-md text-sm"> NA</button>
                            </div>

                        <div className="flex flex-row space-x-3">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update (WIP)</button>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Card (WIP)</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview;