<script>
	import Posts from '../../components/posts.svelte';
  let pageText = 'Blog';
</script>

<svelte:head>
  <title>{pageText} | Jake Farrell</title>
  <meta property="og:title" content="{pageText} | Jake Farrell">
  <meta name="twitter:title" content="{pageText} | Jake Farrell">
</svelte:head>

<div>
  <Posts />
</div>