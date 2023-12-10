const inputBox = document.getElementById("search-box");  //Add Task
const listContainer = document.getElementById("lists"); // List Container




function addTask(){
	if(inputBox.value===''){
		alert("You must write something"); // It will give u alert if click on add button if ur task box is empty
	}
	else{
		let li = document.createElement("li");  // it will create a li tag
		li.innerHTML = inputBox.value;  // It will add what task u write in task box
		listContainer.appendChild(li);  
		let del = document.createElement("del");  // It will add delete icon in ur task
		del.innerHTML = "&#10060";
		li.appendChild(del);
	}
	inputBox.value='';  // After adding the task it will give an empty task box to add another task
	savingData();
}

listContainer.addEventListener('click', function(r){
	if(r.target.tagName ==="LI"){
		r.target.classList.toggle("marked");  
		savingData();
	}
	else if(r.target.tagName ==="DEL"){
		r.target.parentElement.remove();
		savingData();
	}
},false);


function savingData(){
	localStorage.setItem("data",listContainer.innerHTML);  // It is my local storage were the data will store
};

function displayData(){
	listContainer.innerHTML = localStorage.getItem("data"); // It will show my data after reloading my page
}

displayData()