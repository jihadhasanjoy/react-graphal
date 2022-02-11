import dynamic from 'next/dynamic';

const user = dynamic(() => import('@/components/single/UserEditor'),{
    ssr: false,
});

const post = dynamic(() => import('@/components/single/PostEditor'),{
    ssr: false,
});

const comment = dynamic(() => import('@/components/single/CommentEditor'),{
    ssr: false,
});



const DesignerComponent = {
    user,
    post,
    comment
}

export default DesignerComponent;