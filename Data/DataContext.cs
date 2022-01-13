using examen_kilian_aiello.Models;
using Microsoft.EntityFrameworkCore;

namespace examen_kilian_aiello.Data;

public class DataContext : DbContext
{
    
    public DbSet<Note> Notes { get; set; }
    public DbSet<Tag> Tags { get; set; }
    public DbSet<Author> Authors { get; set; }
    
    public string DbPath { get; }
    
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {
        var folder = Environment.SpecialFolder.LocalApplicationData;
        var path = Environment.GetFolderPath(folder);
        DbPath = System.IO.Path.Join(path, "note_post.db");
    }
    
    // The following configures EF to create a Sqlite database file in the
    // special "local" folder for your platform.
    protected override void OnConfiguring(DbContextOptionsBuilder options)
        => options.UseSqlite($"Data Source={DbPath}");
}