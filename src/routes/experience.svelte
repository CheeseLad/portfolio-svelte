<!-- ExperienceSection.svelte -->
<script>
  // Define experience data (replace this with your actual experience data)
  const experienceData = [
    {
      year: "2018 - Present",
      position: "Software Engineer",
      description: [
        "Developed and maintained web applications using React.js and Node.js.",
        "Collaborated with cross-functional teams to deliver high-quality software products.",
        "Implemented responsive UI designs to improve user experience."
      ],
      socialMediaLinks: [
        { icon: "fab fa-twitter", url: "/" },
        { icon: "fab fa-linkedin", url: "/" },
        { icon: "fab fa-github", url: "/" }
      ]
    },
    {
      year: "2016 - 2018",
      position: "Frontend Developer",
      description: [
        "Designed and developed user interfaces for mobile and web applications.",
        "Worked closely with UX designers to ensure intuitive user interaction.",
        "Optimized website performance and accessibility."
      ],
      socialMediaLinks: [
        { icon: "fab fa-twitter", url: "/" },
        { icon: "fab fa-linkedin", url: "/" },
        { icon: "fab fa-github", url: "/" }
      ]
    },
    {
      year: "2014 - 2016",
      position: "Software Developer",
      description: [
        "Developed software solutions for clients in various industries.",
        "Collaborated with project managers to deliver projects on time and within budget.",
        "Provided technical support and training to end users."
      ],
      socialMediaLinks: [
        { icon: "fab fa-twitter", url: "/" },
        { icon: "fab fa-linkedin", url: "/" },
        { icon: "fab fa-github", url: "/" }
      ]
    }
  ];
</script>

<div class="container mx-auto py-8">
  <h2 class="text-3xl font-bold mb-4 text-center">Experience</h2>
  
  {#each experienceData as experience}
    <div class="mx-6 flex items-center mb-8 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:transform hover:scale-105 transition duration-300">
      <div class="flex-1 mx-4a">
        <p class="font-bold">{experience.year}</p>
        <p class="text-lg">{experience.position}</p>
        <ul class="list-disc list-inside">
          {#each experience.description as desc}
            <li>{desc}</li>
          {/each}
        </ul>
      </div>
      <div class="flex">
        {#each experience.socialMediaLinks as link}
          <a href={link.url} class="text-blue-500 hover:text-blue-600 mx-2"><i class={link.icon}></i></a>
        {/each}
      </div>
    </div>
    <hr class="my-8">
  {/each}
</div>

<style>
  /* Add any additional styles here */
</style>
