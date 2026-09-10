import React from 'react';
import { FeaturedPartyBoat } from './FeaturedPartyBoat';
import { Language } from '../types';

interface FeaturedPrivateYachtProps {
  currentLang: Language;
  onBookYacht: () => void;
}

/**
 * Backwards compatibility wrapper:
 * Replaces the old private yacht section with the Alanya Party Boat Tour.
 */
export const FeaturedPrivateYacht: React.FC<FeaturedPrivateYachtProps> = ({
  currentLang,
  onBookYacht,
}) => {
  return (
    <FeaturedPartyBoat
      currentLang={currentLang}
      onBookPartyBoat={onBookYacht}
    />
  );
};

export { FeaturedPartyBoat };
