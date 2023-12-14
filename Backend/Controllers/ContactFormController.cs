using AutoMapper;
using Backend.DTOs;
using Backend.Models;
using Backend.Services.Contract;
using Backend.Utilities;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{

    [Route("api/[controller]")]
    [ApiController]

    public class ContactFormController : ControllerBase
    {
        private readonly IContactFormService _contactFormService;
        private readonly IMapper _mapper;

        public ContactFormController(IContactFormService contactFormService, IMapper mapper)
        {
            _contactFormService = contactFormService;
            _mapper = mapper;
        }

        [HttpPost("/send-contact-form")]
        public async Task<IActionResult> SendContactForm([FromBody] ContactFormDTO request)
        {
            ResponseApi<ContactFormDTO> _response = new ResponseApi<ContactFormDTO>();

            try
            {
                ContactForm _model = _mapper.Map<ContactForm>(request);
                ContactForm _contactFormCreated = await _contactFormService.Add(_model);

                _response = new ResponseApi<ContactFormDTO>()
                {
                    Status = true,
                    Msg = "Mensaje enviado correctamente",
                    Value = _mapper.Map<ContactFormDTO>(_contactFormCreated)
                };

                return Ok(_response);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error: {ex.Message}");
            }
        }
    }

}