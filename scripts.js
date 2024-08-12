document.addEventListener('DOMContentLoaded', function() {
  const blogList = document.getElementById('blog-list');

  fetch('./posts.json') 
    .then(response => response.json()) 
    .then(posts => {
      posts.forEach(post => {
        
        // create post container
        let postContainer = document.createElement('div');
        postContainer.classList.add('post-container');

        // create the post title first
        let postTitle = document.createElement('h1');
        postTitle.innerHTML = post.title;
        postTitle.classList.add('post-title');

        // create post body
        let postBody = document.createElement('div');
        postBody.innerHTML = post.body;
        postBody.classList.add('post-body');
        
        const postElement = document.createElement('div');
        postElement.innerHTML = post.body;
        console.log('each post html:', postElement.innerHTML)
        
        // append each post container to the blog section
        blogList.append(postContainer);

        // append each post to their post container
        postContainer.append(postTitle, postBody);

      });
    })
  .catch(error => console.error('Error loading blog posts:', error)); });