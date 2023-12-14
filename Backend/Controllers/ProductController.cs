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
        /// <summary>
        /// Gets a list of all products.
        /// </summary>
        /// <returns>Returns a response with a list of ProductDTO or an error message.</returns>
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
        /// <summary>
        /// Gets a list of products based on the specified category ID.
        /// </summary>
        /// <param name="CategoryId">The ID of the category.</param>
        /// <returns>Returns a response with a list of ProductDTO or an error message.</returns>
        [HttpGet("Category/{CategoryId}")]
        public async Task<IActionResult> GetProductsByCategory(int CategoryId)
        {
            ResponseApi<List<ProductDTO>> _response = new ResponseApi<List<ProductDTO>>();
            try
            {
                List<Product> productList = await _productService.GetProductsByCategory(CategoryId);

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
        /// <summary>
        /// Gets a list of products based on the specified category and subcategory IDs.
        /// </summary>
        /// <param name="CategoryId">The ID of the category.</param>
        /// <param name="SubCategoryId">The ID of the subcategory.</param>
        /// <returns>Returns a response with a list of ProductDTO or an error message.</returns>
        [HttpGet("Category/{CategoryId}/SubCategory/{SubCategoryId}")]
        public async Task<IActionResult> GetProductsByCategoryAndSubCategory(int CategoryId, int SubCategoryId)
        {
            ResponseApi<List<ProductDTO>> _response = new ResponseApi<List<ProductDTO>>();
            try
            {
                List<Product> productList = await _productService.GetProductsByCategoryAndSubCategory(CategoryId, SubCategoryId);

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
        /// <summary>
        /// Gets a specific product based on the provided product ID.
        /// </summary>
        /// <param name="ProductId">The ID of the product.</param>
        /// <returns>Returns a response with a ProductDTO or an error message.</returns>
        [HttpGet("{ProductId}")]
        public async Task<IActionResult> Get(int ProductId)
        {
            ResponseApi<ProductDTO> _response = new ResponseApi<ProductDTO>();
            try
            {
                Product _productFound = await _productService.Get(ProductId);

                if (_productFound != null && _productFound.Id != 0)
                {
                    _response = new ResponseApi<ProductDTO>
                    {
                        Status = true,
                        Msg = "Ok",
                        Value = _mapper.Map<ProductDTO>(_productFound)
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
    }
}
