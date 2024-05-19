import { motion } from "framer-motion";
import styled from "styled-components";

const MainLayout = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  width: 100vw;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #fff;
`;

export default function MainPage() {
  return (
    <MainLayout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Title>안녕</Title>
    </MainLayout>
  );
}
