import Part from "./Part";

export default function Content({ exercises1, part1, exercises2,part2, exercises3, part3 }) {

    return (
        <>
            <Part exercise={exercises1} part={part1} />
            <Part exercise={exercises2} part={part2} />
            <Part exercise={exercises3} part={part3} />
        </>
    );
}