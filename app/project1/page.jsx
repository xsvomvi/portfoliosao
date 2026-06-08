import FullPageProject from "../components/fullpage";

export default function Page4() {
  return (
    <FullPageProject
      title="SAO'S PHOTOBOOTH"
      quote="creating a personal photobooth experience"
      description="* designed a photobooth for a personal project aimed at anime fans, focusing on user-friendly features and webcam functionality. optimized based on user feedback and testing with the target audience, creating visuals and interactions that enhance the anime theme and engage users more."
      image="/images/project_booth.svg"
      reverse={false}
      buttons={[
        { text: "website", link: "https://saosphotobooth.vercel.app" },
        { text: "documentation", link: "/photobooth.pdf" }
      ]}
    />
  );
}