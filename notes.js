const fs = require('fs')
const chalk = require('chalk')
const { title } = require('process')

const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter(function (note)
    // {
    //     return note.title === title
    // })
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen('New Note Added !!!'))}
    
        else {
        console.log(chalk.bgRed('Note title already taken.Please change title !!!'))
    
        }
}
const removeNote = (title) =>
{
    const notes = loadNotes()
    const notesToKeep = notes.filter( (note) => note.title !==title )
        
    

    if(notes.length > notesToKeep.length){
        console.log(chalk.bgGreen('Node Removed !'))
        saveNotes(notesToKeep)
    }
    else{
        console.log(chalk.bgRed('No note found !'))
    }
}


const saveNotes = (notes) => {
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes =  () =>
{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
}
const listNotes = () =>
{   
    const notes = loadNotes()
    console.log(chalk('Your Notes'))
    notes.forEach((note) =>
    {
        console.log(note.title)
    })
}

const readNote = (title) =>
{
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if (note)
    {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }
    else
    {
        console.log(chalk.red.inverse('No such note found !!!'))
    }

}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
