import PwaInstallPromptWrapper from '@/components/pwa/PwaInstallPromptWrapper';
import { CardWithForm } from '@/components/shared/card';

export default function Home() {
  const showPromptes: boolean = false;
  return (
    <div>
      {/* PWA Install Prompt */}
      {showPromptes && (
        <PwaInstallPromptWrapper appName="PWA App" appIcon="/icons/apple-touch-icon.png" />
      )}
      <div className="p-4">
        <CardWithForm />
      </div>
    </div>
  );
}
