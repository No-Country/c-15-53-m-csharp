using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class Purchase
{
    public int Id { get; set; }

    public string? FullName { get; set; }

    public string? Dni { get; set; }

    public string? Phone { get; set; }

    public string? Email { get; set; }

    public string? Address { get; set; }

    public string? PostalCode { get; set; }

    public decimal? Total { get; set; }

    public DateTime? PurchaseDate { get; set; }

    public virtual ICollection<PurchasesDetail> PurchasesDetails { get; set; } = new List<PurchasesDetail>();
}
