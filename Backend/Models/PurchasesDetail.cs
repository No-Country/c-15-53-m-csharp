using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class PurchasesDetail
{
    public int Id { get; set; }

    public int? ProductQuantity { get; set; }

    public decimal? ProductTotal { get; set; }

    public int? PurchaseId { get; set; }

    public virtual ICollection<ProductsVariant> ProductsVariants { get; set; } = new List<ProductsVariant>();

    public virtual Purchase? Purchase { get; set; }
}
