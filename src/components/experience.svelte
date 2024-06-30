<script>
  import experienceData from '../data/experience.json';
</script>

<div class="container mx-auto py-8">
  <h2 class="text-3xl font-bold mb-4 text-center">Experience</h2>
  
  {#each experienceData as experience}
    <div class="mx-6 flex items-center mb-8 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:transform hover:scale-105 transition duration-300">
      <div class="flex-1 mx-4">
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
          <a href={link.url} class="text-blue-500 hover:text-blue-600 mx-2" target="_blank" rel="noopener noreferrer">
            <i class={link.icon}></i>
          </a>
        {/each}
      </div>
    </div>
    <hr class="my-8">
  {/each}
</div>
