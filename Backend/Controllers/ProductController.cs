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
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;
        private readonly IMapper _mapper;

        public ProductController(IProductService productService, IMapper mapper)
        {
            _productService = productService;
            _mapper = mapper;
        }
        [HttpGet("all")]
        public async Task<IActionResult> Get()
        {
            ResponseApi<List<ProductDTO>> _response = new ResponseApi<List<ProductDTO>>();
            try
            {
                List<Product> productList = await _productService.GetList();
                if (productList.Count > 0)
                {
                    List<ProductDTO> dtoList = _mapper.Map<List<ProductDTO>>(productList);
                    _response = new ResponseApi<List<ProductDTO>> { Status = true, Msg = "OK", Value = dtoList };
                }
                else
                {
                    _response = new ResponseApi<List<ProductDTO>> { Status = false, Msg = "No records found" };
                }

                return StatusCode(StatusCodes.Status200OK, _response);
            }
            catch (Exception ex)
            {
                _response = new ResponseApi<List<ProductDTO>> { Status = false, Msg = ex.Message };
                return StatusCode(StatusCodes.Status500InternalServerError, _response);
            }
        }


        [HttpGet("Category/{categoryId}")]
        public async Task<IActionResult> GetProductsByCategory(int categoryId)
        {
            ResponseApi<List<ProductDTO>> _response = new ResponseApi<List<ProductDTO>>();
            try
            {
                List<Product> productList = await _productService.GetProductsByCategory(categoryId);

                if (productList != null && productList.Any())
                {
                    _response = new ResponseApi<List<ProductDTO>>
                    {
                        Status = true,
                        Msg = "Ok",
                        Value = _mapper.Map<List<ProductDTO>>(productList)
                    };
                }
                else
                {
                    _response = new ResponseApi<List<ProductDTO>> { Status = false, Msg = "No records found" };
                }

                return StatusCode(StatusCodes.Status200OK, _response);
            }
            catch (Exception ex)
            {
                _response = new ResponseApi<List<ProductDTO>> { Status = false, Msg = ex.Message };
                return StatusCode(StatusCodes.Status500InternalServerError, _response);
            }
        }

        [HttpGet("Category/{categoryId}/SubCategory/{subCategoryId}")]
        public async Task<IActionResult> GetProductsByCategoryAndSubCategory(int categoryId, int subCategoryId)
        {
            ResponseApi<List<ProductDTO>> _response = new ResponseApi<List<ProductDTO>>();
            try
            {
                List<Product> productList = await _productService.GetProductsByCategoryAndSubCategory(categoryId, subCategoryId);

                if (productList != null && productList.Any())
                {
                    _response = new ResponseApi<List<ProductDTO>>
                    {
                        Status = true,
                        Msg = "Ok",
                        Value = _mapper.Map<List<ProductDTO>>(productList)
                    };
                }
                else
                {
                    _response = new ResponseApi<List<ProductDTO>> { Status = false, Msg = "No records found" };
                }

                return StatusCode(StatusCodes.Status200OK, _response);
            }
            catch (Exception ex)
            {
                _response = new ResponseApi<List<ProductDTO>> { Status = false, Msg = ex.Message };
                return StatusCode(StatusCodes.Status500InternalServerError, _response);
            }
        }

        [HttpGet("{ProductId}")]
        public async Task<IActionResult> Get(int ProductId)
        {
            ResponseApi<ProductDTO> _response = new ResponseApi<ProductDTO>();
            try
            {
                Product _producFound = await _productService.Get(ProductId);

                if (_producFound != null && _producFound.ProductId != 0)
                {
                    _response = new ResponseApi<ProductDTO>
                    {
                        Status = true,
                        Msg = "Ok",
                        Value = _mapper.Map<ProductDTO>(_producFound)
                    };
                }
                else
                {
                    _response = new ResponseApi<ProductDTO> { Status = false, Msg = "No records found" };
                }
                return StatusCode(StatusCodes.Status200OK, _response);
            }
            catch (Exception ex)
            {
                _response = new ResponseApi<ProductDTO> { Status = false, Msg = ex.Message };
                return StatusCode(StatusCodes.Status500InternalServerError, _response);
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post(ProductDTO request)
        {
            ResponseApi<ProductDTO> _response = new ResponseApi<ProductDTO>();

            try
            {
                Product _model = _mapper.Map<Product>(request);
                Product _productCreate = await _productService.Add(_model);

                if (_productCreate.ProductId != 0)
                {
                    _response = new ResponseApi<ProductDTO>
                    {
                        Status = true,
                        Msg = "OK",
                        Value = _mapper.Map<ProductDTO>(_productCreate)
                    };
                }
                else
                    _response = new ResponseApi<ProductDTO> { Status = false, Msg = "Could not create record" };
                return StatusCode(StatusCodes.Status200OK, _response);
            }
            catch (Exception ex)
            {
                _response = new ResponseApi<ProductDTO> { Status = false, Msg = ex.Message };
                return StatusCode(StatusCodes.Status500InternalServerError, _response);
            }
        }
        [HttpPut]
        public async Task<IActionResult> Put(ProductDTO request)
        {
            ResponseApi<ProductDTO> _response = new ResponseApi<ProductDTO>();
            try
            {
                Product _model = _mapper.Map<Product>(request);
                Product _productEdited = await _productService.Update(_model);
                _response = new ResponseApi<ProductDTO>()
                {
                    Status = true,
                    Msg = "Ok",
                    Value = _mapper.Map<ProductDTO>(_productEdited)
                };
                return StatusCode(StatusCodes.Status200OK, _response);
            }
            catch (Exception ex)
            {
                _response = new ResponseApi<ProductDTO> { Status = false, Msg = ex.Message };
                return StatusCode(StatusCodes.Status500InternalServerError, _response);
            }
        }

        [HttpDelete("{ProductId}")]
        public async Task<IActionResult> Delete(int ProductId)
        {
            ResponseApi<bool> _response = new ResponseApi<bool>();
            try
            {
                Product _productFound = await _productService.Get(ProductId);
                bool deleted = await _productService.Delete(_productFound);
                if (deleted)
                    _response = new ResponseApi<bool> { Status = true, Msg = "OK" };
                else
                    _response = new ResponseApi<bool> { Status = false, Msg = "Product could not be disabled" };
                return StatusCode(StatusCodes.Status200OK, _response);
            }
            catch (Exception ex)
            {
                _response = new ResponseApi<bool> { Status = false, Msg = ex.Message };
                return StatusCode(StatusCodes.Status500InternalServerError, _response);
            }
        }
    }
}
