import FullPageProject from "../components/fullpage";

export default function Page2() {
  return (
    <FullPageProject
      title="UI/UX DESIGN"
      quote="my second phase of exploring media"
      description="design is about listening, not just creating:
by tuning into user feedback and testing, i refine my designs so they're not just easy on the eyes, but also meet the needs, making sure the experience is fun and intuitive."
      programs="tools: figma, canva | html, css, javascript."
      image="/project2.png"
      reverse={false}
      buttons={[
        { text: "photobooth", link: "https://saosphotobooth.vercel.app" },
        { text: "ichi website", link: "https://ichiwebsite.netlify.app" },
      ]}
    />
  );
}