import Layout from '../components/MyLayout';
import Link from 'next/link';

const PostLink =  props => (
    <li>
        <Link href={`/post?title=${props.title}`}>
          <a>{props.title}</a>
        </Link>
    </li>
);

export default function Blog() {
    return (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                <PostLink title="Hello Next.js" />
                <PostLink title="Learn Next.js is awesome" />
                <PostLink title="Next.Deploy apps with Zeit" />

            </ul>

        </Layout>
    )
}

// const Index = () => (
//     <div>
//         <Layout>
//         <p>Hello Next.js</p>

//         </Layout > 
//     </div>
// );

// export default Index;