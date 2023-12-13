﻿namespace Backend.Models;

public partial class Product
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? Description { get; set; }

    public decimal? Price { get; set; }

    public string? Img { get; set; }

    public int? CategoryId { get; set; }

    public int? SubCategoryId { get; set; }

    public bool? State { get; set; }

    public int? ProductVariantId { get; set; }

    public virtual Category? Category { get; set; }

    public virtual ProductsVariant? ProductVariant { get; set; }

    public virtual ICollection<PurchasesDetail> PurchasesDetails { get; set; } = new List<PurchasesDetail>();

    public virtual SubCategory? SubCategory { get; set; }
}
