using Backend.Models;
using Backend.DTOs;
using System.ComponentModel.DataAnnotations;
namespace Backend.DTOs
{
    public class PurchaseDTO
    {
        [Required(ErrorMessage = "El nombre completo es obligatorio.")]
        public string? FullName { get; set; }

        [StringLength(20, ErrorMessage = "La longitud del DNI no puede ser mayor de 10 caracteres.")]
        public string? Dni { get; set; }

        [Required(ErrorMessage = "El número de teléfono es obligatoria.")]
        public string? Phone { get; set; }

        [EmailAddress(ErrorMessage = "La dirección de correo electrónico no es válida.")]
        public string? Email { get; set; }

        [Required(ErrorMessage = "La dirección es obligatoria.")]
        public string? Address { get; set; }

        [RegularExpression(@"^\d{10}$", ErrorMessage = "El código postal debe ser un número de 10 dígitos.")]
        public string? PostalCode { get; set; }

        [Range(0, double.MaxValue, ErrorMessage = "El valor total debe ser mayor o igual a cero.")]
        public decimal? Total { get; set; }

        public List<PurchaseDetailDTO> PurchasesDetails { get; set; } = new List<PurchaseDetailDTO>();
    }
}
