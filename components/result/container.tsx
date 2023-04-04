import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import { useRecoilValue } from "recoil";
import { textState } from "../../utils/store/text";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Container() {
  const text = useRecoilValue(textState);
  const [random, setRandom] = useState();

  const item = [
    "어 아니야",
    "글쎄",
    "이건 좀..",
    "멈춰!",
    "응",
    "그럴 것 같아",
    "당연하지",
    "응원해",
  ];
  const randomValue = item[Math.floor(Math.random() * item.length)];

  useEffect(() => {
    console.log("text: ", text);
  }, [text]);

  return (
    <Wrapper>
      <TextBox>
        <h1>&ldquo;{text}&ldquo;</h1>
        <p>질문에 대한 소라고동님의 답변입니다.</p>
      </TextBox>
      <Image src="/imgs/main/spiralShell.svg" />
      <Answer>&ldquo;{randomValue}&ldquo;</Answer>
      <Link href="/question">
        <Button>다시 질문하기</Button>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 520px;
  height: 580px;
  border-radius: 4px;
  background-color: ${theme.whiteColor};
  box-shadow: 0 0px 10px 2px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TextBox = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & > h1 {
    width: 330px;
    text-align: center;
    margin: 0;
    font-size: 28px;
    color: ${theme.blackColor};
  }
  & > p {
    margin: 0;
    font-size: 12px;
    color: ${theme.strongGrayColor};
  }
`;

const Image = styled.img`
  width: 150px;
  margin: 55px auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Answer = styled.h2`
  margin-top: 35px;
  font-size: 28px;
  color: ${theme.blackColor};
`;

const Button = styled.button`
  width: 320px;
  height: 50px;
  margin-top: 73px;
  border: none;
  outline: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  color: ${theme.whiteColor};
  background-color: ${theme.mainColor};
  cursor: pointer;
`;
