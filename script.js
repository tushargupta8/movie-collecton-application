let target=document.getElementById("movie")
    let target1=document.querySelector(".container")
    target.addEventListener("input",collection)

    function collection(){
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=a654bfb3&s=${target.value}`).then(response=>response.json()).then((response)=>{
            fetchdata(response["Search"])
        }).catch((err)=>{
            console.log("error",err)
        }
        )

    }

    function fetchdata(arr){
        let html=""
        arr.forEach((element,index)=>{
            console.log("Element")
            console.log(element)

            console.log("Index")
            console.log(index)
            
           
            html+=`
            <div class="mov">
            <img src="${element.Poster}"/>
            <h2>${element.Title}</h2>
            <p>${element.Year}</p>
            </div>
            `;
        })
        target1.innerHTML=html;
        }
    