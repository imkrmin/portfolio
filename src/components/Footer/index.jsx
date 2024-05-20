import { motion } from "framer-motion";
import { FaArrowAltCircleUp, FaGoogle, FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { SiVelog } from "react-icons/si";
import styled from "styled-components";

const FooterLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 450px;
  padding: 20px 100px;
  background: #000;
  border-top: 1px solid;
  border-color: #000;
`;

const Position = styled.span`
  color: #fff;
  text-align: center;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: 10px;
`;

const Name = styled.span`
  color: #fff;
  text-align: center;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 144px */
  letter-spacing: 30px;
`;

const ContactMe = styled.span`
  margin-top: 10px;
  color: #fff;
  text-align: center;
  font-size: 23px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 25px;
  margin-top: 15px;
`;

const FaGoogleIcon = styled(FaGoogle)`
  color: #fff;
  width: 35px;
  height: 40px;
  cursor: pointer;
`;

const IoLogoGithubIcon = styled(IoLogoGithub)`
  color: #fff;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const FaInstagramIcon = styled(FaInstagram)`
  color: #fff;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const SiVelogIcon = styled(SiVelog)`
  color: #fff;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const ScrollToUp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  width: 100%;
`;

const FaArrowAltCircleUpIcon = styled(FaArrowAltCircleUp)`
  color: #fff;
  width: 55px;
  height: 55px;
  cursor: pointer;
`;

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <FooterLayout>
      <Position>Front-end Developer</Position>
      <Name>Im Joo Min</Name>
      <ContactMe>Contact Me</ContactMe>
      <IconWrapper>
        <motion.a
          href="mailto:zum2n2@gmail.com"
          whileHover={{ scale: 1.3 }}
          transition={{ type: "spring", stiffness: 500, damping: 20 }}
        >
          <FaGoogleIcon href="" target="_blank" />
        </motion.a>
        <motion.a
          href="https://github.com/imkrmin"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.3 }}
          transition={{ type: "spring", stiffness: 500, damping: 20 }}
        >
          <IoLogoGithubIcon />
        </motion.a>
        <motion.a
          href="https://instagram.com/imkrmin"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.3 }}
          transition={{ type: "spring", stiffness: 500, damping: 20 }}
        >
          <FaInstagramIcon />
        </motion.a>
        <motion.a
          href="https://velog.io/@imkrmin/posts"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.3 }}
          transition={{ type: "spring", stiffness: 500, damping: 20 }}
        >
          <SiVelogIcon />
        </motion.a>
      </IconWrapper>
      <ScrollToUp>
        <motion.a
          whileHover={{ scale: 1.3 }}
          transition={{ type: "spring", stiffness: 500, damping: 20 }}
          onClick={scrollToTop}
        >
          <FaArrowAltCircleUpIcon />
        </motion.a>
      </ScrollToUp>
    </FooterLayout>
  );
}
