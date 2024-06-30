<script>
	import Posts from './src/components/posts.svelte';
  let title = 'Blog Page';
</script>

<svelte:head>
  <title>{title}</title> 
</svelte:head>

<div>
  <Posts />
</div>