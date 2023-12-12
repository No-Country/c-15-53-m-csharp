using Backend.Models;

namespace Backend.DTOs
{
    public class PurchaseDetailDTO
    {
        public int? ProductId { get; set; }

        public int? Amount { get; set; }

        public decimal? Total { get; set; }
    }
}
