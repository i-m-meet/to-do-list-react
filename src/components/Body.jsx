import Section from "./Section";
import TaskCard from "./TaskCard";

const Body = () => {
    return (
        <div className="h-[1000px] grid grid-cols-3 gap-5 p-6 ">
            <Section name="To do">
            </Section>
            <Section name="Doing">
            </Section>
            <Section name="Done">
            </Section>
        </div>
    );
}

export default Body