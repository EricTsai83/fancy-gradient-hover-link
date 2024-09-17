import FancyLink from "@/components/fancy-link";

export default function Home() {
  return (
    <div>
      <FancyLink
        href="https://youtu.be/oJYFRZ4cj2Q"
        className="hover:text-light-blue before:bg-gradient-light-blue"
      >
        How
      </FancyLink>
      <FancyLink
        href="https://youtu.be/oJYFRZ4cj2Q"
        className="hover:text-light-blue before:bg-gradient-light-blue"
      >
        To
      </FancyLink>
      <FancyLink
        href="https://youtu.be/oJYFRZ4cj2Q"
        className="hover:text-light-blue before:bg-gradient-light-blue"
      >
        Make
      </FancyLink>
    </div>
  );
}
