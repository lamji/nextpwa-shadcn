/**
 * BeforeInstallPromptEvent is fired at the window.onbeforeinstallprompt handler
 * before a user is prompted to "install" a web site to a home screen on mobile.
 */
export interface BeforeInstallPromptEvent extends Event {
  /**
   * Returns a Promise that resolves to a DOMString, one of: "accepted", "dismissed".
   */
  readonly userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
  
  /**
   * Allows a developer to show the install prompt at a time of their own choosing.
   * This method returns a Promise.
   */
  prompt(): Promise<void>;
}

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
    appinstalled: Event;
  }
}

export interface PwaInstallPromptProps {
  /**
   * The name of the app to display in the prompt
   */
  appName?: string;
  
  /**
   * The icon URL to display in the prompt
   */
  appIcon?: string;
}

export interface IosInstallPromptProps extends PwaInstallPromptProps {
  /**
   * Function to call when user dismisses the prompt
   */
  onDismiss: (permanent?: boolean) => void;
}

export interface AndroidInstallPromptProps extends PwaInstallPromptProps {
  /**
   * Function to call when user clicks the install button
   */
  onInstall: () => void;
  
  /**
   * Function to call when user dismisses the prompt
   */
  onDismiss: (permanent?: boolean) => void;
}
