function Card() {
  return (

    <div className="bg-purple-200 flex flex-col items-center p-4 relative group">
      <img className="h-[100px] w-[100px] rounded-full" src="https://i.pinimg.com/474x/45/10/8c/45108c4c13057e9afdb7a6517bac32c9.jpg" alt="user"></img>
      <h1 className="my-10">Kaoruku Waguuri</h1>

      <div className="bg-[rgb(0,0,0)]/[0.5] p-4 absolute top-0 bottom-0 flex flex-col items-center opacity-0 group-hover:opacity-100 ">
        <h1 className="text-blue-100">The Fragrant Flower Blooms with Dignity</h1>
        <h2 className="text-blue-100">2025</h2>
        <h2 className="text-blue-100">wohooooo</h2>
      </div>
    </div>
  );
}
export default Card;