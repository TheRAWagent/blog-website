
import { styled } from "styled-components"
import Blog,{BlogProps} from "../components/Blog"


const data: Array<BlogProps> = [
    {
        src: 'image.jpg',
        heading: 'Healthy Food',
        author: 'DJ',
        date: new Date(),
        summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aperiam impedit, iste cupiditate eius eveniet inventore vel quisquam minus odit fuga provident sapiente temporibus, distinctio velit assumenda recusandae reprehenderit tenetur! Ullam, nemo. Non maxime voluptatem harum nihil suscipit perspiciatis assumenda, et consectetur accusamus, blanditiis doloremque tenetur maiores ad ullam vitae voluptate minima ex quisquam ipsum fugit? Quod, totam ab fuga alias soluta, cupiditate minima tempore ratione nihil eveniet cumque dolorum perspiciatis unde quis temporibus exercitationem quae expedita sapiente officia officiis necessitatibus atque. Quaerat iure necessitatibus incidunt alias sunt expedita, dolor nemo recusandae voluptate ratione! Deserunt modi repellat ex quidem praesentium.'
    },
    {
        src: 'image.jpg',
        heading: 'Healthy Food',
        author: 'DJ',
        date: new Date(),
        summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aperiam impedit, iste cupiditate eius eveniet inventore vel quisquam minus odit fuga provident sapiente temporibus, distinctio velit assumenda recusandae reprehenderit tenetur! Ullam, nemo. Non maxime voluptatem harum nihil suscipit perspiciatis assumenda, et consectetur accusamus, blanditiis doloremque tenetur maiores ad ullam vitae voluptate minima ex quisquam ipsum fugit? Quod, totam ab fuga alias soluta, cupiditate minima tempore ratione nihil eveniet cumque dolorum perspiciatis unde quis temporibus exercitationem quae expedita sapiente officia officiis necessitatibus atque. Quaerat iure necessitatibus incidunt alias sunt expedita, dolor nemo recusandae voluptate ratione! Deserunt modi repellat ex quidem praesentium.'
    },
    {
        src: 'image.jpg',
        heading: 'Healthy Food',
        author: 'DJ',
        date: new Date(),
        summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aperiam impedit, iste cupiditate eius eveniet inventore vel quisquam minus odit fuga provident sapiente temporibus, distinctio velit assumenda recusandae reprehenderit tenetur! Ullam, nemo. Non maxime voluptatem harum nihil suscipit perspiciatis assumenda, et consectetur accusamus, blanditiis doloremque tenetur maiores ad ullam vitae voluptate minima ex quisquam ipsum fugit? Quod, totam ab fuga alias soluta, cupiditate minima tempore ratione nihil eveniet cumque dolorum perspiciatis unde quis temporibus exercitationem quae expedita sapiente officia officiis necessitatibus atque. Quaerat iure necessitatibus incidunt alias sunt expedita, dolor nemo recusandae voluptate ratione! Deserunt modi repellat ex quidem praesentium.'
    }
]

function Home(): JSX.Element {
    return (
        <>
            <Blogs>
                {data.map((item, index) => {
                    return (
                        <Blog key={index} item={item}/>
                    )
                })}
            </Blogs>
        </>
    )
}

const Blogs = styled.div`

`

export default Home