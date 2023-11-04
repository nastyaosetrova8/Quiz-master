import styled from "styled-components";

export const TextWrapper = styled.div`
  /* outline: 1px solid yellow; */
  /* height: 20px; */
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* align-items: center; */
  justify-content: space-between;
  @media (min-width: 768px) {
    gap: 24px;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const ResultBox = styled.div`
  /* outline: 1px solid red; */
  /* width: 100%; */
  height: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SpanStyled = styled.span`
  display: block;
  color: var(--text-color-60);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.16px;
`;

export const PStyled = styled.p`
  display: block;
  color: var(--text-color-100);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.16px;
`;

export const RatingBox = styled.div`
  /* outline: 1px solid red; */
  height: 20px;
  display: flex;
  align-items: center;
  gap: 11px;
  @media (min-width: 768px) {
    gap: 12px;
  }
`;