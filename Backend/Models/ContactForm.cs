namespace Backend.Models
{
    public class ContactForm
    {
        public int ContactFormId { get; set; }
        public string? Name { get; set; }
        public string? Email { get; set; }
        public string? Message { get; set; }
    }
}