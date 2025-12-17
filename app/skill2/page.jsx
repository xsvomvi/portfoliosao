import FullPageProject from "../components/fullpage";

export default function Page2() {
  return (
    <FullPageProject
      title="WEB DESIGN & UI/UX DESIGN"
      quote='"webbing" my creativity even more'
      description="design is about more than visuals: it's about understanding what people feel, want, need and expect. with web design & ui/ux, combining creativity with critical thinking and storytelling were important skills i've learned, continuously adapting to create meaningful experiences."
      programs="programs learned: figma, canva | languages learned: html, css, javascript."
      image="/project2.svg"
      reverse={false}
      buttons={[
        { text: "ichi website", link: "https://saospassionproject.netlify.app" },
      ]}
    />
  );
}