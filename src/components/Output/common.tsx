import styled from '@emotion/styled';

export const WidgetContainer = styled.div`
  background-color: var(--color-almostBlack);
  border: 1px solid var(--color-lighterBlack);
  border-radius: var(--border-radius);
`;

export const WidgetTitle = styled.h2`
  padding-left: 28px;
  padding-top: 28px;
  padding-bottom: 1rem;
  margin: 0;
  color: var(--color-white);
  line-height: 24px;
`;

export const GrayLabel = styled.p`
  font-size: var(--font-size-additional-p);
  color: var(--color-darkerGray);
  margin: 0;
  padding: 0;
`;

export const GrayLabelUppercase = styled(GrayLabel)`
  text-transform: uppercase;
`;

export const HSpaceBig = styled.div`
  width: 32px;
`;
export const HSpaceMed = styled.div`
  width: 16px;
`;
export const HSpaceSmall = styled.div`
  width: 12px;
`;
export const HSpaceTiny = styled.div`
  width: 8px;
`;

export const VSpaceBig = styled.div`
  height: 32px;
`;
export const VSpaceMed = styled.div`
  height: 16px;
`;
export const VSpaceSmall = styled.div`
  height: 12px;
`;
export const VSpaceTiny = styled.div`
  height: 8px;
`;

type RowProp = {
  center?: boolean;
};

export const RowWrapper = styled.div<RowProp>`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: ${p => (p.center ? 'center' : 'flex-start')};
`;
