import Head from 'next/head'
import { ContentI } from '../../contentlayer.config';
import { useMDXComponent } from 'next-contentlayer/hooks';

export default function BlogLayer({ content }: { content: ContentI }) {
    const renderImg = (imageUrl: string, explanation: string) => (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img src={imageUrl} />
            <div className="img-exp">{explanation}</div>
        </div>
    );

    const renderCkp = (ckp: string) => (
        <span id={ckp}></span>
    );

    const Component = useMDXComponent(content?.body.code);
    return (
        <>
            <Head>
                <title>{content?.title}</title>
            </Head>
            <div>
                <article className="mx-auto max-w-2xl py-16">
                    {/* <div className="cl-post-body" dangerouslySetInnerHTML={{ __html: content.body.html }} /> */}
                    <Component
                        rdrImg={renderImg}
                        rdrCkp={renderCkp}
                    />
                </article>
            </div>
        </>
    );
}
