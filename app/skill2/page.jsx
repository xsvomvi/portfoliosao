import FullPageProject from "../components/fullpage";

export default function Page2() {
  return (
    <FullPageProject
      title="UI/UX DESIGN"
      quote="my second phase of exploring media"
      description="to me, design is about more than visuals: it's about understanding what people feel, want, need or expect. i had the opportunity to conduct extensive user testing, combining creativity with critical thinking and storytelling to create intuitive and engaging experiences that meet users' needs."
      programs="programs learned: figma, canva | languages learned: html, css, js."
      image="/project2.svg"
      reverse={false}
      buttons={[
        { text: "ichi website", link: "https://saospassionproject.netlify.app" },
      ]}
    />
  );
}