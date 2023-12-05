namespace Backend.DTOs
{
    public class ProductDTO
    {
        public int ProductId { get; set; }

        public string ProductName { get; set; } = null!;

        public string? Description { get; set; }

        public float Price { get; set; }

        public int Stock { get; set; }

        public int? CategoryId { get; set; }

        public int? SubCategoryId { get; set; }

        public string? Image { get; set; }

        public string Size { get; set; } = null!;

        public string Color { get; set; } = null!;

        public string Activity { get; set; } = null!;
    }
}
