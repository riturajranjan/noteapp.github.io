const addBtn = document.querySelector("#btn");
const main = document.querySelector("#main");


addBtn.addEventListener("click",function(){
    addNote();
});

const saveNote = ()=>{
    const notes = document.querySelectorAll(".note textarea");
    const data = [];
    notes.forEach(
        (note) => {
            data.push(note.value);
        }
    )   
    if(data.length === 0){
        localStorage.removeItem("notes");
    }else{

        localStorage.setItem("notes", JSON.stringify(data));
    }
}




const addNote = (text = "")=>{
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `<div class="tool">
    <h2>Notes</h2>
    <div>
    <i class="save fa-solid fa-floppy-disk"></i>
    <i class="trace fa-solid fa-trash"></i>
    </div>
    
</div>
<textarea placeholder="Write Some text...">${text}</textarea>;`
note.querySelector(".trace").addEventListener("click", function(){
    note.remove();
    saveNote();
})
note.querySelector(".save").addEventListener("click", function(){
    saveNote();
})
note.querySelector("textarea").addEventListener("focusout", function(){
    saveNote();
})


main.appendChild(note);
saveNote();
}

(
    function(){
        const iSnotes = JSON.parse(localStorage.getItem("notes"));
        if(iSnotes == null){
            addNote();
        }else{
            iSnotes.forEach(
                (iSnotes)=>{
                    addNote(iSnotes);
                }
            )
        }
        
        // if(iSnotes.length ==0){
        //     localStorage.removeItem("notes")
        // }else{
        //     addNote(iSnotes);
        // }
    }
)()

