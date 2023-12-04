using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class Product
{
    public int ProductId { get; set; }

    public string ProductName { get; set; } = null!;

    public string? Description { get; set; }

    public double Price { get; set; }

    public int Stock { get; set; }

    public int? CategoryId { get; set; }

    public int? SubCategoryId { get; set; }

    public string? Image { get; set; }

    public string Size { get; set; } = null!;

    public string Color { get; set; } = null!;

    public string Activity { get; set; } = null!;

    public virtual Category? Category { get; set; }

    public virtual SubCategory? SubCategory { get; set; }
}
