using System.ComponentModel.DataAnnotations;

namespace Backend.DTOs
{
    public class ContactFormDTO
    {
        [Required(ErrorMessage = "El campo Nombre es requerido")]
        public required string Name { get; set; }

        [Required(ErrorMessage = "El campo Email es requerido")]
        [EmailAddress(ErrorMessage = "El Email no es valido")]
        public required string Email { get; set; }

        [Required(ErrorMessage = "El campo Mensaje es requerido")]
        public required string Msg { get; set; }
    }
}