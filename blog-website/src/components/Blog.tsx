import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface BlogProps {
        src: string;
        heading: string;
        author: string;
        date: Date;
        summary: string;
}

function Blog({item}: {item: BlogProps}) {
    const { src, heading, author, date, summary } = item
    return (
        <Bloge>
            <Image src={src} />
            <Content>
                <Heading>{heading}</Heading>
                <Info>
                    <Author to='/'>{author}</Author>
                    <time>{date.toLocaleDateString()}</time>
                </Info>
                <Summary>{summary}</Summary>
            </Content>
        </Bloge>
    );
}

const Bloge = styled.div`
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 20px;
    margin-bottom: 30px;
`

const Image = styled.img`
    border-radius: 5px;
`
const Content = styled.div`
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 10px;
`

const Heading = styled.h2`
    font-size: 1.6rem;
    font-weight: bold;
    margin: 0;
`

const Summary = styled.p`
    margin: 10px 0;
    line-height: 1.5rem;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 1rem;
    color: #555;
`

const Author = styled(Link)`
    color: #333;
    text-decoration: none;
`

const Info = styled.div`
    margin: 6px 0;
    color: #666;
    font-size: 0.8rem;
    font-weight: bold;
    display: flex;
    gap: 5px;
    `


export type { BlogProps}
export default Blog