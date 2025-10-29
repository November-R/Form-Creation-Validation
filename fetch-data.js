/*
document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM successfully loaded");

    let dataContainerArray =document.getElementById("api-data");
    
    const fetchUserData = async() => {
        
        try{

            let dataContainerArray =document.getElementById("api-data");
            const apiUrl = "https://jsonplaceholder.typicode.com/users";

            const response = await fetch(apiUrl, {
                method: "Get",
                headers : {
                    Accept: "application/json"
                }
            });

            if(!response.ok){
                console.log("It is us, not you!")
            }

            const jsonData = await response.json();
            //console.log(jsonData);

            //clearing and appending our array
            dataContainerArray.innerHTML = "";
            dataContainerArray.append(jsonData);

            

        }catch(error){
            console.error(error);
        }
    }

fetchUserData();
})
*/



    //async function that fetches user's name using an api and displays them 
    const fetchUserData = async() => {
        try{

            let dataContainer = document.getElementById("api-data");
            

            const apiUrl = await fetch("https://jsonplaceholder.typicode.com/users",{
                method: "Get",
                headers: {
                    Accept: "application/json"
                }
            });
            if(!apiUrl.ok){
                throw new error("Its us(our programmers fault, but don't tell her that), not you");
            }

            const users = await apiUrl.json();
            //console.log(users);
            
            //clear any existig content
            dataContainer.innerHTML = '';
            //console.log(dataContainer);

            //creating a list
            const userList = document.createElement("ul");
            
            //creating a list element, looping through each and appending it to the unorderd list
            users.forEach(user => {
                
                const firstListItem = document.createElement("li");
                firstListItem.textContent = user.name;
                userList.appendChild(firstListItem);
                //console.log(userList);
            });

            //appending the unordered list to the data container
            dataContainer.appendChild(userList);
            
            //console.log(dataContainer);

        
        //error catching and display after clearing any existing content    
        }catch(error) {
            dataContainer.innerHTML = '';
            document.getElementById("api-data").textContent ="oopsie, Failed to load user Data";
            console.error("Error Alert", error);
        }
    }


document.addEventListener("DOMContentLoaded", (event) => {
    //confirms html has loaded successfully
    console.log("DOM successfully loaded");

    //call the function
    fetchUserData();

})
