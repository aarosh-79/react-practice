//using arrow function
function ReusableCard({name,img,genre,date}) {
    return(
        <div className="bg-black flex flex-col items-center p-4 relative group">
        <img className="h-[100px] w-[100px] rounded-full" src={img}></img>
        <h1 className="my-10">{name} </h1>
    
        <div className="bg-[rgb(255,0,255)]/[0.5] p-4 absolute top-0 bottom-0 flex flex-col items-center opacity-0 group-hover:opacity-100 ">
          <h1 className="text-blue-100">{name}</h1>
          <h2 className="text-blue-100">{genre}</h2>
          <h2 className="text-blue-100">{date}</h2>
        </div> 
      </div> 
    )
};
export default ReusableCard;
