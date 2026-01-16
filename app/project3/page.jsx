import FullPageProject from "../components/fullpage";

export default function Page6() {
  return (
    <FullPageProject
      title="WEBSITE FOR ICHI"
      quote="designing a website for café ichi"
      description="* designed and coded a café website based on owner interviews, competitive research and user testing. iterated on ui/ux through feedback and built the site using html, css and javascript, focusing on a minimal, modern design aligned with ichi's instagram aesthetic. the site provides clear menu access, contact info, opening hours and a foundation for future online ordering."
      image="/images/project_ichi.svg"
      reverse={false}
      buttons={[
        { text: "ichi website", link: "https://ichiwebsite.netlify.app" },
        { text: "documentation", link: "/ichi.pdf" },
      ]}
    />
  );
}