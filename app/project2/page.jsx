import FullPageProject from "../components/fullpage";

export default function Page5() {
  return (
    <FullPageProject
      title="'FWB' BOARDGAME"
      quote="making a boardgame from scratch"
      description="designed visual assets and card systems for a fast-paced 18+ party board game with app integration, based on trend research, interviews and user testing. created color-coded card designs, icons and questions to support different gameplay stages, iterated through feedback, and contributed to the website and showcase presentation to strengthen the game's identity and usability."
      image="/images/project_fwb.svg"
      reverse={false}
      buttons={[
        { text: "documentation", link: "/fwb.pdf" },
      ]}
    />
  );
}