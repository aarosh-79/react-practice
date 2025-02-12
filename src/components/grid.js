function Grid(){
    return(
    <div className="bg-slate-100 grid grid-cols-5 gap-2">
    <div className="bg-red-400 h-[50px] ">1</div>
    <div className="bg-secondary-150 h-[50px] col-span-2">2</div>
    <div className="bg-blue-400 h-[50px]">3</div>
    <div className="bg-red-400 h-[50px]">4</div>
    <div className="bg-green-400 h-[50px]">5</div>
        </div>
    );
}
export default Grid;