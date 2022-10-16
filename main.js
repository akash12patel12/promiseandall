const posts = [
  { title: "post one", body: "This is post one", createdAt: new Date().getTime() },
  { title: "post two", body: "This is post tne", createdAt: new Date().getTime()},
];
let intervalid =0;
function getPosts(){
    clearInterval(intervalid);
    intervalid =  setTimeout(()=>{
        
        setInterval(()=>{
            let output = '';
            posts.forEach((post)=>{
                output += `<li>${post.title} -- last undated ${new Date().getTime()/1000 - post.createdAt/1000} seconds</li>`;
                document.body.innerHTML = output ;
            })
        },1000);
        },1000);

        
}



function createPost(post, callback){
    setTimeout(()=>{
        posts.push({...post, createdAt : new Date().getTime()});
        callback();
    },2000);
}



createPost({title: 'Post Three', body: 'This is post three'}, getPosts);
