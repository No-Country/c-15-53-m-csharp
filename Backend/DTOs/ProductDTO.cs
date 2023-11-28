namespace Backend.DTOs
{
    public class ProductDTO
    {
        public string Name { get; set; } = string.Empty;

        public string Description { get; set; } = string.Empty;

        public decimal Price { get; set; }

        public int Stock { get; set; }

        public string Category { get; set; } = string.Empty;

        public string Image { get; set; } = string.Empty;

        public string Size { get; set; } = string.Empty;

        public string Color { get; set; } = string.Empty;

        public string Activity { get; set; } = string.Empty;
    }
}