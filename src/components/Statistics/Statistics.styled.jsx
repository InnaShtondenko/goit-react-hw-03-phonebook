import styled from 'styled-components';
import { getRandomColor } from 'components/utils/getRandomColor';

export const CardTitle = styled.h2`
    font-size: ${p => p.theme.fontSizes[4]}px;
    text-transform: uppercase;
    margin: 0;
    padding: ${p => p.theme.space[4]}px;
    `;

export const StatItem = styled.li`
    flex-grow: 1;
    padding: ${p => p.theme.space[3]}px;
    background-color: ${getRandomColor};
    border-top: ${p => p.theme.borders.small};
    list-style: none;
    color: ${p => p.theme.colors.light};

    &:nth-of-type(2) {
    border-left: ${p => p.theme.borders.small};
    border-right: ${p => p.theme.borders.small};
    }
    `;
    

export const StatCaption = styled.span`
    display: block;
    margin-bottom: ${p => p.theme.space[2]}px;
    `;

export const StatNumber = styled.span`
    display: block;
    font-size: ${p => p.theme.fontSizes[3]}px;
    font-weight: ${p => p.theme.fontWeights.medium};
    `;