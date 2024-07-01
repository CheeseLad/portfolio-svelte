<script>
  import experienceData from '../data/experience.json';
</script>

<div class="container mx-auto">
  <h2 class="text-3xl font-bold text-center mb-10">Experience</h2>
  
  <div class="grid mx-8 md:grid-cols-2 gap-8">
    {#each experienceData as experience}
      <div class="flex flex-col md:flex-row items-center mb-8 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:transform hover:scale-105 transition duration-300">
        <img src={experience.image} alt={experience.position} class="w-1/4 object-cover">
        <div class="flex-1 mx-4">
          <p class="font-bold">{experience.position} - 
            <a href={experience.link} class="text-blue-500 hover:text-blue-600" target="_blank" rel="noopener noreferrer">{experience.company}</a>
          </p>
          <p class="text-lg">{experience.year}</p>
          <ul class="list-disc list-inside">
            {#each experience.description as desc}
              <li>{desc}</li>
            {/each}
          </ul>
        </div>
      </div>
    {/each}
  </div>
</div>
