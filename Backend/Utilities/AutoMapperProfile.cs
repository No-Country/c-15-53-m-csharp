using AutoMapper;
using Backend.DTOs;
using Backend.Models;

namespace Backend.Utilities
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            #region Product
            CreateMap<Product, ProductDTO>().ReverseMap()
                .ForMember(destiny => destiny.Id, opt => opt.MapFrom(source => source.Id))
                .ForMember(destiny => destiny.Name, opt => opt.MapFrom(source => source.Name))
                .ForMember(destiny => destiny.Description, opt => opt.MapFrom(source => source.Description))
                .ForMember(destiny => destiny.Price, opt => opt.MapFrom(source => source.Price))
                .ForMember(destiny => destiny.Img, opt => opt.MapFrom(source => source.Img))
                .ForMember(destiny => destiny.CategoryId, opt => opt.MapFrom(source => source.CategoryId))
                .ForMember(destiny => destiny.SubCategoryId, opt => opt.MapFrom(source => source.SubCategoryId))
                
                ;
            #endregion
            #region ProductsVariant
            CreateMap<ProductsVariant, ProductsVariantDTO>().ReverseMap()
            .ForMember(destiny => destiny.Size, opt => opt.MapFrom(source => source.Size))
            .ForMember(destiny => destiny.Color, opt => opt.MapFrom(source => source.Color))
            .ForMember(destiny => destiny.ProductsId, opt => opt.MapFrom(source => source.ProductsId))

            ;
            #endregion
            #region PurchasesDetail
            CreateMap<PurchasesDetail, PurchaseDetailDTO>().ReverseMap()
            .ForMember(destiny => destiny.ProductQuantity, opt => opt.MapFrom(source => source.ProductQuantity))
            .ForMember(destiny => destiny.ProductTotal, opt => opt.MapFrom(source => source.ProductTotal))
            .ForMember(destiny => destiny.ProductsVariants,  opt => opt.MapFrom(source => source.ProductsVariants))
            ;
            #endregion
            #region Purchase
            CreateMap<Purchase, PurchaseDTO>().ReverseMap()
                .ForMember(destiny => destiny.Total, opt => opt.MapFrom(source => source.Total))
                .ForMember(destiny => destiny.FullName, opt => opt.MapFrom(source => source.FullName))
                .ForMember(destiny => destiny.Dni, opt => opt.MapFrom(source => source.Dni))
                .ForMember(destiny => destiny.Phone, opt => opt.MapFrom(source => source.Phone))
                .ForMember(destiny => destiny.Email, opt => opt.MapFrom(source => source.Email))
                .ForMember(destiny => destiny.Address, opt => opt.MapFrom(source => source.Address))
                .ForMember(destiny => destiny.PostalCode, opt => opt.MapFrom(source => source.PostalCode))
                .ForMember(destiny => destiny.PurchasesDetails, opt => opt.MapFrom(source => source.PurchasesDetails));
            #endregion

        }
    }
}
