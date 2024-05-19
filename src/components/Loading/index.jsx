import { BarLoader } from "react-spinners";
import styled from "styled-components";

const LoadingLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 30px;
`;

const Name = styled.span`
  color: #000;
  font-size: 30px;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 6px;
  line-height: normal;
`;

export default function Loading() {
  return (
    <LoadingLayout>
      <Name>Im Joo Min</Name>
      <BarLoader
        color="#000000"
        cssOverride={{}}
        height={1}
        loading
        speedMultiplier={1}
        width={250}
      />
    </LoadingLayout>
  );
}
