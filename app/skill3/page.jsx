import FullPageProject from "../components/fullpage";

export default function Page3() {
  return (
    <FullPageProject
      title="CONTENT (STRATEGY)"
      quote="my third phase of exploring media"
      description="i often aim to spark creativity or amusement in myself and others. my editing journey taught me how to share creativity in ways that could engage or resonate. i've learned not only how to create content, but also to strategically shape it to connect with the right people and build the right mindset for growth."
      image="/project3.svg"
      reverse={false}
      buttons={[
        { text: "instagram", link: "https://instagram.com/svospo" },
        { text: "tiktok", link: "https://tiktok.com/@soeemiee" },
      ]}
    />
  );
}