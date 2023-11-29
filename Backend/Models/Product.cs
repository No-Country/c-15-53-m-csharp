using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class Product
{
    public int ProductId { get; set; }

    public string ProductName { get; set; } = null!;

    public string Description { get; set; } = null!;

    public double Price { get; set; }

    public int Stock { get; set; }

    public string Category { get; set; } = null!;

    public string Image { get; set; } = null!;

    public string Size { get; set; } = null!;

    public string Color { get; set; } = null!;

    public string Activity { get; set; } = null!;
}
