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
                .ForMember(destiny =>
                destiny.ProductId, opt => opt.MapFrom(source => source.ProductId)
                )
                .ForMember(destiny =>
                destiny.ProductName, opt => opt.MapFrom(source => source.ProductName)
                )
                .ForMember(destiny =>
                destiny.Description, opt => opt.MapFrom(source => source.Description)
                )
                .ForMember(destiny =>
                destiny.Price, opt => opt.MapFrom(source => source.Price)
                )
                .ForMember(destiny =>
                destiny.Stock, opt => opt.MapFrom(source => source.Stock)
                )
                .ForMember(destiny =>
                destiny.CategoryId, opt => opt.MapFrom(source => source.CategoryId)
                )
                .ForMember(destiny =>
                destiny.SubCategoryId, opt => opt.MapFrom(source => source.SubCategoryId)
                )
                .ForMember(destiny =>
                destiny.Image, opt => opt.MapFrom(source => source.Image)
                )
                .ForMember(destiny =>
                destiny.Size, opt => opt.MapFrom(source => source.Size)
                )
                .ForMember(destiny =>
                destiny.Color, opt => opt.MapFrom(source => source.Color)
                )
                .ForMember(destiny =>
                destiny.Activity, opt => opt.MapFrom(source => source.Activity)
                )
                ;
            #endregion
            #region PurchaseDetail
            CreateMap<PurchaseDetail, PurchaseDetailDTO>().ReverseMap()
            .ForMember(destiny => destiny.ProductId, opt => opt.MapFrom(source => source.ProductId))
            .ForMember(destiny => destiny.Amount, opt => opt.MapFrom(source => source.Amount))
            .ForMember(destiny => destiny.Total, opt => opt.MapFrom(source => source.Total))
            ;
            #endregion
            #region Purchase
            CreateMap<Purchase, PurchaseDTO>().ReverseMap()
                .ForMember(destiny => destiny.ProductTotal, opt => opt.MapFrom(source => source.ProductTotal))
                .ForMember(destiny => destiny.Total, opt => opt.MapFrom(source => source.Total))
                .ForMember(destiny => destiny.NameLastname, opt => opt.MapFrom(source => source.NameLastname))
                .ForMember(destiny => destiny.Dni, opt => opt.MapFrom(source => source.Dni))
                .ForMember(destiny => destiny.Phone, opt => opt.MapFrom(source => source.Phone))
                .ForMember(destiny => destiny.PurchaseEmail, opt => opt.MapFrom(source => source.PurchaseEmail))
                .ForMember(destiny => destiny.PurchaseAddress, opt => opt.MapFrom(source => source.PurchaseAddress))
                .ForMember(destiny => destiny.PostalCode, opt => opt.MapFrom(source => source.PostalCode))
                .ForMember(destiny => destiny.PurchaseDetails, opt => opt.MapFrom(source => source.PurchaseDetails));
            #endregion

        }
    }
}
