<script>
	import Contact from '../components/contact.svelte';
  import Experience from '../components/experience.svelte';
	import Posts from '../components/posts.svelte';
	import Projects from '../components/projects.svelte';
	import Skills from '../components/skills.svelte';
  let title = "Jake Farrell's Portfolio";
</script>

<svelte:head>
  <title>{title}</title>
	<meta name="description" content="Jake Farrell's Portfolio" />
  <script defer data-domain="jakefarrell.ie" src="https://plausible.jakefarrell.ie/js/script.js"></script> 
</svelte:head>

<div>
  <Projects />
  <Experience />
  <Skills />
  <!--<Posts />
  <Contact />-->
</div>

