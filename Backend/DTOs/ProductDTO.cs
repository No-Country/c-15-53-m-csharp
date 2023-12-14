namespace Backend.DTOs
{
    public class ProductDTO
    {
        public int Id { get; set; }

        public string? Name { get; set; }

        public string? Description { get; set; }

        public decimal? Price { get; set; }

        public string? Img { get; set; }

        public int? CategoryId { get; set; }

        public int? SubCategoryId { get; set; }

    }
}
