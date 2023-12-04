using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class SubCategory
{
    public int SubCategoryId { get; set; }

    public string SubCategoryName { get; set; } = null!;

    public virtual ICollection<Product> Products { get; set; } = new List<Product>();
}
