import FullPageProject from "../components/fullpage";

export default function Page1() {
  return (
    <FullPageProject
      title="VIDEO EDITING"
      quote="my first phase of exploring media"
      description="my journey began with video editing, experimenting with short edits and sharing them on my instagram account (@svospo). over three years, i expanded my skills to include little vlogs and gameplays, exploring new ways to tell stories visually."
      programs="programs learned: sony vegas pro, adobe after effects, capcut."
      image="/project1.svg"
      reverse={false}
      buttons={[
        { text: "instagram", link: "https://instagram.com/svospo" },
        { text: "tiktok", link: "https://tiktok.com/@soeemiee" },
      ]}
    />
  );
}