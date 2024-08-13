<script context="module" lang="js">
  export async function load({ params }) {
    const { id } = params;

    const res = await fetch(`/data/posts.json`);
    const posts = await res.json();
    const post = posts.find(p => p.id === id);

    return {
      props: {
        post
      }
    };
  }
</script>

<script>
  export let post;

  if (!post) {
    return <p>Post not found</p>;
  }
</script>

<div class="container mx-auto py-12">
  <div class="max-w-3xl mx-auto">
    <h1 class="text-4xl font-bold mb-4">{post.title}</h1>
    <p class="text-gray-700 mb-8">{post.content}</p>
    <a href="/" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300">
      Back to Blog
    </a>
  </div>
</div>
