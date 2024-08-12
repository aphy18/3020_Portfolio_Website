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
        // create the post image
        let postImg = document.createElement('img');
        postImg.src = post.image;
        if (post.id === 1) {
          postImg.classList.add('post-image-left');
        } else {
          postImg.classList.add('post-image-right');
        }
        // create the post body
        let postBody = document.createElement('div');
        postBody.innerHTML = post.body;
        postBody.classList.add('post-body');
        // append each post container to the blog section
        blogList.append(postContainer);
        // append each post to their post container
        postContainer.append(postTitle, postImg, postBody);
      });
    })
  .catch(error => console.error('Error loading blog posts:', error)); });