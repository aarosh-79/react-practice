import Grid from "@/components/grid";
import Card from "../components/card";
import Image from "../components/card";
import grid from "@/components/grid";
import Javascript from "@/components/javascript";
import Practice from "@/components/practice";
import ReusableCard from "@/components/reusableCard";
import { MM } from "@/components/default";
import States from "@/components/states";


export default function Home() {
  return (
    <div className="h-screen">
    <Javascript />
    <Practice/>
    <States/>
    <ReusableCard name="Jujutsu Kaisen" genre="curse" date="2023"img="https://i.pinimg.com/736x/73/bf/f5/73bff5ec115f325a9bd5b3211716129c.jpg"/>
    <ReusableCard name="Re-zero" genre="Isekai" date="2016" img="https://i.pinimg.com/736x/0d/a4/00/0da400204a3b90849253b1c28a01e6af.jpg"/>
    <ReusableCard name="Dragon Ball Z" genre="Action" date="1995" img="https://i.pinimg.com/736x/5b/63/12/5b63122512db99f26393ff2a1dd2da70.jpg"/>
    <ReusableCard name="Shangrila Frontier" genre="Game" date="2024" img="https://i.pinimg.com/736x/b6/fc/c6/b6fcc6afdda99eae78d4e7f55007e093.jpg"/>
    <MM/>

    </div>
      );
} 
