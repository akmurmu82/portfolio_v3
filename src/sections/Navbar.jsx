import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-scroll";
import { AllContext } from "../context/Context";
import { useTheme } from "@emotion/react";

function Navbar() {
  const { isDarkTheme, toggleTheme } = useContext(AllContext);
  const theme = useTheme();

  const styles = {
    marginRight: "2rem",
    cursor: "pointer",
    color: !isDarkTheme ? theme.colors.light : theme.colors.dark,
    fontFamily: '"Kanit", sans-serif',
    fontWeight: "300",
    fontSize: "20px",
  };

  function Navlink({ title, to }) {
    return (
      <Link className="lato-normal" style={styles} to={to}>
        {title}
      </Link>
    );
  }

  function ThemeIcon() {
    return (
      <IconButton
        style={styles}
        icon={!isDarkTheme ? <SunIcon /> : <MoonIcon />}
        onClick={toggleTheme}
        variant="none"
      />
    );
  }

  const navlinks = [
    { title: "Home", to: "#home" },
    { title: "About", to: "#about" },
    { title: "Skills", to: "#skills" },
    { title: "Projects", to: "#projects" },
    { title: "Contact", to: "#contact" },
  ];

  return (
    <Flex
      w="100%"
      position="absolute"
      top="0"
      alignItems="center"
      bgColor={isDarkTheme ? theme.colors.light : theme.colors.dark}
      p="1rem 5rem"
      color={!isDarkTheme ? theme.colors.light : theme.colors.dark}
      justifyContent="space-between"
      transition="all 0.3s ease-in-out"
      style={styles}
    >
      <Text>
        <span>AK. </span>MURMU
      </Text>
      <Flex alignItems="center">
        {navlinks.map((link) => (
          <Navlink key={link.title} title={link.title} to={link.to} />
        ))}
        <ThemeIcon />
      </Flex>
    </Flex>
  );
}

export default Navbar;
