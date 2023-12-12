using System;
using Backend.Models;
using Backend.DTOs;
using System.Collections.Generic;
public partial class Purchase
{
    public int PurchaseId { get; set; }
    public int? ProductTotal { get; set; }
    public decimal? Total { get; set; }
    public string? NameLastname { get; set; }
    public string? Dni { get; set; }
    public string? Phone { get; set; }
    public string? PurchaseEmail { get; set; }
    public string? PurchaseAddress { get; set; }
    public string? PostalCode { get; set; }
    public DateTime? FechaCompra { get; set; }

    public List<PurchaseDetail> PurchaseDetails { get; set; } = new List<PurchaseDetail>();
}

