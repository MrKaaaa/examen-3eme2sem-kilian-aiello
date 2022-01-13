#nullable disable
using examen_kilian_aiello.Data;
using examen_kilian_aiello.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace NotesPosting.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AuthorController : ControllerBase
{
    private readonly DataContext _context;

    public AuthorController(DataContext context)
    {
        _context = context;
    }

    // GET: api/Author
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Author>>> GetAuthors()
    {
        return await _context.Authors.ToListAsync();
    }

    // GET: api/Author/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Author>> GetAuthor(int id)
    {
        var author = await _context.Authors.FindAsync(id);

        if (author == null) return NotFound();

        return author;
    }

    // PUT: api/Author/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
    public async Task<IActionResult> PutAuthor(int id, Author author)
    {
        if (id != author.AuthorId) return BadRequest();

        _context.Entry(author).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!AuthorExists(id))
                return NotFound();
            throw;
        }

        return NoContent();
    }

    // POST: api/Author
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<Author>> PostAuthor([FromForm] AuthorRequest data)
    {
        var name = data.name;

        var author = new Author
        {
            Name = name
        };

        _context.Authors.Add(author);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetAuthor", new {id = author.AuthorId}, author.AuthorId);
    }

    // DELETE: api/Author/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteAuthor(int id)
    {
        var author = await _context.Authors.FindAsync(id);
        if (author == null) return NotFound();

        _context.Authors.Remove(author);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    // DELETE: api/Author/all
    [HttpDelete("all")]
    public async Task<IActionResult> DeleteAuthorAll()
    {
        var author = await _context.Authors.ToListAsync();
        if (author == null) return NotFound();

        _context.Authors.RemoveRange(author);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool AuthorExists(int id)
    {
        return _context.Authors.Any(e => e.AuthorId == id);
    }
}