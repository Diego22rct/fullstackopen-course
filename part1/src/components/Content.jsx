import Part from "./Part";

export default function Content({part1,part2, part3 }) {

    return (
        <>
            <Part exercise={part1.exercises} part={part1.name} />
            <Part exercise={part2.exercises} part={part2.name} />
            <Part exercise={part3.exercises} part={part3.name} />
        </>
    );
}