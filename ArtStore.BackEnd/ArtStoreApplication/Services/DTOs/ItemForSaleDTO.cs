using ArtStore.BackEnd.ArtStoreApplication.Data.DTOs;
using ArtStore.BackEnd.ArtStoreApplication.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;
using static ArtStore.BackEnd.ArtStoreApplication.Common.ValidationConstants;

namespace ArtStore.BackEnd.ArtStoreApplication.Services.DTOs
{
    public class ItemForSaleDTO : ModelDTO
    {
        public ItemForSaleDTO(ItemForSale item)
        {
            this.Id = item.Id;
            this.Title = item.Title;
            this.Description = item.Description;
            this.Price = item.Price;
            this.SellerName = item.Seller.Username;
        }
        public string Title { get; set; }

        public string Description { get; set; }

        public string SellerName { get; set; }

        public decimal Price { get; set; }
    }
}
