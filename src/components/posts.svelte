<script>
  import PostData from '../data/posts.json';
  import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import Returnhome from './returnhome.svelte';
  import { markdownToHtml } from '../utils/markdown.js';
  import { onMount } from 'svelte';

  let content = '';
  let truncatedContent = '';

  async function fetchMarkdown(filePath) {
    const response = await fetch(filePath);
    const markdown = await response.text();
    content = markdownToHtml(markdown);
    truncateContent(markdown);
  }

  function truncateContent(text) {
    if (text.length > 100) {
      truncatedContent = text.slice(0, 100) + '...';
    } else {
      truncatedContent = text;
    }
  }

  onMount(() => {
    if (PostData.length > 0) {
      fetchMarkdown(PostData[0].content);
    }
  });

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
    <div class="flex flex-wrap justify-center mx-6">
      {#each projectsRow as project}
        <div class="px-4 mb-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div class="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:transform hover:scale-105 transition duration-300 h-full flex flex-col">
            <div class="p-4 flex-1">
              <h3 class="text-xl font-bold mb-2">{project.title}</h3>
              <p class="text-gray-700 mb-4">{truncatedContent}</p>
              <div class="flex flex-wrap mb-2">
                {#each project.tags as tag}
                  <div class="bg-green-500 text-white rounded-full px-2 py-1 text-xs mr-2 mb-2">{tag}</div>
                {/each}
              </div>
              <div class="flex justify-between">
                <div class="flex justify-start">
                  <a href={`/blog/${project.id}`} class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 flex items-center">
                    <FontAwesomeIcon icon={faPenToSquare} class="mr-2" />
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  {/each}
  <Returnhome />
</div>
