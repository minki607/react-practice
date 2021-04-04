import styled, { css } from 'styled-components'

const PageContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    margin: ${({ margin }) => (margin ? margin : '20px')};
    ${({ isMobile }) =>
        isMobile &&
        css`
            margin: 0;
            width: 100%;
        `}
`
export default PageContainer
