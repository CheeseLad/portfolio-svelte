<script>
	import Experience from '../components/experience.svelte';
	import Posts from '../components/posts.svelte';
	import Projects from '../components/projects.svelte';
  let title = "Jake Farrell's Portfolio";
</script>

<svelte:head>
  <title>{title}</title>
	<meta name="description" content="Jake Farrell's Portfolio" /> 
</svelte:head>

<div>
  <Projects />
  <Experience />
  <Posts />
</div>

