import { storiesData } from "@/lib/data";
import CreateStory from "@/components/stories/CreateStory";
import StoryCard from "@/components/stories/StoryCard";

function Stories() {
  return (
    <div className="my-4 w-full shrink-0 py-3">
      <div
        role="row"
        className="scroll flex h-46 gap-2 overflow-x-auto overflow-y-hidden px-4"
      >
        <CreateStory />

        {storiesData.length > 0 &&
          storiesData.map(({ id, name, avatar, story }) => (
            <StoryCard name={name} avatar={avatar} story={story} key={id} />
          ))}
      </div>
    </div>
  );
}

export default Stories;
