import { useRouter, withRouter  } from 'next/router';
import Layout from '../components/MyLayout';

const Page = (props) => {
    const router = props.router;

    console.log(router);

    console.log(props);
    return (
        <Layout>
          <h1>{router.query.title}</h1>
          <p>This is blog post content.</p>
        </Layout>
    );
};

export default withRouter(Page);
