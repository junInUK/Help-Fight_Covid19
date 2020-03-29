
document.addEventListener('DOMContentLoaded', () => {
    const newItemform = document.querySelector('#new-job-form');
    newItemform.addEventListener('submit', handleNewJobFormSubmit);

    const deleteAllJobsButton = document.querySelector('#delete-all-jobs');
    deleteAllJobsButton.addEventListener('click', handleDeleteAllJobsButton);
})

const handleDeleteAllJobsButton = function (){
    const deleteConfirm = confirm("Are you serious?!");
    if(true === deleteConfirm){
        const jobListTable = document.querySelector('#jobList');
        while(jobListTable.firstChild){
            jobListTable.removeChild(jobListTable.firstChild);
        }
    }
}

const handleNewJobFormSubmit = function (event) {
    event.preventDefault();
    const jobListItem = createJobListItem(event.target);
    const jobList = document.querySelector('#jobList');
    if(jobListItem!=null){
        jobList.appendChild(jobListItem);
        event.target.reset();
    }
}

const handleCloseButton = function (){
    const div = this.parentElement;
    div.style.display = "none";
}

const createJobListItem = function (form) {
    const jobInput = form.jobInput.value.trim();
    if(0 === jobInput){ //  job input are all space
        alert("Job input cannot be empty!");
        return null;
    }
    if("hide" === form.jobPriority.value){  //  cannot choose hide option
        alert("Please choose job priority!");
        return null;
    }
    //  create a tr
    const jobListItem = document.createElement('tr');
    //  create job description as the first td
    const jobDesc = document.createElement('td');
    jobDesc.textContent = form.jobInput.value;
    jobListItem.appendChild(jobDesc);
    //  create job priority as the second td
    const jobPriority = document.createElement('td');
    jobPriority.textContent = form.jobPriority.value;
    jobListItem.appendChild(jobPriority);
    //  create job status as the third td
    const jobStatus = document.createElement('td');
    jobStatus.textContent = "open";
    jobListItem.appendChild(jobStatus);
    //  create delete icon as the fourth td
    const jobRemove = document.createElement('td');
    const jobRemoveIcon = document.createElement('i');
    jobRemoveIcon.className = "fa fa-trash";
    jobRemove.appendChild(jobRemoveIcon);
    jobRemove.className = "close";
    jobRemove.addEventListener('click',handleCloseButton,false);
    jobListItem.appendChild(jobRemove);
    return jobListItem;
}



// // Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);
