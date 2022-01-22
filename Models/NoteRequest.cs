namespace examen_kilian_aiello.Models;

public class NoteRequest
{
    public int id { get; set; }
    public string title { get; set; }
    public string description { get; set; }
    public string? authorName { get; set; }
    public string? tagName { get; set; }
}