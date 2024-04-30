<!-- ProjectsSection.svelte -->
<script>
  // Import project data (replace this with your actual project data)
  import ProjectData from './ProjectData.json';
  import { faGithub } from '@fortawesome/free-brands-svg-icons';
  import { faArrowUpRightFromSquare, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';


  // Function to split the projects into rows of 3
  function chunkArray(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }

  // Split projects into rows of 3
  const projectsRows = chunkArray(ProjectData, 3);
</script>

<div class="container mx-auto py-12">
  <h2 class="text-3xl font-bold text-center mb-8">Projects</h2>
  
  {#each projectsRows as projectsRow}
    <div class="flex flex-wrap mx-32">
      {#each projectsRow as project}
        <div class="w-full md:w-1/3 px-4 mb-8 ">
            <div class="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:transform hover:scale-105 transition duration-300 block">
              <img src={project.image} alt={project.title} class="w-full h-48 object-cover object-center">
              <div class="p-4">
                <h3 class="text-xl font-bold mb-2">{project.title}</h3>
                <p class="text-gray-700 mb-4">{project.description}</p>
                <div class="flex flex-wrap mb-2">
                  {#each project.techStack as tech}
                    <div class="bg-green-500 text-white rounded-full px-2 py-1 text-xs mr-2 mb-2">{tech}</div>
                  {/each}
                </div>
                <div class="flex justify-between">
                  <div class="flex justify-start">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 mr-4">
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      Demo
                    </a>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300">
                      <FontAwesomeIcon icon={faPenToSquare} />
                      Read More
                    </a>
                  </div>
                  <div class="flex justify-end">
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition duration-300">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>
      {/each}
    </div>
  {/each}
</div>
