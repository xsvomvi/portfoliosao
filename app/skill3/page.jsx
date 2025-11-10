import FullPageProject from "../components/fullpage";

export default function Page3() {
  return (
    <FullPageProject
      title="CONTENT CREATION & STRATEGY"
      quote="pushing my creativity out there"
      description="besides creating, i also aim to spark creativity, amusement, interest or motivation in myself and others. my editing journey taught me how to share creativity in ways that engage, resonate and attract. i've learned not only how to create content, but also to strategically shape it to connect with the right people, support goals and build the right mindset for growth."
      image="/project3.svg"
      reverse={false}
      buttons={[
        { text: "instagram", link: "https://instagram.com/svospo" },
        { text: "tiktok", link: "https://tiktok.com/@soeemiee" },
      ]}
    />
  );
}