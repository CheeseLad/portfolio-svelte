<script>
  import Experience from '../components/experience.svelte';
	import Projects from '../components/projects.svelte';
	import Skills from '../components/skills.svelte';
  let pageText = 'Home';
</script>

<svelte:head>
  <title>{pageText} | Jake Farrell</title>
  <meta property="og:title" content="{pageText} | Jake Farrell">
  <meta name="twitter:title" content="{pageText} | Jake Farrell">
</svelte:head>

<div>
  <Projects />
  <Experience />
  <Skills />
</div>

