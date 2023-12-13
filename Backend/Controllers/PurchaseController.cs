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
    public class PurchaseController : ControllerBase
    {
        private readonly IPurchaseService _purchaseService;
        private readonly IMapper _mapper;

        public PurchaseController(IPurchaseService purchaseService, IMapper mapper)
        {
            _purchaseService = purchaseService;
            _mapper = mapper;
        }
        /// <summary>
        /// Adds a new purchase to the system.
        /// </summary>
        /// <param name="request">The PurchaseDTO containing information for the new purchase.</param>
        /// <returns>Returns a response with the created PurchaseDTO or an error message.</returns>
        [HttpPost("add")]
        public async Task<IActionResult> AddPurchase([FromBody] PurchaseDTO request)
        {
            ResponseApi<PurchaseDTO> _response = new ResponseApi<PurchaseDTO>();
            try
            {
                Purchase _model = _mapper.Map<Purchase>(request);
                Purchase _purchaseCreate = await _purchaseService.Add(_model);
                if (_purchaseCreate.Id != 0)
                {
                    _response = new ResponseApi<PurchaseDTO>()
                    {
                        Status = true,
                        Msg = "Compra registrada exitosamente.",
                        Value = _mapper.Map<PurchaseDTO>(_purchaseCreate)
                    };
                }
                else
                {
                    _response = new ResponseApi<PurchaseDTO> { Status = false, Msg = "Error al registrar la compra" };
                }
                return Ok(_response);
            }
            catch (Exception ex)
            {

                return BadRequest($"Error: {ex.Message}");
            }
        }
    }
}
