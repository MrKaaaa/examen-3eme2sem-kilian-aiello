namespace examen_kilian_aiello.Models;

public class Author
{
    public int AuthorId { get; set; }
    public string Name { get; set; }
    
    public List<Note> Notes { get; set; }
}