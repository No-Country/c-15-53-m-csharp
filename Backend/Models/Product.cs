namespace Backend.Models;

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

    public string? CardDescription { get; set; }

    public virtual Category? Category { get; set; }

    public virtual ICollection<ProductsVariant> ProductsVariants { get; set; } = new List<ProductsVariant>();

    public virtual SubCategory? SubCategory { get; set; }

}
