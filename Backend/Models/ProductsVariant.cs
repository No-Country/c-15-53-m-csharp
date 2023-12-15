using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class ProductsVariant
{
    public int Id { get; set; }

    public string? Size { get; set; }

    public string? Color { get; set; }

    public int? PurchasesDetailsId { get; set; }

    public int? ProductId { get; set; }

    public int? Quantity { get; set; }

    public virtual Product? Product { get; set; }

    public virtual PurchasesDetail? PurchasesDetails { get; set; }
}
