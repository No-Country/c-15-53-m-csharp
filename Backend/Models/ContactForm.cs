using System.ComponentModel.DataAnnotations;

namespace Backend.Models;

public partial class ContactForm
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public string? Email { get; set; }
    public string? Msg { get; set; }
}
