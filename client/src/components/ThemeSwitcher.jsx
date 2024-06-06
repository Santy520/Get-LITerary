import { IconButton, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

function ThemeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label="Toggle theme"
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
    />
  );
}

export default ThemeSwitcher;
