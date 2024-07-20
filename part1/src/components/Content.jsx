import Part from "./Part";

export default function Content({ exercises1, exercises2, exercises3 }) {
    const part1 = 'Fundamentals of React';
    const part2 = 'Using props to pass data';
    const part3 = 'State of a component';

    return (
        <>
            <Part exercise={exercises1} part={part1} />
            <Part exercise={exercises2} part={part2} />
            <Part exercise={exercises3} part={part3} />
        </>
    );
}