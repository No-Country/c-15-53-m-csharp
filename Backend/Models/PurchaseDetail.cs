using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class PurchaseDetail
{
    public int PurchaseDetailId { get; set; }

    public int? PurchaseId { get; set; }

    public int? ProductId { get; set; }

    public int? Amount { get; set; }

    public decimal? Total { get; set; }

    public virtual Product? Product { get; set; }

    public virtual Purchase? Purchase { get; set; }
}
