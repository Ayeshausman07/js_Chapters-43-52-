 

                                     // CHAPTER # 43 - 48

                                    

 //q1:Show an alert box on click on a link. 
 
 //ans:
//  function alertbox(){
//     alert("HELLO FROM ALERT BOX 😊")
//  }

//Q2:Display some Mobile images in browser. On click on an image Show the message in alert to user.

//ANS2:
// function xphone(){
//     alert("THANKS FOR PURCHASING THE FORM FROM US! 😊")
//  }


//Q3:Display 10 student records in table and each row should contain a delete 
// button. If you click on a button to delete a record, entire row should be 
// deleted.  

//ANS3:
// function deleteRow(button) {
//     var row = button.parentNode.parentNode;
//     row.parentNode.removeChild(row);
//   } 

//Q4:Display an image in browser. Change the picture on mouseover and set the first picture on mouseout.

//ANS4:
// function  newimage(){
//  document.getElementById("img").src ="https://i.pinimg.com/originals/cd/08/c7/cd08c7959eeea286c06acc8e4eaa691a.gif";
// }

// function nextimage(){
//     document.getElementById("img").src ="https://www.icegif.com/wp-content/uploads/2023/08/icegif-146.gif";

// }

//Q5:Show a counter in browser. Counter should increase on click on increase 
// button and decrease on click on decrease button. And show updated counter 
// value in browser. 

//ANS5:

// let counterValue = 0;
// function inc(button) {
//     counterValue++;
//     document.getElementById("number").innerText = counterValue;


// }

// function dec() {
//     counterValue--;
//     document.getElementById("number").innerText=counterValue;

// }


                                    // CHAPTER 49-53

//Q1:Create a signup form and display form data in your web page on submission.
//ans1:
// document.getElementById("signupForm").addEventListener("submit", function(event) {
//     event.preventDefault(); 
    
    
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;

   
//     document.getElementById("displayName").innerText = "Name: " + name;
//     document.getElementById("displayEmail").innerText = "Email: " + email;
//     document.getElementById("result").style.display = "block";
// });


//Q2:. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed. 

//ans2:
// function toggleReadMore() {
//     const moreText = document.querySelector(".more-text");
//     const button = document.querySelector(".read-more-btn");

//     if (moreText.style.display === "none") {
//         moreText.style.display = "inline";
//         button.textContent = "Read less"; 
//     } else {
//         moreText.style.display = "none";
//         button.textContent = "Read more"; 
//     }
// }


//Q3:In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.

//ANS3:
// var currentEditRow = null;


// function addStudent(event) {
//     event.preventDefault();

//     var name = document.getElementById("name").value;
//     var age = document.getElementById("age").value;
//     var grade = document.getElementById("grade").value;


//     var row = document.createElement("tr");

//     row.innerHTML = `
//         <td>${name}</td>
//         <td>${age}</td>
//         <td>${grade}</td>
//         <td>
//             <button class="edit-btn" onclick="editRow(this)">Edit</button>
//             <button class="delete-btn" onclick="deleteRow(this)">Delete</button>
//         </td>
//     `;


//     document.getElementById("studentTable").querySelector("tbody").appendChild(row);

  
//     document.getElementById("studentForm").reset();
// }


// function deleteRow(button) {
//     var row = button.parentElement.parentElement;
//     row.parentElement.removeChild(row);
// }


// function editRow(button) {
//     currentEditRow = button.parentElement.parentElement; 


//     document.getElementById("editName").value = currentEditRow.cells[0].innerText;
//     document.getElementById("editAge").value = currentEditRow.cells[1].innerText;
//     document.getElementById("editGrade").value = currentEditRow.cells[2].innerText;

 
//     document.getElementById("editForm").style.display = "block";
// }


// function saveEdit() {
//     if (currentEditRow) {
    
//         currentEditRow.cells[0].innerText = document.getElementById("editName").value;
//         currentEditRow.cells[1].innerText = document.getElementById("editAge").value;
//         currentEditRow.cells[2].innerText = document.getElementById("editGrade").value;

    
//         document.getElementById("editForm").style.display = "none";

//         currentEditRow = null;
//     }
// }