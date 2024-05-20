import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Menu } from "../Menu";
import { MenuToggle } from "../Menu/Menutoggle";
import { useMenuAnimation } from "../../Hook/useMenuAnimation";

const GnbLayout = styled(motion.div)`
  display: flex;
  padding: 20px 24px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  background: #000;
`;

const Logo = styled.span`
  color: #fff;
  text-align: center;
  font-family: Garamond;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 31.2px */
  letter-spacing: 5px;
`;

export default function Gnb() {
  const [isOpen, setIsOpen] = useState(false);

  const scope = useMenuAnimation(isOpen);

  return (
    <GnbLayout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Logo>Im Joo Min</Logo>
      <div ref={scope}>
        <Menu />
        <MenuToggle toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      </div>
    </GnbLayout>
  );
}
