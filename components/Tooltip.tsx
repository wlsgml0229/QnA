import React, {ReactNode} from 'react';
import styled from "styled-components";
interface TooltipProps {
    children: React.ReactNode;
}
const Tooltip = ({ children }: TooltipProps) => {
    return (
        <TooltipContainer>
            {children}
            <TooltipWrap>

            </TooltipWrap>
        </TooltipContainer>
    );
};

export default Tooltip;

export const TooltipContainer = styled.div`
  position: relative;
`;

export const TooltipWrap = styled.div`
    position: absolute;
    bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 2rem;
  box-shadow: rgba(145, 158, 171, 0.24) 0px 0px 2px 0px, rgba(145, 158, 171, 0.24) -20px 20px 40px -4px;
  border-radius: 10px;
  width: 140px;
  z-index: 17;
  background-color: rgba(255, 255, 255, 0.9);
`;