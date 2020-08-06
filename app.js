const validator = require('validator')
const yargs = require('yargs')
const notes = require('./notes')
const { argv } = require('yargs')


// customize yargs version
yargs.version('1.1.0')

//create add command

yargs.command({
    command: 'add',
    describe: "Add a new note",
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note of the body',
            demandOption: true,
            type: 'string'
        }


    },
    handler(argv)
    {
        notes.addNote(argv.title,argv.body)

    }
})

//create remove command

yargs.command({
    command: 'remove',
    describe: "Remove a new note",
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv)
    {
        notes.removeNote(argv.title)
    }
})

//create list command

yargs.command({
    command: 'list',
    describe: "list your notes",
    handler(argv)
    {
        notes.listNotes(argv)
    }
})

//create read command

yargs.command({
    command: 'read',
    describe: "Read your previous note",
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv)
    {
        notes.readNote(argv.title)
    }
})

yargs.parse()



