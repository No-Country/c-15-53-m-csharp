using Backend.Models;

namespace Backend.DTOs
{
    public class PurchaseDetailDTO
    {
        public int? ProductQuantity { get; set; }

        public decimal? ProductTotal { get; set; }
    }
}
