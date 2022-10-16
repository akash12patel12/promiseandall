const posts = [
    { title: "post one", body: "This is post one", },
    { title: "post two", body: "This is post tne", },
  ];

  function getPost(){
    setTimeout(()=>{
      let output  = '';
      posts.forEach((post)=>{
        output += `<li>${post.title}</li>`
      });
      document.body.innerHTML = output;
    },1000)
  }

  function createPost(post){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        posts.push(post);
        const err = false;
        if(!err) resolve();
        else reject('Error');
      },2000);
    })
   
  }
 function deletepost(){
     
      return new Promise((resolve, reject)=>{
        console.log("Called Delete");
        setTimeout(()=>{
          
          if(post.length>0)
          { 
            const lastElement = posts.pop()
            resolve(lastElement);
          }
          else reject('Error');
        },3000);
      })
 }
  createPost({title: ' Post Three', body : 'This is post three'}).then(getPost).catch((err)=>{console.log(err);});
  

  deletepost().then(getPost).catch(err=>console.log(err));

  
