#nullable disable
using examen_kilian_aiello.Data;
using examen_kilian_aiello.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace NotesPosting.Controllers;

[Route("api/[controller]")]
[ApiController]
public class NoteController : ControllerBase
{
    private readonly DataContext _context;

    public NoteController(DataContext context)
    {
        _context = context;
    }

    // GET: api/Note
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Note>>> GetNotes()
    {
        return await _context.Notes.ToListAsync();
    }

    // GET: api/Note/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Note>> GetNote(int id)
    {
        var note = await _context.Notes.FindAsync(id);

        if (note == null) return NotFound();

        return note;
    }

    // PUT: api/Note/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
    public async Task<IActionResult> PutNote(int id, Note note)
    {
        if (id != note.NoteId) return BadRequest();

        _context.Entry(note).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!NoteExists(id))
                return NotFound();
            throw;
        }

        return NoContent();
    }

    // POST: api/Note
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<Note>> PostNote([FromForm] NoteRequest data)
    {
        Console.WriteLine("entrée dans PostNote");
        var title = data.title;
        var description = data.description;
        var authorName = data.authorName;
        int? authorId;
        var tagName = data.tagName;
        int? tagId;

        //Contrôle author
        if (authorName == "")
        {
            authorId = null;
        }
        else
        {
            var author = await _context.Authors.FirstOrDefaultAsync(author => author.Name == authorName);
            if (author == null)
            {
                var newAuthor = new Author
                {
                    Name = authorName
                };
                _context.Authors.Add(newAuthor);
                await _context.SaveChangesAsync();
                authorId = newAuthor.AuthorId;
            }
            else
            {
                authorId = author.AuthorId;
            }
        }

        //Contrôle tag
        if (tagName == "")
        {
            tagId = null;
        }
        else
        {
            var tag = await _context.Tags.FirstOrDefaultAsync(tag => tag.Name == tagName);
            if (tag == null)
            {
                var newTag = new Tag
                {
                    Name = tagName
                };
                _context.Tags.Add(newTag);
                await _context.SaveChangesAsync();
                tagId = newTag.TagId;
            }
            else
            {
                tagId = tag.TagId;
            }
        }

        var newNote = new Note
        {
            Title = title,
            Description = description,
            IdAuthor = authorId,
            IdTag = tagId
        };

        _context.Notes.Add(newNote);
        await _context.SaveChangesAsync();

        return newNote;
    }

    // DELETE: api/Note/5
    [HttpDelete("{id:int}")]
    public async Task<IActionResult> DeleteNote(int id)
    {
        var note = await _context.Notes.FindAsync(id);
        if (note == null) return NotFound();

        _context.Notes.Remove(note);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool NoteExists(int id)
    {
        return _context.Notes.Any(e => e.NoteId == id);
    }
}