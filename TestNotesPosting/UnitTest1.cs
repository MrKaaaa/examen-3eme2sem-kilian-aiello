using System.Collections.Generic;
using System.Linq;
using examen_kilian_aiello.Models;
using examen_kilian_aiello.Data;
using NotesPosting.Controllers;
using NUnit.Framework;

namespace TestNotesPosting;

public class Tests
{
    [SetUp]
    public void Setup()
    { 
    }

    private DataContext context;
    
    // [Test]
    // public void GetAllNotes_ShouldReturnAllNotes()
    // {
    //     var allNotes = context.Notes.ToList();
    //     var noteController = new NoteController(context);
    //     
    //     var result = noteController.GetNotes();
    //
    //     Assert.AreEqual(allNotes.Count, result.Count);
    // }
    
}