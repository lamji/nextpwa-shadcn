
import PwaInstallPromptWrapper from "@/components/pwa/PwaInstallPromptWrapper";
import Hero from "@/components/home";

export default function Home() {
  const showPromptes:boolean=false
  return (
    <div>
      {/* PWA Install Prompt */}
      {showPromptes && <PwaInstallPromptWrapper 
        appName="PWA App"
        appIcon="/icons/apple-touch-icon.png"
      />}
      <Hero />
    
    </div>
  );
}
