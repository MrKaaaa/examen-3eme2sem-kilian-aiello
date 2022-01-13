namespace examen_kilian_aiello.Models;

public class Tag
{
    public int TagId { get; set; }
    public string Name { get; set; }
    
    public List<Note> Notes { get; set; }
}