using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace examen_kilian_aiello.Models;

public class Note
{
    [Key]
    public int NoteId { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }

    public int? IdTag { get; set; }
    [ForeignKey("IdTag")]
    public Tag Tag { get; set; }
    
    public int? IdAuthor { get; set; }
    
    [ForeignKey("IdAuthor")]
    public Author Author { get; set; }
}