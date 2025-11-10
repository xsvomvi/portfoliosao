import FullPageProject from "../components/fullpage";

export default function Page1() {
  return (
    <FullPageProject
      title="PHOTOGRAPHY & VIDEO EDITING"
      quote="the start of my journey"
      description="my journey began with video editing, experimenting with short edits and sharing them on my instagram account (@svospo). over three years, i expanded my skills to include vlogs, gameplays and photography, constantly exploring new ways to tell stories visually."
      programs="programs learned: sony vegas pro, capcut, adobe photoshop."
      image="/project1.svg"
      reverse={false}
      buttons={[
        { text: "instagram", link: "https://instagram.com/svospo" },
        { text: "tiktok", link: "https://tiktok.com/@soeemiee" },
      ]}
    />
  );
}