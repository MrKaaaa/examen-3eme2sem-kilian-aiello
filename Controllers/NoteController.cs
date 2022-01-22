#nullable disable
using examen_kilian_aiello.Data;
using examen_kilian_aiello.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query;

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

        var notes = await _context.Notes
            .Include(s => s.Tag)
            .Include(s => s.Author)
            .ToListAsync();

        return notes;
    }

    // GET: api/Note/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Note>> GetNote(int id)
    {
        var notes =  _context.Notes
            .Where(n => n.NoteId == id)
            .Include(s => s.Tag)
            .Include(s => s.Author).FirstOrDefault();
        
        if (notes == null)
        {
            return NotFound();
        }

        return notes;
    }

    // PUT: api/Note/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
    public async Task<Note?> PutNote(int id,[FromBody] NoteRequest note)
    {
        Console.WriteLine("entrée dans PutNote");
        
        var title = note.title;
        var description = note.description;
        var authorName = note.authorName;
        int? authorId;
        var tagName = note.tagName;
        int? tagId;

        //Contrôle author
        if (authorName == null)
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
        if (tagName == null)
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
            NoteId = id,
            Title = title,
            Description = description,
            IdAuthor = authorId,
            IdTag = tagId
        };

        _context.Entry(newNote).State = EntityState.Modified;

        await _context.SaveChangesAsync();

        return _context.Notes.FirstOrDefault(n => n.NoteId == id);
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
        if (authorName == null)
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
        if (tagName == null)
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
        return CreatedAtAction("GetNote", new {id = newNote.NoteId}, newNote);
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
    
    // DELETE: api/Note/all
    [HttpDelete("all")]
    public async Task<IActionResult> DeleteAllNote()
    {
        var note = await _context.Notes.ToListAsync();

        _context.Notes.RemoveRange(note);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    
    // NoteExist ?: api/Note/exist/5
    [HttpGet("exist/{id:int}")]
    public bool NoteExists(int id)
    {
        return _context.Notes.Any(e => e.NoteId == id);
    }
}