const accesskey="93sM-Qr-2UuwoOaUXoHq51f0FrtO7sCv6D9U9kyoBg0";
const formEl=document.querySelector("form");
const inputEl=document.getElementById("search-input");
const searchresults=document.querySelector(".search-results");
const showmore=document.getElementById("show-more-button");

let inputdata="";
let page=1;

    async function searchImages(){
    inputdata=inputEl.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}
    &client_id=${accesskey}`;

    const res= await fetch(url);
    const data=await res.json();
     const results=data.results;

     if(page==1){
        searchresults.innerHTML="";
     }
     results.map((result)=>{
        const imagewrapper=document.createElement('div');
        imagewrapper.classList.add("search-result");
        const image=document.createElement("img");
        image.src=result.urls.small;
        image.alt=result.alt_description;
       const  imglink=document.createElement("a");
        imglink.href=result.links.html ;
        imglink.target="_blank";
        imglink.textContent=result.alt_description;

        imagewrapper.appendChild(image);
        imagewrapper.appendChild(imglink);
        searchresults.appendChild(imagewrapper);
     });

     page++;
     if(page>1){
        showmore.style.display="block";
     }
}

formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
    page=1;
    searchImages();
});
showmore.addEventListener("click",()=>{
    searchImages();
});