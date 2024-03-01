// import { GithubLogo } from "phosphor-react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <FooterWrapper>
      Copyright © shiva kumar 2023
      <GithubLink
        href="https://github.com/shivuduu19"
        target="_blank"
        rel="noopener"
      >
        <FaGithub />
        {/* <GithubLogo size={32} weight="light" /> */}
      </GithubLink>
    </FooterWrapper>
  );
};
const FooterWrapper = styled.footer`
  position: absolute;
  /* left: 0px; */
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 2rem;
  padding: 1rem 0;
  /* background-color: pink; */
`;
const GithubLink = styled.a`
  margin-left: 1rem;
  color: green;
  font-size: 2rem;
`;
export default Footer;
