using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class ContactForm
{
    public int ContactFormId { get; set; }

    public string? ContactName { get; set; }

    public string? Email { get; set; }

    public string? ContactMessage { get; set; }
}
