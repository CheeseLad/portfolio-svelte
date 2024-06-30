<script>
  import PostData from '../data/posts.json';
  import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

  function chunkArray(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }

  const projectsRows = chunkArray(PostData, 3);
</script>

<div class="container mx-auto py-12">
  <h2 class="text-3xl font-bold text-center mb-8">Blog Posts</h2>
  
  {#each projectsRows as projectsRow}
    <div class="flex flex-wrap mx-6">
      {#each projectsRow as project}
        <div class="px-4 mb-8">
            <div class="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:transform hover:scale-105 transition duration-300 block">
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
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300">
                      <FontAwesomeIcon icon={faPenToSquare} />
                      Blog
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
