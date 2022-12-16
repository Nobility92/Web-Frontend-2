/*let notes = [];
function addNote(){
    const title = document.getElementById("title").value;
    const description = document.getElementById("desc").value;
    const date = document.getElementById("date").value;
    //localStorage.setItem(title, description, date);

    console.log(title, description, date);
    
    displayNote();
}


/*createNote();

function createNote(title, description, date){
    const newNote = {title, description, date, id: Date.now()} 
    notes.push(newNote);
    displayNote();
}

function displayNote(){
    const ul = document.querySelector('ul');
    notes.forEach((note) => {
        const li = document.createElement('li');
        const div = document.createElement('div');
        const h6 = document.createElement('h6');
        const p = document.createElement('p');
        const caption = document.createElement('caption');
        h6.innerText = note.title;
        p.innerText = note.description;
        caption.innerText = note.date;
        div.appendChild(h6);
        div.appendChild(p);
        div.appendChild(caption);
        li.appendChild(div);
        ul.appendChild(li);
        
    });
}*/

let notes = [];
document.querySelector('form').onsubmit = (e) => {
    e.preventDefault();

    const title = document.getElementById("title");
    const description = document.getElementById("desc");
    const date = document.getElementById("date");

    //console.log(title.value, description.value, date.value);

createNote(title.value, description.value, date.value);
};

function createNote(title, description, date){
    const newNote = {title, description, date, id: Date.now()};
    notes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(notes));
    //console.log(notes);
    displayNote();
}

function displayNote(){
   notes = JSON.parse(localStorage.getItem('notes'));
   console.log(notes);
    const ul = document.querySelector('ul');
    //Remove duplicate entries
    document.querySelectorAll('li').forEach((child) => child.remove());
    notes.forEach((note) => {
        const li = document.createElement('li');
        const div = document.createElement('div');
        const h6 = document.createElement('h6');
        const p = document.createElement('p');
        const caption = document.createElement('caption');
        h6.innerText = note.title;
        p.innerText = note.description;
        caption.innerText = note.date;
        div.appendChild(h6);
        div.appendChild(p);
        div.appendChild(caption);
        li.appendChild(div);
        ul.appendChild(li);
        
    });
}

window.onload = () => {
    displayNote();
};