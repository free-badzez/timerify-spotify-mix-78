import React, { createContext, useContext, useState } from 'react';

interface SettingsContextType {
  showSpotify: boolean;
  setShowSpotify: (show: boolean) => void;
  background: string;
  setBackground: (bg: string) => void;
  backgroundType: 'image' | 'video';
  setBackgroundType: (type: 'image' | 'video') => void;
  fontColor: string;
  setFontColor: (color: string) => void;
  fontFamily: string;
  setFontFamily: (font: string) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [showSpotify, setShowSpotify] = useState(true);
  const [background, setBackground] = useState('');
  const [backgroundType, setBackgroundType] = useState<'image' | 'video'>('image');
  const [fontColor, setFontColor] = useState('#FFFFFF');
  const [fontFamily, setFontFamily] = useState('Inter');

  return (
    <SettingsContext.Provider
      value={{
        showSpotify,
        setShowSpotify,
        background,
        setBackground,
        backgroundType,
        setBackgroundType,
        fontColor,
        setFontColor,
        fontFamily,
        setFontFamily,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}