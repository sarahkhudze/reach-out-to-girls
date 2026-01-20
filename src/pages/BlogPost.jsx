import { useParams } from "react-router-dom";
import { useEffect } from "react";

const BlogPost = () => {
    const { id } = useParams();
    const post = Object.values(
        import.meta.glob('../content/blog/*.json', { eager: true })
    )
        .map(mod => mod.default)
        .find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!post) {
        return <div className="max-w-2xl mx-auto py-12 px-4">Post not found.</div>;
    }

    return (
        <div className="max-w-3xl mx-auto py-12 px-4">
            <button
                onClick={() => window.history.back()}
                className="text-[#292496] mb-6 inline-flex items-center border p-8"
            >
                ← Back to Blog
            </button>

            <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover rounded-xl mb-6"
            />

            <div className="text-sm text-[#65a7b2] mb-2">
                {new Date(post.date).toLocaleDateString()}
            </div>

            <h1 className="text-3xl font-bold text-[#292496] mb-4">{post.title}</h1>

            <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-[#f0f9ff] text-[#292496] px-2 py-1 rounded">
                        #{tag}
                    </span>
                ))}
            </div>

            <div
                className="prose prose-gray max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </div>
    );
};

export default BlogPost;